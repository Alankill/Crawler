using log4net;
using log4net.Repository;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.Json;
using Microsoft.Extensions.DependencyInjection;
using SimpleCrawler.Crawler;
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

            IConfiguration  configuration= AppServiceProvider.ServiceProvider.GetService<IConfiguration>();
            Console.WriteLine(configuration.GetSection("ConnectionStrings")["SqlServerConnection"]);
            //CrawlerTask task = new CrawlerTask { ID = 1, TaskName = "招标信息抓取" };

            //List<ICrawler> listCrawler = new List<ICrawler>()
            //{
            //    new GcxxCrawler(){ TaskList=new List<CrawlerTask>(){ task } },
            //};

            //Parallel.ForEach(listCrawler, (c, state) =>
            // {
            //     c.Start();
            // });
            Console.ReadLine();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            //services.AddSingleLogServiceCollectionExtensions();

            ConfigurationBuilder builder = new ConfigurationBuilder();
            builder.AddJsonFile("appsettings.json");
            services.AddSingleton<IConfiguration>(builder.Build());
        }


    }
}
