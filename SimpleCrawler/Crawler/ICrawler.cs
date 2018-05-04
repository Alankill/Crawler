using log4net;
using SimpleCrawler.Entity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SimpleCrawler.Crawler
{
    public interface ICrawler
    {
        int CrawlerID { get; }
        string SiteName { get; set; }
        Task<string> GetTargetHtmlString();
    }
}
