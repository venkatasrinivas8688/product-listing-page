import {useState } from 'react';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import './index.css'

const Login=()=> {
  const navigate = useNavigate();
  const [username,setUserName]=useState("")
  const [password,setPassword]=useState("")
  const [showSubmitError,showPassword]=useState(false)
  const [errorMsg,setErrorMsg]=useState("")
  
  
  

  const onChangeUsername = event => {
    setUserName(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    navigate("/", { replace: true })
  }

  const onSubmitFailure = errorMsg => {
    showPassword(true)
    setErrorMsg(errorMsg)
  }

  const submitForm = async (event) => {
    event.preventDefault()
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }
  }

  const renderPasswordField = () => (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={onChangePassword}
          placeholder="Password"
        />
      </>
    )
  

  const renderUsernameField = () => (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={onChangeUsername}
          placeholder="Username"
        />
      </>
    )

    return (
      <div className="login-form-container">
    
        <form className="form-container" onSubmit={submitForm}>
          <h1 className='text-center'>Sign in</h1>
          <div className="input-container">{renderUsernameField()}</div>
          <div className="input-container">{renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
}

export default Login