import Child1 from "./child1";


function Child ({props}){
  console.log(props);
  
  return(
    <>
    <div>
      <h1>My Name is: {props}</h1>
      <Child1 defaultvalue = {props} />
    </div>
    </>

  )
}
export default Child;

