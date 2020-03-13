using System.Collections.Generic;
namespace ToDoApi.Models
{

    public class ToDoList {
        public ToDoList(){
            Items = new List<ToDoItem>();

        }
        public List<ToDoItem> Items {get;set; }   
    }
    public class ToDoItem
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public bool IsComplete { get; set; }
    }
}