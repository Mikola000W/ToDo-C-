using System.Collections.Generic;

namespace ToDo.Models.ViewModels
{
    public class TodoViewModel 
    {
        public List<ToDoItem> TodoList { get; set; }
        public ToDoItem Todo { get; set; }
    }
}
