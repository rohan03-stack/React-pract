export const Addtodo = (value) => {
    return {type: "ADD_TODO", payload: value};
};

export const DeleteTodo = (id) => {
return {type: "DELETE_TODO", payload: id};
};