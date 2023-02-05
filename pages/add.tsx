import Card from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Email, Feedback } from "@mui/icons-material";
import {addDoc, collection} from "firebase/firestore"
import {database} from '../firebase-config'

const AddVendor = () => {
  const [formVisibility, setFormVisibilty] = useState(false);
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  
  
  function submitFormHandler(event:any) {
    event.preventDefault()
    fetch('/api/data',{
        method:'POST',
        body : JSON.stringify( {
            email : email,
            text  : feedback

        })
    }).then((response) => {
        return response.json();
       
    }).then((data) => {
        console.log(data.message);
    })
  };
  return <>
  <Card sx = {{width:'30%', margin:'0 auto',padding:'1.5rem',display:'flex',justifyContent:'space-evenly',marginBottom:'1.5rem',backgroundColor:'#222831'}}>
  <Button variant = 'contained' startIcon={<VisibilityIcon/>} onClick={() => {
   setFormVisibilty(true)
  }}>Show</Button>
  <Button variant = 'contained' startIcon={<VisibilityOffIcon/>} color='secondary' onClick={()=>{
    setFormVisibilty(false)
  }} >Hide</Button>
  </Card>
  {formVisibility && <Card
        sx={{
          width: "75%",
          margin: "0 auto",
          marginTop: "1.5rem",
          padding: "1.5rem",
          border:'1px solid #393E46'
        }}
      >
        <form onSubmit={submitFormHandler}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              sx={{ marginBottom: "1.5rem" }}
              label={
                <>
                  
                  <Email /> <span>Enter your email</span>
                </>
              }
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              required
              inputProps={{
                minLength: 6,
                maxLength: 50,
              }}
            />
            <TextField
              type="text"
              value={feedback}
              onChange={(event) => {
                setFeedback(event.target.value);
              }}
              multiline
              rows={5}
              required
              inputProps={{
                minLength: 5,
                maxLength: 100,
              }}
              sx={{ marginBottom: "1.5rem" }}
              label={
                <>
                  <Feedback />{" "}
                  <span>Please provide your valuable feedback</span>
                </>
              }
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ width: "15%" }}
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </Card>}</>;
};

export default AddVendor;
