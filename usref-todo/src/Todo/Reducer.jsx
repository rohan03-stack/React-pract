import React from 'react'
import { nanoid} from "nanoid";

export const Reducer = ( state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {id: nanoid(), text:action.payload, isEdit: false}
            ];

            default:
                return state;
                

    }

}
