 // ...............................Reducer...................................

   export const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADDTODO":
        console.log(state, "this is added")
        return {
          ...state,
          todos: [...state.todos, { "id": nanoid(), "task": action.payload }],
        };

      case "DELETETODO":  
        return {
          ...state, todos: state.todos.filter((todo) => todo.id !== action.payload)
        };

      case "UPDATETODO":
        return {
          ...state, todos: state.todos.map((todo) => (todo.id === action.id ? { ...todo, task: action.payload } : todo)),

        }






      default:
        return state;
    }
  };