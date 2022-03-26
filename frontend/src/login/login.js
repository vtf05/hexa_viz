import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

// Import material-ui components
import { Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import LogoImage from "../image/loginLi.jpg";

//icons

// Import css
import "./loginView.css";

// Import Google Login component

// https://github.com/anthonyjgrove/react-google-login
// Import Logo

function Login(props) {

  const {email,setEmail}=useState("");
  const {pswd,setPswd}=useState("");

  const login=async(e)=>{
    e.preventDefault();
    const res = await fetch('http://127.0.0.1:8000/api/v1/document/', {
               method : "GET",
               headers : {
                 "Content-Type" : "application/json"
                 },
                 body: JSON.stringify({
                   email:email,
                   password : pswd
                   })
               });
               const data = await res.json();
  }


  return (
    <div class="login-outer-css">
      <Fragment>
        <Grid container>
          <Grid item xs={3} lg={4} md={2}></Grid>
          <Grid item xs={8}>
            <Grid container className="card-body card-body-con">
              <Grid
                item
                xs={6}
                sx={{ display: { xs: "none", lg: "block" } }}
                className="outer-card "
              >
                <img
                  id="optionalstuff"
                  src={LogoImage}
                  className="login-image"
                />
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                lg={6}
                md={7}
              >
                <CardContent className="input">
                  <div>
                    <FormControl>
                      <TextField
                        id="standard-search"
                        label="Email address"
                        type="search"
                        fullWidth
                        variant="standard"
                        className="Input-field"
                        value={email}
                        onChange={(e)=>{setEmail(e.target)}}
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
                        value={pswd}
                        onChange={(e)=>{setPswd(e.target)}}
                      />
                    </FormControl>
                  </div>
                </CardContent>
                <CardContent>
                  <Button
                    color="primary"
                    className="btn-block"
                    id="login-button"
                    onClick={login}
                  >
                    Login
                  </Button>
                </CardContent>
                <CardContent>
                  <br />

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
    </div>
  );
}

export default Login;
