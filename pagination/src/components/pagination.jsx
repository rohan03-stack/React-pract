// import React, { useState} from "react"
// import {ContextApi} from "../context/context"
// import axios from "axios"

// export const Pagination = () => {
//   const [pageCount, setPageCount] = useState(null)
//   const  showContext = React.useContext(ContextApi)





//   const fetchData  = async () => {
//     try {
//       let Response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${pageCount}&_page=${showContext.page}`);
//       console.log(Response.data);
//       setStore(Response.data)

//       const headers = Response.headers;

//     let totalCount = headers["x-total-count"]
//     let totalCounts = +totalCount;
//     if (totalCounts) setPageCount(Math.ceil(totalCounts / 10));

//     let dataValue = await Response.data;
//     showContext.setStore(dataValue);



//     }catch (err) {
//       console.log("err", err);
//     }
    
    
//   };

//   React.useEffect(() =>{
//     fetchData();
//   },[showContext.page]);


//   return(
//     <>
//         {showContext.store.map((el) => {
//           <div key={el.id}>
//         {el.id} - {el.title}
//           </div>
//         })}

//         <button disabled ={showContext.page ===1 } onClick={() => {
//           showContext.setPage(showContext.page -1)
//         }}>prev</button>

//            <button>{showContext.page}</button>

//         <button disabled = {showContext.page === pageCount} onClick={() => {
//           showContext.setPage(showContext.page +1)
//         }}>next</button>

    
//     </>
//       )

//   }



import React from "react";
import ContextApiFile from "../Context/Context";
import axios from "axios";

export const PostPage = () => {
  const [pageCount, setPageCount] = React.useState(null);
  const showContext = React.useContext(ContextApiFile);
  console.log("showContext", showContext);

  const fetchData = async () => {
    try {
      let Response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=${pageCount}&_page=${showContext.page}`
      );

     
      const headers = Response.headers;

     
      let totalCount = headers["x-total-count"];
      let totalCounts = +totalCount; //convert into number
      if (totalCounts) setPageCount(Math.ceil(totalCounts / 10));

      let dataValue = await Response.data;
      showContext.setStore(dataValue);
    } catch (err) {
      console.log("err", err);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [showContext.page]);

  return (
    <>
      {showContext.store.map((el) => (
        <div key={el.id}>
          {el.id} - {el.title}
        </div>
      ))}

      <button
        disabled={showContext.page === 1}
        onClick={() => {
          showContext.setPage(showContext.page - 1);
        }}
      >
        Prev
      </button>
      <button>{showContext.page}</button>
      <button
        disabled={showContext.page === pageCount}
        onClick={() => {
          showContext.setPage(showContext.page + 1);
        }}
      >
       Next
      </button>
    </>
  );
};
 


  