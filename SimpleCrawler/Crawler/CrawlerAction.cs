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

        //抓取的任务列表
        public List<CrawlerTask> TaskList { get; set; } = new List<CrawlerTask>();

        public async void Start()
        {
            var watch = new Stopwatch();
            watch.Start();
            Console.WriteLine($"----------线程id:{Thread.CurrentThread.ManagedThreadId}-----开始任务:{CrawlerType+"--"+TaskList[0].TaskName}----------------------------");
            try
            {
                string html = await WebCrawler.GetTargetHtmlString();
                if (!string.IsNullOrWhiteSpace(html))
                {
                    int count =await WebCrawler.GetResultContent(html);
                    watch.Stop();
                    var milliseconds = watch.ElapsedMilliseconds;//获取请求执行时间
                    Console.WriteLine($"----------线程id:{Thread.CurrentThread.ManagedThreadId}-----结束任务:{CrawlerType+"--"+TaskList[0].TaskName},共采集{count}条数据,用时:{milliseconds}----------------------------");
                    logger.Info($"{CrawlerType}共采集{count}条数据,用时:{milliseconds}");
                }
                else
                {
                    Console.WriteLine($"---------------结束任务--{CrawlerType}:目标地址html获取失败---------------");
                    logger.Warn("目标地址html获取失败");
                }
            }
            catch(Exception ex){
                Console.WriteLine($"{CrawlerType} 异常结束任务" + ex.ToString());
                logger.Error(ex.ToString());
            }
        }
    }
}
