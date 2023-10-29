import React, { useState } from 'react'

function CreateNote() {
    const[title,setTitle]=useState("")
    const[body,setBody]=useState("")
    

    const handleCreation=()=>{
        const payload={
            title,
            body,
        }
        fetch("https://nutty-undershirt-boa.cyclic.app/notes/create",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            },
            body:JSON.stringify(payload)
        }).then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

  return (
    <div>
        <h2>Registration page</h2>
        <input type="text" placeholder='enter note title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
       <textarea name="" cols="30" rows="10" placeholder='enter the note details' value={body} onChange={(e)=>setBody(e.target.value)} ></textarea>
      
        <button onClick={handleCreation} >create</button>
    </div>

  )
}

export default CreateNote