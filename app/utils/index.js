export function updateTodoStatus(todos, todoId) {
    let index = todos.findIndex((item) => item.key === todoId);
    todos[index].status = todos[index].status === 0 ? 1 : 0;

    return todos;
}

export function removeTodo(todos, todoId) {
    return todos.filter((item) => {
        return item.key !== todoId;
    });
}

export function editTodo(todos, editedItem) {
    let index = todos.findIndex((item) => item.key === editedItem.key);
    if(editedItem.content !== '') {
        todos[index].content = editedItem.content;
    }
    else {
        todos.splice(index, 1);
    }

    return todos;
}