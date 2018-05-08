using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Net;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace SimpleCrawler.Crawler
{
    public class CrawlerBase : ICrawler
    {
        /// <summary>
        /// 爬虫id 名称
        /// </summary>
        /// <param name="crawlerid"></param>
        /// <param name="sitename"></param>
        public CrawlerBase(int crawlerid, string sitename)
        {
            CrawlerID = crawlerid;
            SiteName = sitename;
        }

        /// <summary>
        /// 获取当前爬虫类别
        /// </summary>
        public Type TypeName{get{ return this.GetType(); }}

        public int CrawlerID { get; set; }
        public string SiteName { get; set; }
        public string RequestUrl { get; set; } = null;


        public bool RequireCookie { get; set; } = false;
        public CookieContainer CookiesContainer { get; set; }//定义Cookie容器

        /// <summary>
        /// 分页逻辑 返回url地址
        /// </summary>
        /// <returns></returns>
        public virtual void GetNextPageUrl(int page) {
        }


        /// <summary>
        /// 获取目标页html
        /// </summary>
        /// <returns>html</returns>
        public virtual async Task<string> GetTargetHtmlString()
        {
            string pageSource = null;
            try
            {
                var request = (HttpWebRequest)WebRequest.Create(RequestUrl);
                request.Accept = "*/*";
                request.Headers.Add(HttpRequestHeader.AcceptEncoding, "gzip,deflate");//定义gzip压缩页面支持
                request.ContentType = "application/x-www-form-urlencoded";
                request.AllowAutoRedirect = false;
                request.UserAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36";
                request.Headers["Accept-Language"] = "zh-CN,zh;q=0.9";
                //request.Headers["Host"] = RequestUrl;
                request.Timeout = 5000;
                request.KeepAlive = true;
                request.Method = "GET";
                //if (proxy != null) request.Proxy = new WebProxy(proxy);//设置代理服务器IP，伪装请求地址
                //request.CookieContainer = this.CookiesContainer;//附加Cookie容器
                //request.ServicePoint.ConnectionLimit = int.MaxValue;//定义最大连接数

                using (var response = (HttpWebResponse)(await request.GetResponseAsync()))
                {
                    if (response.StatusCode != HttpStatusCode.OK)
                        return pageSource;

                    if (RequireCookie)
                    {
                        foreach (Cookie cookie in response.Cookies) this.CookiesContainer.Add(cookie);
                    }

                    if (response.ContentEncoding.ToLower().Contains("gzip"))//解压
                    {
                        using (GZipStream stream = new GZipStream(response.GetResponseStream(), CompressionMode.Decompress))
                        {
                            using (StreamReader reader = new StreamReader(stream, Encoding.UTF8))
                            {
                                pageSource = await reader.ReadToEndAsync();
                            }
                        }
                    }
                    else if (response.ContentEncoding.ToLower().Contains("deflate"))//解压
                    {
                        using (DeflateStream stream = new DeflateStream(response.GetResponseStream(), CompressionMode.Decompress))
                        {
                            using (StreamReader reader = new StreamReader(stream, Encoding.UTF8))
                            {
                                pageSource = await reader.ReadToEndAsync();
                            }

                        }
                    }
                    else
                    {
                        using (Stream stream = response.GetResponseStream())//原始
                        {
                            using (StreamReader reader = new StreamReader(stream, Encoding.UTF8))
                            {

                                pageSource = await reader.ReadToEndAsync();
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
            return pageSource;
        }

        /// <summary>
        /// 处理html,提取数据
        /// </summary>
        /// <param name="html">html</param>
        /// <returns>保存数据条数</returns>
        public async virtual Task<int> GetResultContent(string html)
        {
            return 0;
        }

        public static bool CheckValidationResult(object sender, X509Certificate certificate, X509Chain chain, SslPolicyErrors errors)
        {
            return true;
        }
    }
}
