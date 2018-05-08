using SimpleCrawler.DAL;
using SimpleCrawler.DependencyInjection;
using SimpleCrawler.Entity;
using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace SimpleCrawler.Crawler
{
    public class GcxxCrawler : CrawlerBase
    {    
        //private ILog logger;    
        CrawlerDAL dal;
     
        public GcxxCrawler():base(1001,"跑项目") {
            //logger = LoggerManager.GetLogger(GetType());
            dal = AppServiceProvider.ServiceProvider.GetService<CrawlerDAL>();
            RequestUrl = "http://www.gcxx.com/project/index?provinceOrCity=110000";
        }

        public async override Task<int> GetResultContent(string html)
        {
            Match table = Regex.Match(html, @"id=""projectListTable""[\s\S]*?table>");
            MatchCollection trlist = Regex.Matches(table.ToString(), @"<tr[\s\S]*?</tr>");
            Regex titleReg = new Regex(@"=""projectTitle""[\s\S]*?>([\s\S]*?)<");
            Regex dateReg = new Regex(@"class=""td5""[\s\S]*>([\s\S]*?)</td>");

            List<Information> listinfo = new List<Information>();
            if (trlist.Count > 0)
            {
                foreach (var tr in trlist)
                {
                    Match Mtitle = titleReg.Match(tr.ToString());
                    Match Mdate= dateReg.Match(tr.ToString());
                    Information info = new Information();
                    if (Mtitle.Success)
                    {
                        info .Title= Mtitle.Groups[1].ToString().Trim();          
                    }
                    if (Mdate.Success)
                    {
                        DateTime publishDate;
                        if(DateTime.TryParse(Mdate.Groups[1].ToString().Trim(),out publishDate))
                        info.PublishDate = publishDate;

                        info.CreateDate = DateTime.Now;
                    }
                    listinfo.Add(info);
                }
            }
            await SaveToDB(listinfo);
            return listinfo.Count;
        }

        protected async Task<bool> SaveToDB(List<Information> list)
        {
            return await dal.AddInfoList(list).ConfigureAwait(continueOnCapturedContext:false) ;
        }
    }
}
