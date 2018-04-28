using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;


namespace SimpleCrawler.DependencyInjection
{
    public static class AppServiceProvider
    {
        private static  IServiceProvider _serviceProvider;
        public static IServiceProvider ServiceProvider { get { return _serviceProvider; }}

        static AppServiceProvider()
        {
            Program program = new Program();
            var services = new ServiceCollection();
            program.ConfigureServices(services);
            IServiceProvider serviceProvider = services.BuildServiceProvider();
            _serviceProvider = serviceProvider;
        }
    }
}
