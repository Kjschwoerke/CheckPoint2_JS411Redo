import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Navigation = () => {
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
                    {/* Add LogIn Link here */}
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation