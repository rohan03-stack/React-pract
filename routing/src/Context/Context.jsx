/* eslint-disable react/prop-types */
import {  createContext, useState } from "react";


export  const Authcontext =  createContext(null);

export const AuthContextProvider = (props) => {
    const [isAuth, setIsAuth] = useState(false);

    const toggelAuth = () => {
        setIsAuth(!isAuth);
    };
    return (
        <Authcontext.Provider value={{isAuth, toggelAuth}}>{props.children}</Authcontext.Provider>
    )
}
