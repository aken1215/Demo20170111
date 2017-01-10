using Demo.Repositories.sample;
using Hank.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Demo.Services.sample
{
    public class SampleService : ISampleService
    {
        public HR030 GetEMPNO()
        {
            var repository = new SampleRepository2();
            var result = repository.GetHR030();
            return result;
        }
    }
}