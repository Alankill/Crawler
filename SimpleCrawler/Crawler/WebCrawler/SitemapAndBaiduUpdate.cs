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
    public class SitemapAndBaiduUpdate : CrawlerBase
    {
        public SitemapAndBaiduUpdate() : base(-1, "百度咨询推广")
        {
            RequestUrl = "http://data.zz.baidu.com/urls?site=www.chuangyeguanjia.com&token=mcimqIpx8otudC5N";
        }

        public override async Task<string> GetTargetHtmlString()
        {
            string result = string.Empty;
            try
            {
                var request = (HttpWebRequest)WebRequest.Create(RequestUrl);
                request.Method = "POST";
                request.UserAgent = "curl/7.12.1";
                request.ContentType = "text/plain";
                request.Host = "data.zz.baidu.com";

                StringBuilder sb = new StringBuilder();
                sb.AppendLine("http://www.chuangyeguanjia.com/yxgszcfw/");
                sb.AppendLine("http://www.chuangyeguanjia.com/grdzqyzcfw/");
                sb.AppendLine("http://www.chuangyeguanjia.com/yxfgszcfw/");
                sb.AppendLine("http://www.chuangyeguanjia.com/frbgfw/");
                sb.AppendLine("http://www.chuangyeguanjia.com/gszcdzbgfw/");
                sb.AppendLine("http://www.chuangyeguanjia.com/jyfwbgfw/");
                sb.AppendLine("http://www.chuangyeguanjia.com/gsgqbgfw/");
                sb.AppendLine("http://www.chuangyeguanjia.com/gsmcbgfw/");
                sb.AppendLine("http://www.chuangyeguanjia.com/jyqxbgfw/");
                sb.AppendLine("http://www.chuangyeguanjia.com/gszxfw/");

                sb.AppendLine("http://www.chuangyeguanjia.com/qbtcfw/");
                sb.AppendLine("http://www.chuangyeguanjia.com/sqybnsrfw/");
                sb.AppendLine("http://www.chuangyeguanjia.com/bsxtjsfw/");
                sb.AppendLine("http://www.chuangyeguanjia.com/skdbjpzhdfw/");
                sb.AppendLine("http://www.chuangyeguanjia.com/sdshsqjfw/");
                sb.AppendLine("http://www.chuangyeguanjia.com/dsbdfw/");
                sb.AppendLine("http://www.chuangyeguanjia.com/gsbdfw/");
                sb.AppendLine("http://www.chuangyeguanjia.com/dljzynfw/");
                sb.AppendLine("http://www.chuangyeguanjia.com/dljzbnfw/");
                sb.AppendLine("http://www.chuangyeguanjia.com/dljzbnfw/");


                byte[] postdatabytes = Encoding.GetEncoding("utf-8").GetBytes(sb.ToString());
                request.ContentLength = postdatabytes.Length;
                using (Stream stream = await request.GetRequestStreamAsync())
                {
                    await stream.WriteAsync(postdatabytes, 0, postdatabytes.Length);
                    stream.Flush();
                    stream.Close();
                }

                using (var response = (HttpWebResponse)(await request.GetResponseAsync()))
                {//获取请求响应
                    using (Stream stream = response.GetResponseStream())//原始
                    {
                        using (StreamReader reader = new StreamReader(stream, Encoding.UTF8))
                        {
                            string json = await reader.ReadToEndAsync();
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
