

// import { createContext, useState } from "react";

//  export const ContextApi = createContext(null);

// export const CreateProvider = ({children}) => {

//     const [store, setStore] = useState([]);
//     const [ page, setPage] = useState(1);

//     return(
//         <ContextApi.Provider value={{store, setStore, page, setPage}}>
//             {children}
//         </ContextApi.Provider>
//     )

// }





import { createContext, useState } from "react";

const ContextApiFile = createContext(null);

export const ContextProviders = ({ children }) => {
  const [store, setStore] = useState([]);
  const [page, setPage] = useState(1);
  return (
    <ContextApiFile.Provider value={{ store, setStore, page, setPage }}>
      {children}
    </ContextApiFile.Provider>
  );
};

export default ContextApiFile;
