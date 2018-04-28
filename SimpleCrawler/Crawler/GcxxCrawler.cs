using log4net;
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

namespace SimpleCrawler.Crawler
{
    public class GcxxCrawler : ICrawler
    {
        public List<CrawlerTask> TaskList { get; set; }
        private string SiteName = "跑项目";
        private string SiteUrl = "http://www.gcxx.com/project/index?provinceOrCity=110000";
        private ILog logger;
        public CookieContainer CookiesContainer { get; set; }//定义Cookie容器

        public GcxxCrawler() {
            logger = LoggerManager.GetLogger(GetType());
        }

        /// <summary>
        /// 异步创建爬虫
        /// </summary>
        public void Start()
        {
            //var watch = new Stopwatch();
            //watch.Start();
            //Console.WriteLine($"----------线程id:{Thread.CurrentThread.ManagedThreadId}-----开始任务:{TaskList[0].TaskName}----------------------------");
            //string html = GetTargetHtmlString().Result;
            //if (html != null)
            //{
            //    int count = GetResultContent(html);
            //    watch.Stop();
            //    var milliseconds = watch.ElapsedMilliseconds;//获取请求执行时间
            //    Console.WriteLine($"----------线程id:{Thread.CurrentThread.ManagedThreadId}-----结束任务:{TaskList[0].TaskName},共采集{count}条数据,时间:{milliseconds}----------------------------");
            //}
        }

        private async Task<string> GetTargetHtmlString()
        {
            return await Task.Run(() =>
            {
                string pageSource = null;
                try
                {
                    var request = (HttpWebRequest)WebRequest.Create(SiteUrl);
                    request.Accept = "*/*";
                    //request.ServicePoint.Expect100Continue = false;//加快载入速度
                    //request.ServicePoint.UseNagleAlgorithm = false;//禁止Nagle算法加快载入速度
                    //request.AllowWriteStreamBuffering = false;//禁止缓冲加快载入速度
                    request.Headers.Add(HttpRequestHeader.AcceptEncoding, "gzip,deflate");//定义gzip压缩页面支持
                    request.ContentType = "application/x-www-form-urlencoded";
                    request.AllowAutoRedirect = false;
                    request.UserAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36";
                    //request.Headers["Accept"] = "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8";
                    request.Headers["Accept-Language"] = "zh-CN,zh;q=0.9";
                    request.Headers["Host"] = "www.gcxx.com";
                    request.Timeout = 5000;
                    request.KeepAlive = true;
                    request.Method = "GET";
                    //if (proxy != null) request.Proxy = new WebProxy(proxy);//设置代理服务器IP，伪装请求地址
                    //request.CookieContainer = this.CookiesContainer;//附加Cookie容器
                    //request.ServicePoint.ConnectionLimit = int.MaxValue;//定义最大连接数

                    using (var response = (HttpWebResponse)request.GetResponse())
                    {//获取请求响应

                        foreach (Cookie cookie in response.Cookies) this.CookiesContainer.Add(cookie);//将Cookie加入容器，保存登录状态

                        if (response.ContentEncoding.ToLower().Contains("gzip"))//解压
                        {
                            using (GZipStream stream = new GZipStream(response.GetResponseStream(), CompressionMode.Decompress))
                            {
                                using (StreamReader reader = new StreamReader(stream, Encoding.UTF8))
                                {
                                    pageSource = reader.ReadToEnd();
                                }
                            }
                        }
                        else if (response.ContentEncoding.ToLower().Contains("deflate"))//解压
                        {
                            using (DeflateStream stream = new DeflateStream(response.GetResponseStream(), CompressionMode.Decompress))
                            {
                                using (StreamReader reader = new StreamReader(stream, Encoding.UTF8))
                                {
                                    pageSource = reader.ReadToEnd();
                                }

                            }
                        }
                        else
                        {
                            using (Stream stream = response.GetResponseStream())//原始
                            {
                                using (StreamReader reader = new StreamReader(stream, Encoding.UTF8))
                                {

                                    pageSource = reader.ReadToEnd();
                                }
                            }
                        }
                    }
                    request.Abort();
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"-----------------------站点:{SiteName},数据采集失败,错误信息:{ex.Message.ToString()}");
                }
                return pageSource;
            });
        }

        private int GetResultContent(string html)
        {
            Match table = Regex.Match(html, @"id=""projectListTable""[\s\S]*?table>");
            MatchCollection trlist = Regex.Matches(table.ToString(), @"<tr[\s\S]*?</tr>");
            Regex titleReg = new Regex(@"=""projectTitle""[\s\S]*?>([\s\S]*?)<");
            Regex dateReg = new Regex(@"class=""td5""[\s\S]*>([\s\S]*?)</td>");

            List<Infomation> listinfo = new List<Infomation>();
            if (trlist.Count > 0)
            {
                foreach (var tr in trlist)
                {
                    Match Mtitle = titleReg.Match(tr.ToString());
                    Match Mdate= dateReg.Match(tr.ToString());
                    Hashtable entity = new Hashtable();
                    Infomation info = new Infomation();
                    if (Mtitle.Success == true)
                    {
                        info .Title= Mtitle.Groups[1].ToString().Trim();          
                    }
                    if (Mdate.Success == true)
                    {
                        DateTime publishDate;
                        DateTime.TryParse(Mdate.Groups[1].ToString().Trim(),out publishDate);
                        info.PublishDate = publishDate;
                    }
                    listinfo.Add(info);
                    Console.WriteLine($"招标信息:{entity["Title"]}");
                }
            }
            SaveToDB(listinfo);
            return listinfo.Count;
        }

        private void SaveToDB(List<Infomation> list)
        {

        }
    }
}
