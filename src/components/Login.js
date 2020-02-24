import React, { Component } from 'react'
import {
  TextField,
  Button,
  Container
} from '@material-ui/core'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleTextChange = (e) => {
    const state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  login = (e) => {
    e.preventDefault()
    // set cookie here
    // set loggedIn = true and max-age = 60*1000 (one minute)
    document.cookie = "loggedIn=true; max-age=60*1000"

    window.location.replace("/dashboard")
  }

  render() {
      console.log("this is the cookie in the logIn.js file at the render" + document.cookie)
    return (
      <div className="App">
        <Container className="login-form-container" maxWidth="sm">
          <form className="login-form" onSubmit={this.login}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text" />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password" />
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary">Login</Button>
          </form>
          <div>Please log in to add or remove businesses</div>
        </Container>
      </div>
    );
  }
}

export default Login;
