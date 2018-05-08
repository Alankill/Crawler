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

namespace SimpleCrawler.Crawler.WebCrawler
{
    public class TYCCrawler : CrawlerBase
    {
        CrawlerDAL dal;
        private string cookies = string.Empty;
        public TYCCrawler() : base(1002, "天眼查")
        {
            //logger = LoggerManager.GetLogger(GetType());
            dal = AppServiceProvider.ServiceProvider.GetService<CrawlerDAL>();
            RequestUrl = "https://bj.tianyancha.com/search/ocE-e015-s1-la3";
            CookiesContainer = new CookieContainer();
        }

        public override void GetNextPageUrl(int page)
        {
            RequestUrl = "https://bj.tianyancha.com/search/ocE-e015-s1-la3" + "/p"+page.ToString();
        }

        public override async Task<string> GetTargetHtmlString()
        {
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

        Random random = new Random();
        public async override Task<int> GetResultContent(string html)
        {
            //https://static.tianyancha.com/fonts-styles/css/34/343177a3/font.css
            //https://static.tianyancha.com/fonts-styles/fonts/34/343177a3/tyc-num.ttf
            //string cssurl = Regex.Match(html, @"https://static.tianyancha.com/fonts-styles/css\S*?.css").ToString().Replace("css/","fonts/").Replace("font.css", "tyc-num.ttf");
            //string cotent=await RequestByGet("https://static.tianyancha.com/fonts-styles/fonts/34/343177a3/tyc-num.ttf");
            //System.Drawing.
            //System.Drawing..PrivateFontCollection privateFonts = new System.Drawing.Text.PrivateFontCollection();
            //privateFonts.AddFontFile("C:\\宋体.ttf");
            


            MatchCollection list = Regex.Matches(html, @"<div data-id=""[\s\S]*?class=""pt15""");
            Regex UrlReg = new Regex(@"href=""([\s\S]*?)""");
            Regex StateReg = new Regex(@"class=""statusTypeNor in-block f12 in-block vertical-middle ml10 statusType1"">([\s\S]*?)</div>");
            Regex dateReg = new Regex(@"注册时间[\s\S]*?>([\s\S]*?)</span>");

            List<Company> listinfo = new List<Company>();
            if (list.Count > 0)
            {
                foreach (var tr in list)
                {
                    Match Murl = UrlReg.Match(tr.ToString());
                    Match Mstate = StateReg.Match(tr.ToString());
                    Match Mdate = dateReg.Match(tr.ToString());

                    Company info = new Company();
                    if (Murl.Success)
                    {
                        info.URL = Murl.Groups[1].ToString().Trim();             
                    }
                    else {
                        continue;
                    }
                    if (Mstate.Success)
                    {
                        //info.State =(CompanyState)Enum.Parse(typeof(CompanyState),Mstate.Groups[1].ToString().Trim());
                        info.State = Mstate.Groups[1].ToString().Trim();
                    }
                    if (Mdate.Success)
                    {
                        DateTime publishDate;
                        if (DateTime.TryParse(Mdate.Groups[1].ToString().Trim(), out publishDate))
                            info.PublishDate = publishDate;
                    }

                    string detailHtml=await RequestByGet(info.URL);
                    string area = Regex.Match(detailHtml, @"company_header_width ie9Style position-rel[\s\S]*?class=""ie9Style""").ToString();

                    Match Mname= Regex.Match(area, @"f18 mt0 mb0 in-block vertival-middle sec-c2[\s\S]*?>([\s\S]*?)</h1>");
                    if (Mname.Success)
                    {
                        info.CompanyName = Mname.Groups[1].ToString().Trim();
                    }
                    else
                    {
                        Thread.Sleep((random.Next(2, 5)) * 1000);
                        continue;
                    }
                    info.Tel = string.Empty;
                    MatchCollection Mtel = Regex.Matches(area, @"\D(1\d{10})\D|\D(0\d{2,3}-?\d{7,8})\D");
                    if (Mtel.Count>0)
                    {
                        foreach (Match tel in Mtel)
                        {
                            info.Tel = info.Tel+tel.Groups[1].ToString().Trim() + ",";
                        }     
                    }
                    info.Tel=info.Tel.TrimEnd(',');
                    info.CreateDate = DateTime.Now;
                    listinfo.Add(info);
                    Thread.Sleep((random.Next(2, 5))*1000);
                }
            }
            await SaveToDB(listinfo);
            return listinfo.Count;
        }


        public async Task<string> RequestByGet(string url)
        {
            string page = string.Empty;
            try
            {
                var request = (HttpWebRequest)WebRequest.Create(url);
                request.Headers["Upgrade-Insecure-Requests"] = "1";
                request.UserAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36";
                request.Accept = "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8";
                request.Headers.Add(HttpRequestHeader.AcceptEncoding, "gzip, deflate, br");
                request.Headers["Accept-Language"] = "zh-CN,zh;q=0.9";
                request.Method = "GET";

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
        protected async Task<bool> SaveToDB(List<Company> list)
        {
            return await dal.AddInfoList(list).ConfigureAwait(continueOnCapturedContext: false);
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
                            result["result"] = await reader.ReadToEndAsync();
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
    }
}
