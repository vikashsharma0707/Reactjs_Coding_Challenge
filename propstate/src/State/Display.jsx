import { useState } from "react";
import State from "./State";
import Update from "./Update";



const Display=()=>{
    const [count,setcount] =useState(0)
    return(
        <>
        
       
        <State   count={count}/>
        <Update setcount={setcount}/>

        </>
    )
}

export default Display;