import React,{useEffect} from 'react'

function Unmount() {
useEffect(()=>{
console.log('hello');
return ()=>console.log('Unmounted');
},[])
    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}

export default Unmount