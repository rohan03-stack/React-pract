import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";


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

        },

        editTodos: (state, action) => {
            return state.map((el) =>
            el.id ===action.payload ? {...el,isEdit: !el.isEdit} :el);
        },

        updateTodo : (state, action) => {
            return state.map((el) => 
                el.id ===action.payload.id ? {...el, text: action.payload.text, isEdit: !el.isEdit} :el
            )
        }
        
    }
})

export const {addTodos, deleteTodos, editTodos, updateTodo} = TudosSlice.actions;

export default TudosSlice.reducer;

