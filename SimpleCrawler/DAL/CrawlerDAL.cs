using JumbotOA.DBUtility;
using Microsoft.Extensions.Configuration;
using SimpleCrawler.DependencyInjection;
using System;
using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;
using System.Data;
using SimpleCrawler.Entity;
using System.Reflection;
using System.Collections;
using System.Threading.Tasks;

namespace SimpleCrawler.DAL
{
    public class CrawlerDAL
    {
        private DbHelperSQLP DbHelperSQL;
        public  CrawlerDAL(DbHelperSQLP dbHelperSQL) {
            DbHelperSQL = dbHelperSQL;
        }

        public int AddInformation(Infomation info)
        {
            SqlParameter[] para = new SqlParameter[] {
                 new SqlParameter("@Title", SqlDbType.NVarChar),
                 new SqlParameter("@SourceSite", SqlDbType.NVarChar),
                 new SqlParameter("@PublishDate", SqlDbType.DateTime)
             };
            para[0].Value = info.Title;
            para[1].Value = info.SourceSite;
            para[2].Value = info.PublishDate;
            int item_id = 0;
            try
            {
                item_id = DbHelperSQL.ExecuteSqlAsync("insert into information(Title,SourceSite,PublishDate) values(@Title,@SourceSite,@PublishDate)", para).Result;
            }
            catch (Exception ex)
            {
                //TDLib.Tools.Log.WriteErr("向服务器录入数据：" + ex.Message);
                //return -1;
            }
            return item_id;
        }

        public async Task<bool> AddInfoList(List<Infomation> list)
        {

           DataTable dt = ToDataTableTow<Infomation>(list);
           dt.TableName = "dbo.Information";
           await DbHelperSQL.InsertByDataTable(dt).ConfigureAwait(false);
           return true;     
        }


        /// <summary>    
        /// 将集合类转换成DataTable    
        /// </summary>    
        /// <param name="list">集合</param>    
        /// <returns></returns>    
        private static DataTable ToDataTableTow<T>(IList<T> list)
        {
            DataTable result = new DataTable();
            if (list.Count > 0)
            {
                PropertyInfo[] propertys = list[0].GetType().GetProperties();

                foreach (PropertyInfo pi in propertys)
                {
                    result.Columns.Add(pi.Name, pi.PropertyType);
                }
                foreach (object t in list)
                {
                    ArrayList tempList = new ArrayList();
                    foreach (PropertyInfo pi in propertys)
                    {
                        object obj = pi.GetValue(t, null);
                        tempList.Add(obj);
                    }
                    object[] array = tempList.ToArray();
                    result.LoadDataRow(array, true);
                }
            }
            return result;
        }
    }
}
