import React from 'react'
import { nanoid} from "nanoid";

export const Reducer = ( state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {id: nanoid(), text:action.payload, isEdit: false}
            ];


            case "DELETE_TODO":
                return state.filter((el) => {
                    return el.id !== action.payload;
                });

            default:
                return state;
                

    }


}
