import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/Card";
import Button from "@mui/material/Button";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import store from '../store';
const LandingPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginState, setLoginState] = useState(true);
  const [registerState, setRegisterState] = useState(false);

  const LoginHandler = (event:any) => {
    event.preventDefault();
    fetch('/api/login',{
      method :'POST',
      body : JSON.stringify({email:email,password:password})
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data.message,data.data);
      return data.data;
    }).then((allowAccess) => {
      if(allowAccess){
        console.log("Allowing access now")
        dispatch({
          type : 'LOGIN'
        })
      }
    })
    
  };
  const RegisterHandler = (event:any) => {
    event.preventDefault();
    fetch('/api/register',{
      method :'POST',
      body : JSON.stringify({email:email,password:password})
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data.message);
    })
  };
  const showLogin = () => {
    setLoginState(true);
    setRegisterState(false);
  };
  const showRegister = () => {
    setRegisterState(true);
    setLoginState(false);
  };
  return (
    <div>
      <Card
        sx={{
          width: "25rem",
          margin: "0 auto",
          padding: "1rem",
          marginTop: "5rem",
          backgroundColor: "white",
          display: "flex",
          justifyContent:'space-evenly'
        }}
      >
        <Button variant="contained" color="primary" onClick={showLogin}>
          Login
        </Button>
        <Button variant="contained" color="primary" onClick={showRegister}>
          Register
        </Button>
      </Card>
      {loginState && (
        <Card
          sx={{
            width: "40%",
            margin: "0 auto",
            padding: "1.5rem",
            marginTop: "5rem",
            position : 'relative'
            
          }}
        >
          <Typography sx={{ textAlign: "center", fontSize: "2.5rem" }}>
            Login
          </Typography>
          <form action="" onSubmit={LoginHandler}>
            <FormControl sx={{padding:'1.5rem'}}>
            <TextField
              label="Enter your Email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              
              sx={{width : '100%' ,marginBottom:'1.5rem'}}
              type="email"
              required
              inputProps={{
                minLength: 5,
                maxLength: 50,
              }}
            ></TextField>
            <TextField
              label="Enter your password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              type='password'
              required
              inputProps={{
                minLength : 6,
                maxLength : 15
              }}
              sx={{width : '100%', marginBottom:'1.5rem'}}
            ></TextField>
            <Button variant='contained' color='success' sx={{width : '15%'}} type="submit">Login</Button>
            </FormControl>
          </form>
        </Card>
      )}
      {registerState && (
        <Card
          sx={{
            width: "40%",
            margin: "0 auto",
            padding: "1.5rem",
            marginTop: "5rem",
          }}
        >
          <Typography sx={{ textAlign: "center", fontSize: "2.5rem" }}>
            SignUp
          </Typography>
          <form action="" onSubmit={RegisterHandler}>
            <FormControl sx={{padding:'1.5rem'}}>
            <TextField
              label="Enter your Email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              type="email"
              required
              inputProps={{
                minLength: 5,
                maxLength: 50,
              }}
              sx={{width : '100%', marginBottom:'1.5rem'}}
            ></TextField>
            <TextField
              label="Enter your password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              type='password'
              required
              inputProps={{
                minLength : 6,
                maxLength : 15
              }}
              sx={{width : '100%', marginBottom:'1.5rem'}}
            ></TextField>
            <Button variant='contained' color='success' type="submit" sx={{width : '15%'}} >Sign Up</Button>
            </FormControl>
          </form>
        </Card>
      )}
    </div>
  );
};

export default LandingPage;
