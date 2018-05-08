using log4net;
using SimpleCrawler.DAL;
using SimpleCrawler.DependencyInjection;
using SimpleCrawler.Entity;
using SimpleCrawler.Logger;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.IO.Compression;
using System.Net;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace SimpleCrawler.Crawler
{
    public class CrawlerAction
    {
        private ILog logger;
        private CrawlerBase WebCrawler;
        private string CrawlerType;
        public CrawlerAction(CrawlerBase crawler) {
            WebCrawler = crawler;
            logger = LoggerManager.GetLogger(crawler.TypeName);
            CrawlerType = crawler.TypeName.Name;
        }

        /// <summary>
        /// 当前线程爬虫类别ID
        /// </summary>
        public int CrawlerID{get{ return WebCrawler.CrawlerID; } }

        /// <summary>
        /// 分配给爬虫任务
        /// </summary>
        public List<CrawlerTask> TaskList { get; set; } = new List<CrawlerTask>();

        public async void Start()
        {
            if (TaskList.Count > 0)
            {
                try
                {
                    var watch = new Stopwatch();
                    for (int i = 0; i < TaskList.Count;i++)
                    {
                        CrawlerTask task = TaskList[i];
                        try
                        {
                            string taskname = task.TaskName;
                            restart: watch.Restart();
                            if (task.NeedNext)
                                taskname = task.TaskName + $"(分页{task.StartPage})";

                            Console.WriteLine($"----------------------开始任务:{CrawlerType + "--" + taskname}----------------------------");
                            string html = await WebCrawler.GetTargetHtmlString();
                            if (!string.IsNullOrWhiteSpace(html))
                            {
                                int count = await WebCrawler.GetResultContent(html);
                                watch.Stop();
                                if (count <= 0)
                                {
                                    Console.WriteLine($"---------------结束任务{CrawlerType + "--" + taskname}:没有匹配的数据---------------");
                                    logger.Warn($"结束任务{CrawlerType + "--" + taskname}:没有匹配的数据");
                                    break;
                                }
                                var milliseconds = watch.ElapsedMilliseconds;
                                Console.WriteLine($"----------------------{CrawlerType + "--" + taskname},共采集{count}条数据,用时:{milliseconds}----------------------------");
                                logger.Info($"{CrawlerType + "--" + taskname}共采集{count}条数据,用时:{milliseconds}");
                                if (task.NeedNext && task.StartPage < task.EndPage)
                                {
                                    Thread.Sleep(5000);
                                    WebCrawler.GetNextPageUrl(++task.StartPage);
                                    goto restart;
                                }
                            }
                            else
                            {
                                Console.WriteLine($"---------------结束任务{CrawlerType + "--" + taskname}:目标地址html获取失败---------------");
                                logger.Warn($"结束任务{CrawlerType + "--" + taskname}:目标地址html获取失败");
                                break;
                            }
                        }
                        catch (Exception ex) {
                            Console.WriteLine($"{CrawlerType + "--" + task.TaskName} 异常结束任务   " + ex.ToString());
                            logger.Error($"{CrawlerType + "--" + task.TaskName} 异常结束任务   " + ex.ToString());
                        }
                        Thread.Sleep(5000);
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"{CrawlerType} 异常结束任务" + ex.ToString());
                    logger.Error(ex.ToString());
                }
            }
        }
    }
}
