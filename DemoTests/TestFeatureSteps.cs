using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections;
using System.Collections.Generic;
using TechTalk.SpecFlow;

namespace DemoTests
{
    [Binding]
    public class TestFeatureSteps
    {
        private int Result;

        public List<int> Number1 { get; private set; }

        [BeforeScenario]
        public void BeforeScenario()
        {
            this.Number1 = new List<int>();

        }

        [Given(@"I have entered (.*) into the calculator")]
        public void GivenIHaveEnteredIntoTheCalculator(int p0)
        {
            this.Number1.Add(p0);
        }
        
        [When(@"I press add")]
        public void WhenIPressAdd()
        {
            foreach (var item in this.Number1)
            {
                this.Result += item;
            }
        }
        
        [Then(@"the result should be (.*) on the screen")]
        public void ThenTheResultShouldBeOnTheScreen(int p0)
        {
            Assert.AreEqual(p0, this.Result);
        }
    }
}
