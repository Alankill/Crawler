using System;
using System.Collections;
using System.Data;
using System.Data.SqlClient;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace JumbotOA.DBUtility
{
    /// <summary>
    /// 数据访问类，可用于访问不同数据库
    /// Copyright (C) 2004-2008 By LiTianPing 
    /// </summary>
    public class DbHelperSQLP
    {
        //数据库连接字符串(web.config来配置)，可以动态更改connectionString支持多数据库.		
        private  string connectionString ;     		
        public DbHelperSQLP(string connstr)
        {
            connectionString = connstr;    
        }


        /// 执行SQL语句，返回影响的记录数
        public async Task<int> ExecuteSqlAsync(string SQLString)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand cmd = new SqlCommand(SQLString, connection))
                {
                    try
                    {
                        await connection.OpenAsync();
                        return await cmd.ExecuteNonQueryAsync();
                    }
                    catch (System.Data.SqlClient.SqlException e)
                    {
                        connection.Close();
                        throw e;
                    }
                }
            }
        }
        /// 执行多条SQL语句，实现数据库事务。
        public async Task<int> ExecuteSqlTran(List<String> SQLStringList)
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                await conn.OpenAsync();
                SqlCommand cmd = new SqlCommand();
                SqlTransaction tx = await Task.Run<SqlTransaction>(()=>conn.BeginTransaction());
                cmd.Connection = conn;
                cmd.Transaction = tx;

                try
                {
                    int count = 0;
                    for (int n = 0; n < SQLStringList.Count; n++)
                    {
                        string strsql = SQLStringList[n];
                        if (strsql.Trim().Length > 1)
                        {
                            cmd.CommandText = strsql;
                            count += await cmd.ExecuteNonQueryAsync();
                        }
                    }
                    await Task.Run(() => tx.Commit());
                    return count;
                }
                catch (Exception ex)
                {
                    try
                    {
                        tx.Rollback();
                    }
                    catch (Exception rex)
                    {
                        throw rex;
                    }
                    throw ex;
                }
            }
        }
        /// 执行一条计算查询结果语句，返回查询结果（object）。
        public async Task<object> GetSingle(string SQLString)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand cmd = new SqlCommand(SQLString, connection))
                {
                    try
                    {
                        await connection.OpenAsync();
                        object obj = await cmd.ExecuteScalarAsync();
                        if ((Object.Equals(obj, null)) || (Object.Equals(obj, System.DBNull.Value)))
                        {
                            return null;
                        }
                        else
                        {
                            return obj;
                        }
                    }
                    catch (System.Data.SqlClient.SqlException e)
                    {
                        connection.Close();
                        throw e;
                    }
                }
            }
        }
        /// 执行查询语句，返回DataSet
        public async Task<DataSet> Query(string SQLString)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                DataSet ds = new DataSet();
                try
                {
                    await connection.OpenAsync();
                    SqlDataAdapter command = new SqlDataAdapter(SQLString, connection);
                    await Task.Run(() => command.Fill(ds, "ds"));
                }
                catch (Exception ex)
                {
                    throw ex;
                }
                return ds;
            }
        }



        /// 执行SQL语句，返回影响的记录数
        public async Task<int> ExecuteSqlAsync(string SQLString, params SqlParameter[] cmdParms)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand cmd = new SqlCommand())
                {
                    try
                    {
                        await PrepareCommand(cmd, connection, null, SQLString, cmdParms);
                        int rows = await cmd.ExecuteNonQueryAsync();
                        cmd.Parameters.Clear();
                        return rows;
                    }
                    catch (System.Data.SqlClient.SqlException e)
                    {
                        throw e;
                    }
                }
            }
        }
        /// <summary>
        /// 执行一条计算查询结果语句，返回查询结果（object）。
        /// </summary>
        /// <param name="SQLString">计算查询结果语句</param>
        /// <returns>查询结果（object）</returns>
        public async Task<object> GetSingle(string SQLString, params SqlParameter[] cmdParms)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand cmd = new SqlCommand())
                {
                    try
                    {
                        await PrepareCommand(cmd, connection, null, SQLString, cmdParms);
                        object obj =await cmd.ExecuteScalarAsync();
                        cmd.Parameters.Clear();
                        if ((Object.Equals(obj, null)) || (Object.Equals(obj, System.DBNull.Value)))
                        {
                            return null;
                        }
                        else
                        {
                            return obj;
                        }
                    }
                    catch (System.Data.SqlClient.SqlException e)
                    {
                        throw e;
                    }
                }
            }
        }
        /// <summary>
        /// 执行查询语句，返回DataSet
        /// </summary>
        /// <param name="SQLString">查询语句</param>
        /// <returns>DataSet</returns>
        public async Task<DataSet> QueryAsync(string SQLString, params SqlParameter[] cmdParms)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand();
                await PrepareCommand(cmd, connection, null, SQLString, cmdParms);
                using (SqlDataAdapter da = new SqlDataAdapter(cmd))
                {
                    DataSet ds = new DataSet();
                    try
                    {
                        await Task.Run(()=> da.Fill(ds, "ds")); 
                        cmd.Parameters.Clear();
                    }
                    catch (Exception ex)
                    {
                        throw ex;
                    }
                    return ds;
                }
            }
        }
        private async static Task PrepareCommand(SqlCommand cmd, SqlConnection conn, SqlTransaction trans, string cmdText, SqlParameter[] cmdParms)
        {
            if (conn.State != ConnectionState.Open)
                await conn.OpenAsync();
            cmd.Connection = conn;
            cmd.CommandText = cmdText;
            if (trans != null)
                cmd.Transaction = trans;
            cmd.CommandType = CommandType.Text;//cmdType;
            if (cmdParms != null)
            {
                foreach (SqlParameter parameter in cmdParms)
                {
                    if ((parameter.Direction == ParameterDirection.InputOutput || parameter.Direction == ParameterDirection.Input) &&
                        (parameter.Value == null))
                    {
                        parameter.Value = DBNull.Value;
                    }
                    cmd.Parameters.Add(parameter);
                }
            }
        }



        /// <summary>
        /// 执行存储过程
        /// </summary>
        /// <param name="storedProcName">存储过程名</param>
        /// <param name="parameters">存储过程参数</param>
        /// <param name="tableName">DataSet结果中的表名</param>
        /// <returns>DataSet</returns>
        public async Task<DataSet> RunProcedure(string storedProcName, IDataParameter[] parameters, string tableName)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                DataSet dataSet = new DataSet();
                await connection.OpenAsync();
                SqlDataAdapter sqlDA = new SqlDataAdapter();
                sqlDA.SelectCommand = BuildQueryCommand(connection, storedProcName, parameters);
                await Task.Run(()=> sqlDA.Fill(dataSet, tableName));
                connection.Close();
                return dataSet;
            }
        }
        private static SqlCommand BuildQueryCommand(SqlConnection connection, string storedProcName, IDataParameter[] parameters)
        {
            SqlCommand command = new SqlCommand(storedProcName, connection);
            command.CommandType = CommandType.StoredProcedure;
            foreach (SqlParameter parameter in parameters)
            {
                if (parameter != null)
                {
                    // 检查未分配值的输出参数,将其分配以DBNull.Value.
                    if ((parameter.Direction == ParameterDirection.InputOutput || parameter.Direction == ParameterDirection.Input) &&
                        (parameter.Value == null))
                    {
                        parameter.Value = DBNull.Value;
                    }
                    command.Parameters.Add(parameter);
                }
            }

            return command;
        }


        //批量插入DataTable
        public async Task InsertByDataTable(DataTable dt)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlBulkCopy bulkCopy = new SqlBulkCopy(connection))
                {
                    await connection.OpenAsync();
                    bulkCopy.DestinationTableName = dt.TableName;
                    await bulkCopy.WriteToServerAsync(dt);
                }
            }                
        }
    }

}
