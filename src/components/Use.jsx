import { Button, Typography } from '@mui/material'
import React from 'react'

const Use = () => {
    var[x,setx]=UseState()
    const react=()=>{
        setx("react")
    }
    const angular=()=>{
        setx("angular")
    }
    const node=()=>{
        setx("node")
    }
        
  return (
    <div>
        <br/><br/><br/><br/><br/>
        <Typography variant='h3'>wecome to{x}</Typography>
        <Button varient="contained" color="success" onClick={react}>react</Button>
        &nbsp;&nbsp;
        <Button variant="contained" color='error' onClick={angular}>angular</Button>
        &nbsp&nbsp
        <Button variant="contained" color="success" onClick={node}>node</Button>

    </div>
  )
}

export default Use