import { useState } from 'react'
export default function TodoCard(){
    const [Task,setTask]= useState()

    return(
        <div>
            <h1>To DO list</h1>
            <input  className=" border mr-1" type="text" placeholder="enter your list" onKeyUp={(event)=>{setTask(event.target.value)}}></input>
            <button onClick={()=>{console.log(Task)}}>Add</button>
            <div>yet no task</div>
        </div>
    )
}