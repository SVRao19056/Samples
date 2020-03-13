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
    public class ToDoController : Controller
    {
        private readonly ILogger<ToDoController> _logger;

        public ToDoController(ILogger<ToDoController> logger)
        {
            _logger = logger;
        }


    [HttpGet("//ToDo")]
        public JsonResult GetJson()
        {
            var todoList = GetData();

            var list = new ToDoList();
            list.Items = todoList;

            return Json(list);
        }

        private List<ToDoItem> GetData()
        {
            return new List<ToDoItem>() {
            new ToDoItem(){
                Id= 1,
                 Name = "My Name",
                 IsComplete = false
            }
        };


        }
    }
}