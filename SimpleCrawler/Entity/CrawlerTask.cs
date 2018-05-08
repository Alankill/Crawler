using System;
using System.Collections.Generic;
using System.Text;

namespace SimpleCrawler.Entity
{
    public class CrawlerTask
    {
        public int ID { get; set; }
        /// <summary>
        /// 任务名称
        /// </summary>
        public string TaskName { get; set; }
        /// <summary>
        /// 爬虫ID
        /// </summary>
        public int CrawlerID { get; set; }
        /// <summary>
        /// 分页抓取
        /// </summary>
        public bool NeedNext { get; set; } = false;

        public int StartPage { get; set; }
        public int EndPage { get; set; }
    }
}
