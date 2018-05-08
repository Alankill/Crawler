using JumbotOA.DBUtility;
using log4net;
using log4net.Repository;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.Json;
using Microsoft.Extensions.DependencyInjection;
using SimpleCrawler.Crawler;
using SimpleCrawler.Crawler.WebCrawler;
using SimpleCrawler.DAL;
using SimpleCrawler.DependencyInjection;
using SimpleCrawler.Entity;
using SimpleCrawler.Extensions;
using SimpleCrawler.Logger;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace SimpleCrawler
{
    class Program
    {
        public static void Main(string[] args)
        {
            List<CrawlerAction> listCrawler = new List<CrawlerAction>()
            {
                //new CrawlerAction(new GcxxCrawler()),
                new CrawlerAction(new TYCCrawler())
                //new CrawlerAction(new SitemapAndBaiduUpdate())
            };

            List<CrawlerTask> tasklist =new List<CrawlerTask>() {
                //new CrawlerTask { CrawlerID = 1001, TaskName = "招标信息抓取" },
                new CrawlerTask { CrawlerID = 1002, TaskName = "公司信息抓取",NeedNext=true,StartPage=1,EndPage=2 }
            };

            foreach (var c in listCrawler)
            {
                foreach (var t in tasklist)
                {
                    if (c.CrawlerID==t.CrawlerID)
                        c.TaskList.Add(t);
                }
            }

            Parallel.ForEach(listCrawler, (c, state) =>
             {
                 c.Start();
             });
            Console.ReadLine();
        }

        /// <summary>
        /// 注入服务
        /// </summary>
        /// <param name="services"></param>
        public void ConfigureServices(IServiceCollection services)
        {
            //services.AddSingleLogServiceCollectionExtensions();

            ConfigurationBuilder builder = new ConfigurationBuilder();
            builder.AddJsonFile("appsettings.json");
            IConfiguration configuration = builder.Build();
            services.AddSingleton<IConfiguration>(configuration);

            string connectionString = configuration.GetSection("ConnectionStrings")["SqlServerConnection"];
            DbHelperSQLP DbHelperSQL = new DbHelperSQLP(connectionString);
            CrawlerDAL crawlerDAL = new CrawlerDAL(DbHelperSQL);
            services.AddSingleton<CrawlerDAL>(crawlerDAL);
        }


    }
}
