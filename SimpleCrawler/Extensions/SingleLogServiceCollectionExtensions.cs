using log4net;
using log4net.Config;
using log4net.Repository;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace SimpleCrawler.Extensions
{
    public static class SingleLogServiceCollectionExtensions
    {
        private const string LoggerName = "NETCoreRepository";
        public static IServiceCollection AddSingleLogServiceCollectionExtensions(this IServiceCollection serviceCollection)
        {
            ILoggerRepository repository = LogManager.CreateRepository(LoggerName);
            XmlConfigurator.Configure(repository, new FileInfo("log4net.config"));
            serviceCollection.AddSingleton<ILoggerRepository>(repository);
            return serviceCollection;
        }
    }
}
