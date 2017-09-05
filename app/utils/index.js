export function updateTodoStatus(todos, todoId) {
    let index = todos.findIndex((item) => item.key === todoId);
    todos[index].status = todos[index].status === 0 ? 1 : 0;

    return todos;
}