import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'


const Navigation = (props) => {
    console.log("this is props in navigation components: " + props.user.username)

    let loggedIn = document.cookie
    console.log("in navigation:" + loggedIn)
 
        return (
            <>
            <AppBar style={{background:'green'}} position="relative">
                <Toolbar>
                    <IconButton color="inherit">
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Austin Small Business
                    </Typography>
                    <ul className="nav-list">
                        <li className="nav-list-item">
                            <Link to="/">Listings</Link>
                        </li>
                            {loggedIn == 'loggedIn=true' && (
                                <li className="nav-list-item">
                                    <Link to="/dashboard">Add Business</Link>
                                </li>
                            )}
                        <li className="nav-list-item">
                            <Link onClick={() => {
                            document.cookie = "loggedIn="
                            window.location.replace("/login")
                        }} to="/">Log Out</Link>
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>

            <div className="nav-list-container-loggedIn">
               logged in as: {props.user.username}
            </div>
        </>
        )
    } 

export default Navigation