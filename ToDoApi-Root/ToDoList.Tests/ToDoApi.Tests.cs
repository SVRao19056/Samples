using System;
using System.Collections.Generic;
using NUnit.Framework;
using NSuperTest;
using ToDoApi;
using ToDoApi.Models;


namespace ToDoListTest
{
    
   // [TestClass]
    public class Tests
    {
        static Server<ToDoApi.Startup> server;

        // [ClassInitialize]
        // public static void Init(TestContext context){
        //     server = new Server<Startup>();
        // }

        [SetUp]
        public void Setup()
        {
              server = new Server<ToDoApi.Startup>();
           // console.log("in Set Up");
        }

        [Test(Description="This is a smoke test which verifies basic functionality of ToDo controller GET action")]
        public void ToDo_SmokeTest()
        {
            server.Get("/ToDo")
            .Set("Accept", "application/json")
            .Expect(200)
            .End<ToDoList>( (i,p) => {
                Assert.IsNotNull(i ,"expected {0} but actual value is null",typeof(System.Net.Http.HttpResponseMessage));
                Assert.IsNotNull(p,"expected {0} but actual value is null",typeof(ToDoList));
            });
           
        }

        [Test(Description="This is a smoke test which verifies basic functionality of WeatherForecast controller GET action")]
        public void WeatherForecast_SmokeTest()
        {
            server.Get("/WeatherForecast")
            .Set("Accept", "application/json")
            .Expect(200)
            .End<WeatherForecastList>( (i,p) => {
                Assert.IsNotNull(i ,"expected {0} but actual value is null",typeof(System.Net.Http.HttpResponseMessage));
                Assert.IsNotNull(p,"expected {0} but actual value is null",typeof(WeatherForecastList));
            });
           
        }


        [Test(Description="This is check valid type is returned")]
        public void ValidTypeTest()
        {
           
            server.Get("/WeatherForecast")
            .Set("Accept", "application/json")
            .Expect(200)
            .End<WeatherForecastList>( (i,p) => {
                //var resHdrs = i.Headers;
                var now = DateTime.Now;
                TimeSpan? diff = DateTime.Now - i.Headers.Date;
                Assert.IsTrue(diff.HasValue);
                Assert.IsTrue(diff.HasValue?diff.Value.Minutes<=2:false );
              
                Assert.IsTrue(p.List.Length==5 , "Expected list to have some items and not {0}",p.List.Length);
            });
           
        }
    }
}