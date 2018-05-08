using SimpleCrawler.DAL;
using SimpleCrawler.DependencyInjection;
using SimpleCrawler.Entity;
using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using System.Net;
using System.IO.Compression;
using System.IO;
using System.Net.Security;
using System.Text;
using System.Collections;
using System.Threading;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium;
using System.Reflection;

namespace SimpleCrawler.Crawler.WebCrawler
{
    public class TianYanCrawler : CrawlerBase
    {
        CrawlerDAL dal;
        private string cookies = string.Empty;
        public TianYanCrawler() : base(1003, "天眼查")
        {
            //logger = LoggerManager.GetLogger(GetType());
            dal = AppServiceProvider.ServiceProvider.GetService<CrawlerDAL>();
            RequestUrl = "https://bj.tianyancha.com/search/ocE-e015-s1-la3";
            CookiesContainer = new CookieContainer();
        }

        public override async Task<string> GetTargetHtmlString()
        {
            string assemblypath = Assembly.GetExecutingAssembly().Location;
            string rootpath = Path.GetDirectoryName(assemblypath);
            using (IWebDriver driver = new ChromeDriver(rootpath))
            {
                driver.Navigate().GoToUrl(RequestUrl);
                var myScript =@"var ymtimer=setInterval(function(){
                                    if (document.body.scrollHeight - 700 < document.body.scrollTop){
                                        window.scroll(0, document.body.scrollHeight)
                                        clearInterval(ymtimer);
                                        return;
                                    }
                                    window.scroll(0, document.body.scrollTop + 700)}," + 10 * 1000 / 10 + ");";


                while (true)
                {
                    Thread.Sleep(1000 * 60 * 5);
                }
                driver.Quit();
            }
            return null;
           // Hashtable result =await LoginTYCC();
            string page = string.Empty;
            try
            {
                var request = (HttpWebRequest)WebRequest.Create(RequestUrl);
                request.Headers["Upgrade-Insecure-Requests"] = "1";
                request.UserAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36";
                request.Accept = "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8";
                request.Headers.Add(HttpRequestHeader.AcceptEncoding, "gzip, deflate, br");
                request.Headers["Accept-Language"] = "zh-CN,zh;q=0.9";
                request.Method = "GET";
                //request.Headers["Cookie"] = (string)result["cookies"];
                    
                using (var response = (HttpWebResponse)(await request.GetResponseAsync()))
                {
                    if (response.StatusCode != HttpStatusCode.OK)
                        return page;

                    if (response.ContentEncoding.ToLower().Contains("gzip"))//解压
                    {
                        using (GZipStream stream = new GZipStream(response.GetResponseStream(), CompressionMode.Decompress))
                        {
                            using (StreamReader reader = new StreamReader(stream, Encoding.UTF8))
                            {
                                page = await reader.ReadToEndAsync();
                            }
                        }
                    }
                    else if (response.ContentEncoding.ToLower().Contains("deflate"))//解压
                    {
                        using (DeflateStream stream = new DeflateStream(response.GetResponseStream(), CompressionMode.Decompress))
                        {
                            using (StreamReader reader = new StreamReader(stream, Encoding.UTF8))
                            {
                                page = await reader.ReadToEndAsync();
                            }

                        }
                    }
                    else
                    {
                        using (Stream stream = response.GetResponseStream())
                        {
                            using (StreamReader reader = new StreamReader(stream, Encoding.UTF8))
                            {
                                page = await reader.ReadToEndAsync();
                            }
                        }
                    }
                }
                request.Abort();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return page;
        } 
    }
}
