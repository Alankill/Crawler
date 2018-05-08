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

        public int AddInformation(Information info)
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

        public async Task<bool> AddInfoList<T>(List<T> list)
        {
           DataTable dt = ToDataTable<T>(list);
           dt.TableName = "dbo."+typeof(T).Name;
           await DbHelperSQL.InsertByDataTable(dt).ConfigureAwait(false);
           return true;     
        }

   
        /// <summary>
        /// 基础属性映射成表
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="list"></param>
        /// <param name="autoCol"></param>
        /// <returns></returns>
        private static DataTable ToDataTable<T>(IList<T> list,string autoCol="ID")
        {
            DataTable result = new DataTable();
            if (list.Count > 0)
            {
                PropertyInfo[] propertys = list[0].GetType().GetProperties();
                foreach (PropertyInfo pi in propertys)
                {
                    if (pi.PropertyType.IsGenericType)
                    {
                        if (pi.PropertyType.GetGenericTypeDefinition() == typeof(Nullable<>))
                        {
                            if (pi.PropertyType.GetGenericArguments()[0] == typeof(DateTime))
                            {
                                result.Columns.Add(pi.Name, pi.PropertyType.GetGenericArguments()[0]);
                            }
                        }
                    }
                    else
                        result.Columns.Add(pi.Name, pi.PropertyType);
                }
                foreach (object t in list)
                {
                    ArrayList tempList = new ArrayList();
                    foreach (PropertyInfo pi in propertys)
                    {
                        if (pi.Name == autoCol)
                        {
                            tempList.Add(null);
                        }
                        else
                        {
                            object obj = pi.GetValue(t, null);
                            //if (obj == null)
                            //    tempList.Add(DBNull.Value);
                            //else
                            tempList.Add(obj);
                        }
                    }
                    object[] array = tempList.ToArray();
                    result.LoadDataRow(array,true);
                }
            }
            return result;
        }
    }
}
