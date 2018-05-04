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
            };

            //获取任务 给listCrawler添加任务
            CrawlerTask task = new CrawlerTask { ID = 1, TaskName = "招标信息抓取" };
            foreach (var c in listCrawler)
            {
                c.TaskList.Add(task);
            }

            Parallel.ForEach(listCrawler, (c, state) =>
             {
                 c.Start();
             });
            Console.ReadLine();
        }

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
