using NUnit.Framework;
using NSuperTest;
using ToDoApi;

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

        [Test]
        public void Test1()
        {
            server.Get("/WeatherForecast")
            .Set("Accept", "application/json")
            .Expect(200)
          //  .End()
            .End<WeatherForecast>( (i,p) => {
                Assert.IsNotNull(i);
                Assert.IsNotNull(p);
            });
           // Assert.Pass();
        }
    }
}