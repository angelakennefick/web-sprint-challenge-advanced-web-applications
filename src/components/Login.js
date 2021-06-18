import React, { useEffect } from "react";
import { axiosWithAuth } from '../helpers/axiosWithAuth';

const login = e => {
  e.preventDefault();
  axiosWithAuth().post('login/endpoint', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      this.props.history.push('/');
    })
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const error = "Username or Password not valid.";
  //replace with error state

    const handleChange = e => {
      setCredentials: {
        ...credentials,
        [e.target.name]: e.target.value,
      }
  }

  return (
    <div>
      <form onSubmit={this.login}>
        <h1>Welcome to the Bubble App!</h1>
        <div data-testid="loginForm" className="login-form">
          <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={this.handleChange}
              data-testid="username"
            />
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={this.handleChange}
              data-testid="password"
            />
          <button>Log in</button>
        </div>

        <p data-testid="errorMessage" className="error">{error}</p>
      </form>
    </div>
  );
};

export default Login;


//2. Add whatever state nessiary for form functioning.


//5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.