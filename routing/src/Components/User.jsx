import { Link, useSearchParams } from "react-router-dom";
import { Authcontext } from "../Context/Context";


const GetData = (url) => {
  return fetch(url).then((res) => res.json())
}
const getCurrentPageFromUrl = (value) => {
  value = Number(value);
  if (typeof value === "number" && value <= 0) value = 1;

  if (!value) value = 1;

  return value;
}



function User() {
  const [data, setData] = React.useState({});
  const { toggelAuth } = React.useContext(Authcontext);
  const [searchParam, setSearchParams] = useSearchParams();
  const initial = getCurrentPageFromUrl(searchParam.get("page"))
  const [page, setPage] = React.useState(initial);
  const [text,setText] = React.useState("")

  React.useEffect(() => {
    
    GetData(`https://reqres.in/api/users?page=${page}`).then((res) => setData(res))
}, [page]);


React.useEffect(() => {
    setSearchParams({ page, text })
}, [page, text])
  return (
    <>
     <h1>user</h1>
        <button onClick={toggelAuth}>log out</button>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <div>
            {
                data.data?.map((el, i) => (
                    <div key={i} >
                        <img src={el.avatar} />
                        <Link to={`/users/${el.id}`}>
                            {el.first_name} {" "} {el.last_name}
                        </Link>
                    </div>
                ))
            }
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
            <button>{page}</button>
            <button disabled={page >= 2} onClick={() => setPage(page + 1)}>Next</button>
        </div>
      
    </>
  )
}

export default User
