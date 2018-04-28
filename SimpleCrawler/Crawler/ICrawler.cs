using SimpleCrawler.Entity;
using System;
using System.Collections.Generic;
using System.Text;

namespace SimpleCrawler.Crawler
{
    public interface ICrawler
    {
        List<CrawlerTask> TaskList { get; set; }
        void Start();
    }
}
