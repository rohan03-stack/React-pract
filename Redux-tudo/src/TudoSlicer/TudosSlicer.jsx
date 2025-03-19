import { createSlice, nanoid } from "@reduxjs/toolkit";


const TudosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodos: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                isEdit: false,
            }
            state.push(todo);
        },
        deleteTodos: (state, action) => {
            return state.filter((el) => {
                return el.id !== action.payload;
            });

        }
        
    }
})

export const {addTodos, deleteTodos} = TudosSlice.actions;

export default TudosSlice.reducer;

