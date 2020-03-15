using System;
using System.Collections.Generic;

namespace ToDoApi
{
    public class WeatherForecastList
    {
        public WeatherForecast[] List {get;set;}
}
    public class WeatherForecast
    {
        public DateTime date { get; set; }

        public int temperatureC { get; set; }

        public int temperatureF  { get; set; }

        public string summary { get; set; }
    }
}
