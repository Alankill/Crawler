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

namespace SimpleCrawler.Crawler.WebCrawler
{
    public class TYCCrawler : CrawlerBase
    {
        CrawlerDAL dal;
        
        public TYCCrawler() : base(1002, "天眼查")
        {
            //logger = LoggerManager.GetLogger(GetType());
            dal = AppServiceProvider.ServiceProvider.GetService<CrawlerDAL>();
            RequestUrl = "https://www.tianyancha.com/";
            CookiesContainer = new CookieContainer();
        }

        private string cookies=string.Empty;
        public override async Task<string> GetTargetHtmlString()
        {
           // Hashtable result =await LoginTYCC();
            string page = string.Empty;
            try
            {
                var request = (HttpWebRequest)WebRequest.Create("https://bj.tianyancha.com/search/ocE-e015-s1-la3");
                request.Headers["Upgrade-Insecure-Requests"] = "1";
                request.UserAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36";
                request.Accept = "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8";
                request.Headers.Add(HttpRequestHeader.AcceptEncoding, "gzip, deflate, br");
                request.Headers["Accept-Language"] = "zh-CN,zh;q=0.9";
                request.Method = "GET";
                //request.Headers["Cookie"] = (string)result["cookies"];
                    
                using (var response = (HttpWebResponse)(await request.GetResponseAsync()))
                {
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

        public async Task<Hashtable> LoginTYCC()
        {
            Hashtable result = new Hashtable();
            try
            {
                ServicePointManager.ServerCertificateValidationCallback = new RemoteCertificateValidationCallback(CheckValidationResult);
                var request = (HttpWebRequest)WebRequest.Create("https://www.tianyancha.com/cd/login.json");
                request.Accept = "*/*";
                request.Headers["Origin"] = "https://www.tianyancha.com";
                request.Headers["X-Requested-With"] = "XMLHttpRequest";
                request.UserAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36";
                request.ContentType = "application/json; charset=UTF-8";
                request.Referer = "https://www.tianyancha.com/";
                request.Headers.Add(HttpRequestHeader.AcceptEncoding, "gzip, deflate, br");
                request.Headers["Accept-Language"] = "zh-CN,zh;q=0.9";
                request.Method = "POST";
                //request.Headers["X-DevTools-Emulate-Network-Conditions-Client-Id"] = "397B5A92473D28ACA939597C38B01DB4";

                string postdata = "{\"mobile\":\"18600805547\",\"cdpassword\":\"ddfd32ac13e64a984e5fc51338025908\",\"loginway\":\"PL\",\"autoLogin\":true}";
                byte[] postdatabytes = Encoding.GetEncoding("utf-8").GetBytes(postdata);
                request.ContentLength = postdatabytes.Length;
                using (Stream stream = await request.GetRequestStreamAsync())
                {
                    await stream.WriteAsync(postdatabytes, 0, postdatabytes.Length);
                    stream.Flush();
                    stream.Close();
                }

                using (var response = (HttpWebResponse)(await request.GetResponseAsync()))
                {//获取请求响应

                    result["cookies"] = response.Headers["Set-Cookie"];
                    using (Stream stream = response.GetResponseStream())//原始
                    {
                        using (StreamReader reader = new StreamReader(stream, Encoding.UTF8))
                        {
                            result["result"] =await reader.ReadToEndAsync();
                        }
                    }
                }
                request.Abort();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return result;
        }

        public async override Task<int> GetResultContent(string html)
        {
            Match table = Regex.Match(html, @"class=""b-c-white search_result_container""[\s\S]*?class=""b-c-white clearfix position-rel mb30""");
            MatchCollection trlist = Regex.Matches(table.ToString(), @"<div data-id=""[\s\S] *?class=""pt15""");
            Regex titleReg = new Regex(@"=""projectTitle""[\s\S]*?>([\s\S]*?)<");
            Regex dateReg = new Regex(@"class=""td5""[\s\S]*>([\s\S]*?)</td>");

            List<Company> listinfo = new List<Company>();
            if (trlist.Count > 0)
            {
                foreach (var tr in trlist)
                {
                    Match Mtitle = titleReg.Match(tr.ToString());
                    Match Mdate = dateReg.Match(tr.ToString());
                    Infomation info = new Infomation();
                    if (Mtitle.Success == true)
                    {
                        info.Title = Mtitle.Groups[1].ToString().Trim();
                    }
                    if (Mdate.Success == true)
                    {
                        DateTime publishDate;
                        DateTime.TryParse(Mdate.Groups[1].ToString().Trim(), out publishDate);
                        info.PublishDate = publishDate;
                        info.CreateDate = DateTime.Now;
                    }
                    listinfo.Add(info);
                }
            }
            await SaveToDB(listinfo);
            return listinfo.Count;
        }

        protected async Task<bool> SaveToDB(List<Infomation> list)
        {
            return await dal.AddInfoList(list).ConfigureAwait(continueOnCapturedContext: false);
        }

    }
}
