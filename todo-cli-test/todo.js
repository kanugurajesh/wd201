// The below one is a todolist built using closures

const todoList = () => {
    let all = [];
  
    const add = (todoItem) => {
      all.push(todoItem);
    };
  
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    const overdue = () => {
      return all.filter((item) => item.dueDate < formattedDate(new Date().toISOString().slice(0, 10)) && !item.completed);
    };
  
    const dueToday = () => {
      return all.filter((item) => item.dueDate === formattedDate(new Date().toISOString().slice(0, 10)));
    };
  
    const dueLater = () => {
      return all.filter((item) => item.dueDate > formattedDate(new Date().toISOString().slice(0, 10)) && !item.completed);
    };
  
    const toDisplayableList = (list) => {
      return list
        .map(
          (item) =>
            `[${item.completed ? "x" : " "}] ${item.title}${item.dueDate === formattedDate(new Date()) ? "" : " " + item.dueDate}`
        )
        .join("\n");
    };
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
    };
};

module.exports = todoList;