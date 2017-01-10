using Microsoft.VisualStudio.TestTools.UnitTesting;
using Demo.Controllers.api;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.Controllers.api.Tests
{
    [TestClass()]
    public class sampleControllerTests
    {
        [TestMethod()]
        public void GetTest()
        {
            var expected = "12345";

            var actual = "12345";

            Assert.AreEqual(expected, actual);
        }
    }
}