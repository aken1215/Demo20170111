using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Hank.ViewModel;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using Dapper;
using Demo.Models;

namespace Demo.Repositories.sample
{
    public class SampleRepository2 : ISampleRepository
    {
        private string connString = ConfigurationManager.ConnectionStrings["ConnectString"].ToString();
        public HR030 GetHR030()
        {
            IDbConnection conn = new SqlConnection(connString);
            var aa001= conn.Query<AA001>("Select top 1 EMPNO from aa001").FirstOrDefault();

            return new HR030 { EMPNO = aa001.EMPNO };
        }
    }
}