using System;
using System.Collections.Generic;
using System.Text;

namespace SimpleCrawler.Entity
{
    public class Company
    {
        public string SourceSite { get; set; }
        public string Title { get; set; }
        public string URL { get; set; }
        public string Content { get; set; }
        public string Description { get; set; }
        public DateTime PublishDate { get; set; }
        public DateTime CreateDate { get; set; }
    }
}
