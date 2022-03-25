import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';  


// Import material-ui components
import { Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import FormControl from "@mui/material/FormControl";
 

//icons

// Import css
import "./loginView.css";

// Import Google Login component
import { GoogleLogin } from 'react-google-login';
import FbLogin from 'react-facebook-login';
// https://github.com/anthonyjgrove/react-google-login



// Import Logo
import Logo from "../logo/logo";
import LogoImage from "../../assets/images/login-image.svg";
import ZcAppAPI from 'zcapp/api';

// Constants
// const { Control, Group, Text } = Form;

function LoginView(props) {
  console.log(props.location, "done in login")
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();
  // I think we should create our own custom card
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={3} lg={4} md={2}></Grid>
        <Grid item xs={8}>
          <Grid container className="card-body card-body-con">
            <Grid
              item
              xs={6}
              sx={{ display: { xs: "none", lg: "block" } }}
              className="card"
            >
              <img id="optionalstuff" src={LogoImage} className="login-image" />
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              lg={6}
              md={7}
            >
              <Logo className="logo-image" />
              <CardContent className="input">
                <div>
                  <FormControl>
                    <TextField
                      id="standard-search"
                      label="Email address"
                      type="search"
                      fullWidth
                      variant="standard"
                      onChange={(event) => {
                        setUsername(event.target.value);
                      }}
                    />
                  </FormControl>
                </div>
                <br />
                <div>
                  <FormControl>
                    <TextField
                      fullWidth
                      id="standard-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      variant="standard"
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                    />
                  </FormControl>
                </div>
              </CardContent>
              <CardContent>
                <Button
                  color="primary"
                  className="btn-block"
                  id="login-button"
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </CardContent>
              <CardContent>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <FbLogin
                    appId={1030048931197891}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    textButton="facebook Login"
                    size=" small"
                    sx={{ borderRadius: "17px !important" }}
                  />
                </Grid>
                <br />
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <GoogleLogin
                    className="google"
                    clientId="272198842939-hp2nuj1v328njukgphmg1e9r60ffkavd.apps.googleusercontent.com"
                    buttonText="GOOGLE LOGIN"
                    onSuccess={handleGoogleLoginSuccess}
                    onFailure={(error) => console.log(error)}
                    cookiePolicy={"single_host_origin"}
                  />
                </Grid>
                <Button className="forgot-password">Forgot Password?</Button>
                <Grid className="info">
                  Don't have an account?
                  <a href="/register" className="zoom">
                    Sign up
                  </a>
                </Grid>
              </CardContent>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );


  async function responseFacebook(response) {
		const res = await ZcAppAPI.User.facebookLogin({accessToken: response.accessToken});
    if (!res.error){
      navigate("/home", { replace: true });
    }
    console.log('the response after facebook login', res);
	};

  /**
   * 
   */
  async function handleGoogleLoginSuccess(response) {
    const res = await ZcAppAPI.User.googleLogin({accessToken: response.accessToken});
     if (!res.error) {
       navigate("/home", { replace: true });
     }
    console.log('the response after google login', res);
  }

  /**
   * Begin login process
   */
  async function handleLogin() {
    const res = await ZcAppAPI.User.login({ username: username, password: password });
    console.log(localStorage.getItem('access_token'), ' is the response from acces token');
    if (res.access_token) {
      // redirect to homepage on successful login
      navigate('/home');
      console.log('We should see some page change here');
      // return <Navigate to='/home' />
    }
    else {
      // show error
      console.log('The response sent doesn not have access_token')
    }
  }
}


export default LoginView;

