import React from 'react'

export const Counter = () => {
    const [count, setCount] = React.useState(0);

    const Handleinc = () => {
        setCount((prev) => prev +1 )
    }

    const Handledec = () => {
        setCount((prev) => prev - 1 )
    }

    React.useEffect(() => {
        const id = setInterval(() => {
       console.log("this is time");
       
        }, 1000)
        return () => {
            clearInterval(id)
        }
    }, [])

  return (
    <>

    <h1>Count : {count}</h1>
    <button onClick={Handleinc}>Inc</button>
    <button disabled = {count ===0} onClick={Handledec}>Dec</button>
    </>
  )
}
