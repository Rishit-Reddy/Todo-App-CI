const { addTodo, deleteTodo, updateTodo, getTodos } = require("../src/todo");

describe("Todo Functions - Unit Tests", () => {
    let todos;

    beforeEach(() => {
        todos = []; 
    });

    test("should add a new todo", () => {
        const newTodo = { id: 1, text: "Learn CI/CD" };
        todos = addTodo(todos, newTodo);
        
        expect(todos).toHaveLength(1);
        expect(todos[0]).toEqual(newTodo);
    });

    test("should delete a todo by ID", () => {
        const todo1 = { id: 1, text: "Learn JavaScript" };
        const todo2 = { id: 2, text: "Practice TDD" };
        todos = [todo1, todo2];

        todos = deleteTodo(todos, 1);

        expect(todos).toHaveLength(1);
        expect(todos).not.toContain(todo1);
    });

    test("should update a todo by ID", () => {
        const todo = { id: 1, text: "Old Task" };
        todos = [todo];

        todos = updateTodo(todos, 1, "Updated Task");

        expect(todos[0].text).toBe("Updated Task");
    });

    test("should return all todos", () => {
        const todo1 = { id: 1, text: "Task 1" };
        const todo2 = { id: 2, text: "Task 2" };
        todos = [todo1, todo2];

        const result = getTodos(todos);

        expect(result).toHaveLength(2);
        expect(result).toEqual(todos);
    });

    test("should not delete if ID does not exist", () => {
        const todo = { id: 1, text: "Sample Task" };
        todos = [todo];

        const updatedTodos = deleteTodo(todos, 99);

        expect(updatedTodos).toHaveLength(1);
        expect(updatedTodos).toEqual(todos);
    });

    test("should not update if ID does not exist", () => {
        const todo = { id: 1, text: "Task" };
        todos = [todo];

        const updatedTodos = updateTodo(todos, 99, "New Text");

        expect(updatedTodos).toHaveLength(1);
        expect(updatedTodos[0].text).toBe("Task");
    });
});
