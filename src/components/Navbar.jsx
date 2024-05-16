import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant="h6">home</Typography>
                <Typography variant="h6">login</Typography>
                <Button variant="contained">login</Button>
                <Button variant="contained">signup</Button>
                <Button variant="contained">
                <Link to='/reg'>Signup</Link>
                </Button>
                <Button variant='contained'>
                  <link to='/u'>Button</link>
                  </Button>
                  <Button variant='contained'>
                    <link to='/use'>counter</link>
                </Button>
                <Button variant='contained'>
                  <Link to='/use'>use</Link>
                </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar