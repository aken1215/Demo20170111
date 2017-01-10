using Demo.Services.sample;
using Hank.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Demo.Controllers.api
{
    public class sampleController : ApiController
    {
        // GET: api/sample
        public HR030 Get()
        {
            var service = new SampleService();

            var result = service.GetEMPNO();

            return result;
        }

        // GET: api/sample/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/sample
        public void Post(HR030 value)
        {
        }

        // PUT: api/sample/5
        public void Put(int id, HR030 value)
        {
        }

        // DELETE: api/sample/5
        public void Delete(int id)
        {
        }
    }
}
