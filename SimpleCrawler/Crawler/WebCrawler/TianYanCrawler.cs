using SimpleCrawler.DAL;
using SimpleCrawler.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using System.Net;
using System.IO.Compression;
using System.IO;
using System.Text;
using System.Collections;
using System.Threading;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium;
using System.Reflection;
using System.Drawing;
using System.Collections.ObjectModel;
using Baidu.Aip.Ocr;

namespace SimpleCrawler.Crawler.WebCrawler
{
    public class TianYanCrawler : CrawlerBase
    {
        CrawlerDAL dal;
        private string cookies = string.Empty;
        public TianYanCrawler() : base(1003, "天眼查")
        {
            //logger = LoggerManager.GetLogger(GetType());
            dal = AppServiceProvider.ServiceProvider.GetService<CrawlerDAL>();
            RequestUrl = "https://bj.tianyancha.com/search/ocE-e015-s1-la3";
            CookiesContainer = new CookieContainer();
        }

        public override async Task<string> GetTargetHtmlString()
        {
            string rootpath = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            string saveimgpath = rootpath + "\\PageImg";
            if (!Directory.Exists(saveimgpath))
                Directory.CreateDirectory(saveimgpath);

            using (ChromeDriver driver = new ChromeDriver(rootpath))
            {
                driver.Manage().Window.Maximize();
                driver.Navigate().GoToUrl("https://bj.tianyancha.com/search/ocE-e015-s1-la3");
                if (string.IsNullOrEmpty(driver.Title))
                {
                    return null;
                }
                else if (driver.Url.Contains("login"))
                {
                   var element =driver.FindElement(By.CssSelector(".loginmodule  .contactphone"));
                    element.SendKeys("18600805547");
                    Thread.Sleep(1000);
                    element = driver.FindElement(By.CssSelector(".loginmodule  .contactword"));
                    element.SendKeys("abc123456");
                    driver.FindElement(By.CssSelector(".loginmodule  .login_btn")).Click();
                }
                //加载全部页面
                //window.pageYOffset   window.innerHeight    document.body.scrollHeight
                //var myScript = @"var ymtimer=setInterval(function(){
                //                    if (document.body.scrollHeight > (window.pageYOffset  + window.innerHeight) ){
                //                        window.scrollTo(0, window.pageYOffset  + window.innerHeight)
                //                    }else{
                //                        clearInterval(ymtimer);
                //                        }}," + 2000 + ");";
                //((IJavaScriptExecutor)driver).ExecuteScript(myScript);
                //Thread.Sleep(10*1000);
                ((IJavaScriptExecutor)driver).ExecuteScript("$('#banner_web').remove(); $('#web-header').remove();");
                string imgname = /*driver.Title +*/ DateTime.Now.ToString("yyyyMMddhhmmss") + ".png";
                //((ITakesScreenshot)driver).GetScreenshot().SaveAsFile(saveimgpath + "\\" + imgname);

                //string height1 = driver.FindElement(By.XPath("//body")).GetProperty("scrollHeight");
                //Int64 height=(Int64)((IJavaScriptExecutor)driver).ExecuteScript("return document.body.scrollHeight");
                //driver.Manage().Window.Size=new Size(1200,(int)height);

                
                Bitmap fullimage =(Bitmap)GetEntireScreenshot(driver);
                fullimage.Save(saveimgpath + "\\" + imgname);//可注销

                //while (true) {
                //    Thread.Sleep(60 * 1000);
                //}

                //Bitmap ImportFile = new Bitmap(saveimgpath + "\\" + imgname);
                ReadOnlyCollection<IWebElement> list = driver.FindElements(By.XPath(@"//div[@class=""search_right_item ml10""]/div[1]"));

                var APP_ID = "11215062";
                var API_KEY = "nN2y44ttM6fdx39izBvISjQL";
                var SECRET_KEY = "hnsWo4thsPGWfp3kuoWG4CCGdI0VBhz3";
                var client = new Baidu.Aip.Ocr.Ocr(API_KEY, SECRET_KEY);
                client.Timeout = 60000; 

                for (int i = 0; i < list.Count; i++)
                {
                    IWebElement dom = list[i];
                    Point position = dom.Location;
                    Size size = dom.Size;
                    Rectangle rectangle = new Rectangle(position.X, position.Y, size.Width, size.Height);
                    Bitmap CloneFile = fullimage.Clone(rectangle, fullimage.PixelFormat);
                    CloneFile.Save(saveimgpath + "\\" + i + ".png"); //可注销

                    byte[] bytes;
                    using (MemoryStream ms = new MemoryStream())
                    {
                        CloneFile.Save(ms, System.Drawing.Imaging.ImageFormat.Png);
                        bytes = ms.GetBuffer();     
                    }
                    GeneralBasicDemo(client, bytes);
                    CloneFile.Dispose();
                }
                driver.Quit();
            }
            return null;
        }


        public Image GetEntireScreenshot(IWebDriver driver)
        {
            // Get the total size of the page
            var totalWidth = (int)(long)((IJavaScriptExecutor)driver).ExecuteScript("return document.body.offsetWidth"); //documentElement.scrollWidth");
            var totalHeight = (int)(long)((IJavaScriptExecutor)driver).ExecuteScript("return  document.body.parentNode.scrollHeight");
            // Get the size of the viewport
            var viewportWidth = (int)(long)((IJavaScriptExecutor)driver).ExecuteScript("return document.body.clientWidth"); //documentElement.scrollWidth");
            var viewportHeight = (int)(long)((IJavaScriptExecutor)driver).ExecuteScript("return window.innerHeight"); //documentElement.scrollWidth");

            // We only care about taking multiple images together if it doesn't already fit
            if (totalWidth <= viewportWidth && totalHeight <= viewportHeight)
            {
                var screenshot = ((ITakesScreenshot)driver).GetScreenshot();
                return ScreenshotToImage(screenshot);
            }
            // Split the screen in multiple Rectangles
            var rectangles = new List<Rectangle>();
            // Loop until the totalHeight is reached
            for (var y = 0; y < totalHeight; y += viewportHeight)
            {
                var newHeight = viewportHeight;
                // Fix if the height of the element is too big
                if (y + viewportHeight > totalHeight)
                {
                    newHeight = totalHeight - y;
                }
                // Loop until the totalWidth is reached
                for (var x = 0; x < totalWidth; x += viewportWidth)
                {
                    var newWidth = viewportWidth;
                    // Fix if the Width of the Element is too big
                    if (x + viewportWidth > totalWidth)
                    {
                        newWidth = totalWidth - x;
                    }
                    // Create and add the Rectangle
                    var currRect = new Rectangle(x, y, newWidth, newHeight);
                    rectangles.Add(currRect);
                }
            }
            // Build the Image
            var stitchedImage = new Bitmap(totalWidth, totalHeight);
            // Get all Screenshots and stitch them together
            var previous = Rectangle.Empty;
            foreach (var rectangle in rectangles)
            {
                // Calculate the scrolling (if needed)
                if (previous != Rectangle.Empty)
                {
                    var xDiff = rectangle.Right - previous.Right;
                    var yDiff = rectangle.Bottom - previous.Bottom;
                    // Scroll
                    ((IJavaScriptExecutor)driver).ExecuteScript(String.Format("window.scrollBy({0}, {1})", xDiff, yDiff));
                }
                // Take Screenshot
                var screenshot = ((ITakesScreenshot)driver).GetScreenshot();
                // Build an Image out of the Screenshot
                var screenshotImage = ScreenshotToImage(screenshot);
                // Calculate the source Rectangle
                var sourceRectangle = new Rectangle(viewportWidth - rectangle.Width, viewportHeight - rectangle.Height, rectangle.Width, rectangle.Height);
                // Copy the Image
                using (var graphics = Graphics.FromImage(stitchedImage))
                {
                    graphics.DrawImage(screenshotImage, rectangle, sourceRectangle, GraphicsUnit.Pixel);
                }
                // Set the Previous Rectangle
                previous = rectangle;
            }
            return stitchedImage;
        }

        private static Image ScreenshotToImage(Screenshot screenshot)
        {
            Image screenshotImage;
            using (var memStream = new MemoryStream(screenshot.AsByteArray))
            {
                screenshotImage = Image.FromStream(memStream);
            }
            return screenshotImage;
        }

        public void GeneralBasicDemo(Ocr client,byte[] bytes)
        {
            // 调用通用文字识别, 图片参数为本地图片，可能会抛出网络等异常，请使用try/catch捕获
            var result = client.GeneralBasic(bytes);
            Console.WriteLine(result);
            // 如果有可选参数
    //        var options = new Dictionary<string, object>{
    //    {"language_type", "CHN_ENG"},
    //    {"detect_direction", "true"},
    //    {"detect_language", "true"},
    //    {"probability", "true"}
    //};
            // 带参数调用通用文字识别, 图片参数为本地图片
           // result = client.GeneralBasic(bytes, options);
           // Console.WriteLine(result);
        }

    }
}
