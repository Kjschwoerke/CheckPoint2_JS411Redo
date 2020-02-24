import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Navigation = () => {
    let loggedIn = document.cookie
    console.log("in navigation:" + loggedIn)
    if (loggedIn == 'loggedIn=true'){
        return (
            <AppBar position="relative">
                <Toolbar>
                    <IconButton color="inherit">
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Small Business App.com
                    </Typography>
                    <ul className="nav-list">
                        <li className="nav-list-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link to="/dashboard">Dasboard</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link to="/">Log Out</Link>
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
        )
    } else {
        return (
            <AppBar position="relative">
                <Toolbar>
                    <IconButton color="inherit">
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: "1" }}>
                        Small Business App.com
                    </Typography>
                    <ul className="nav-list">
                        <li className="nav-list-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link to="/dashboard">Dasboard</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link to="/login">Log In</Link>
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
        )

    }
    
}

export default Navigation