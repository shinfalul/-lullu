import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasic= () => {
 // var name="shinfa"
 var[name,fname]=useState("shinfa")
 var[val,setval]=useState()
 var[sub,setsub]=useState()
 const handleInput=(e)=>{
  setval(e.target.value);
 }
 const submitHandler=()=>{
  console.log("clicked")
  setsub(val)
 }
  return (
    <div style={{margin:'100px'}}>
      <Typography varient='h6'>welcome to {val}</Typography>
      <br/>
      <TextField variant="outlined" onChange={handleInput}/>
      <Button variant='contained' onClick={submitHandler}>submit</Button>
    </div>

  
  )
}

export default StateBasic