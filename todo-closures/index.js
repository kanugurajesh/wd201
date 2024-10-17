// The below function is the implementation of todo list using javascript

const todoList = () => {
    let all = [];

    const add = (addTask) => {
        all.push(addTask);
        console.log(all);
    }

    const markAsComplete = (index) => {
        all[index].completed = true;
        console.log(all);
    }

    return { all, add, markAsComplete };

}

const todos = todoList();
todos.add({ task: 'Learn JavaScript', completed: false });
todos.markAsComplete(0);