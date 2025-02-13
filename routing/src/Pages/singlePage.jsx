import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const getData = (url) => {
  return fetch(url).then((res) => res.json())
}
export const singlePage = () => {

    const params = useParams();
    const [singleUserData, setSingleUserData] = useState({})
    console.log(params);

    useEffect(() => {
      getData(`https://reqres.in/api/users/${params.id}`).then((res) => setSingleUserData(res.data));
  }, [])

  console.log(singleUserData, "this is single data");
  
    
  return (
    <>
    <h1>Single Page</h1>
    <div key={singleUserData.id}>
      <img src={singleUserData.avatar} alt="" />
      <p>name : {singleUserData.first_name}</p>{" "} <p>{singleUserData.last_name}</p>
      <p></p>

    </div>
    </>

  )
}
