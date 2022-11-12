const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
          var i;
        var lst = [];
        for (i in all) {
          if (all[i].dueDate < today) {
            lst.push(all[i]);
          }
        }
        return lst;
    }
  
    const dueToday = () => {
         var lst = [];
        for (i in all) {
          if (all[i].dueDate === today) {
            lst.push(all[i]);
          }
        }
        return lst;
    }
  
    const dueLater = () => {
         var i;
        var lst = [];
        for (i in all) {
          if (all[i].dueDate > today) {
            lst.push(all[i]);
          }
        }
        return lst;
    }
  
    const toDisplayableList = (list) => {
          var i;
        var display_Lst = []
        for (i=0;i<list.length;i++) {
          if (list[i].completed === false) {
            if (list[i].dueDate===today) {
              display_Lst.push(`[ ] ${list[i].title}`)
            }
            else {
              display_Lst.push(`[ ] ${list[i].title} ${list[i].dueDate}`)
            }
          }
          else {
            if (list[i].dueDate===today) {
              display_Lst.push(`[x] ${list[i].title}`)
            }
            else {
              display_Lst.push(`[x] ${list[i].title} ${list[i].dueDate}`)
            }          
          }
        }
        
        return display_Lst.join("\n");
      }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
  
  module.exports=todoList;