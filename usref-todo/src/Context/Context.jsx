import { createContext, useState } from "react";


export const TodoContext = createContext(null);

export const TodoContextProvider = ({children}) => {
    const [data, setData] = useState([]);
    
    return(
        <TodoContext.Provider value={{data, setData}}>
            {children}
        </TodoContext.Provider>
    )
}