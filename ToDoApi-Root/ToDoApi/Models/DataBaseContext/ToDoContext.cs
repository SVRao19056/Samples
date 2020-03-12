using EF =Microsoft.EntityFrameworkCore;
namespace ToDoApi.Models.DataBaseContext
{
    public class ToDoContext: EF.DbContext
    {

        public ToDoContext(EF.DbContextOptions<ToDoContext> options):base(options){}
        public EF.DbSet<ToDoItem> ToDoItems { get; set; }

    }
}