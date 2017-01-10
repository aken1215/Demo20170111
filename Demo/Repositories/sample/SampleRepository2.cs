using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Hank.ViewModel;

namespace Demo.Repositories.sample
{
    public class SampleRepository2 : ISampleRepository
    {
        public HR030 GetHR030()
        {
            return new HR030 { EMPNO = "00029087" };
        }
    }
}