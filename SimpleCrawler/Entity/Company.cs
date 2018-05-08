using System;
using System.Collections.Generic;
using System.Text;

namespace SimpleCrawler.Entity
{
    public class Company
    {
        public int ID { get; set; }
        public string CompanyName { get; set; }
        //public CompanyState State { get; set; }
        public string State { get; set; }
        public string Tel{get;set;}
        public string LegalRepresentative { get; set; }
        public string URL { get; set; }
        //public string Content { get; set; }
        //public string Description { get; set; }
        public DateTime? PublishDate { get; set; }
        public DateTime CreateDate { get; set; }
    }


    public enum CompanyState : byte
    {
        在业=1,
        存续,
        吊销,
        注销,
        迁出
    }
}
