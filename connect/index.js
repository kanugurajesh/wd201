const { connect } = require("./connectDB");
const Todo = require("./TodoModel");

const createTodo = async () => {
    await connect();
    try {
        // Ensure this method exists in your model
        // const todo = await Todo.addTask({
        //     title: "First Item",
        //     dueDate: new Date(),  // Corrected typo here
        //     completed: false
        // });

        const todo = await Todo.create({
            title: "First Item",
            dueDate: new Date(),
            completed: false
        })

        console.log(`Created todo with ID: ${todo.id}`);  // Corrected string interpolation
    } catch (error) {
        console.log(error);
    }
};

const countItems = async () => {
    await connect();
    try {
        const totalCount = await Todo.count();
        console.log(`Found ${totalCount} items in the table!`);  // Corrected string interpolation
    } catch (error) {
        console.log("Complete Error");
    }
};

const getAll = async () => {
    try {
        const todos = await Todo.findAll();
        
    } catch (error) {
        console.log(error)
    }
}

(async () => {
    await createTodo();
    await countItems();
})();
