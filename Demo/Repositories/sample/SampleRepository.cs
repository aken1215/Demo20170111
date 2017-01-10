using Hank.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Demo.Repositories.sample
{
    public class SampleRepository : ISampleRepository
    {
        public HR030 GetHR030()
        {
            return new HR030 { EMPNO = "00037313" };
        }
    }
}