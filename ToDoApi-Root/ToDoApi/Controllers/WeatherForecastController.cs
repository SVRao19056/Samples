using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ToDoApi.Models;

namespace ToDoApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    /// <summary>
    ///  This is a bare bones Web Api scafolding required to show case unit testing with NSuperTest 
    /// </summary>
    public class WeatherForecastController : Controller
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpHead("//WeatherForecast")]
        [HttpGet("//WeatherForecast")]
        public JsonResult Get()
        {
            var rng = new Random();
            var res =  Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                date = DateTime.Now.AddDays(index),
                temperatureC = rng.Next(-20, 55),
                summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
            var list = new WeatherForecastList();
            list.List = res;
            return Json(list);
        }
    }
}
