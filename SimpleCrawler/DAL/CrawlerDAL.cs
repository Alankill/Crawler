using JumbotOA.DBUtility;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace SimpleCrawler.DAL
{
    public class CrawlerDAL
    {
        static DbHelperSQLP DbHelperSQL = new DbHelperSQLP("");


        //public static int InsertItemToTacker()
        //{
        //    SqlParameter[] para = new SqlParameter[] {
        //         new SqlParameter("@Task_ID", SqlDbType.Int),
        //         new SqlParameter("@Item_URL", SqlDbType.VarChar, 1500),
        //     };
        //    para[0].Value = result.Task_ID;
        //    para[1].Value = task.Brand_ID;
        //    para[2].Value = result.Url;


        //    int item_id = 0;
        //    try
        //    {
        //        //正常
        //        item_id = int.Parse(.RunProcedureSingle("pr_ImportItemFromCrawlerNEW", para).ToString());
        //        //极速（pr_ImportItemFromQuickCrawler）
        //        //item_id = int.Parse(((DBHelperSQL)dbHelperSQL[task.ServerID]).RunProcedureSingle("pr_ImportItemFromQuickCrawler", para).ToString());
        //    }
        //    catch (Exception ex)
        //    {
        //        TDLib.Tools.Log.WriteErr("向服务器录入数据：" + ex.Message);
        //        return -1;
        //    }
        //    return item_id;
        //}
    }
}
