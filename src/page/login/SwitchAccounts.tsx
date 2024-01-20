// mui
import { Box, Container, TextField, Typography  } from "@mui/material";
// img
import Logo from '../../assets/Instagram Logo.jpg'
import faceBook from '../../assets/icons/Icon.svg'
// react router
import { Link, useNavigate } from "react-router-dom";
// icons 
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// context
import {AppContext} from '../../context/AppContext.jsx'
// react
import React, { useContext, useState } from "react";
// toast 
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


interface User {
  username: string;
  password: string;
}
const SwitchAccounts: React.FC=()=> {
  const { user , setUsername } =useContext(AppContext);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<User>({ username: '', password: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  

  const handleLogin = () => {
    if (credentials.username === "" && credentials.password === "") {
      toast.error('Invalid login credentials.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      
    } else {
      navigate("/home");
      localStorage.setItem('username',credentials.username);
      localStorage.setItem('password',credentials.password);
    }
  };

  
  return ( 
    <Container>
       <ToastContainer />
      <Link to='/'>
        <ArrowBackIosNewIcon sx={{pt:'10px'}} />
      </Link>
      <Box sx={{
        display:'flex' , flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height: "100vh",    
        }}>
          <Box >
            <img src={Logo} alt="" />
          </Box>
          <Box sx={{mt:'3rem'}}>
              <TextField fullWidth size="small" label='Username' type="text" required 
              onChange={handleInputChange}  name="username"
              sx={{label:{fontSize:'14px' , color:'#A7A7A7'} , background:'#F8F6F6' }}/>
              <TextField fullWidth size="small" label='Password' type="password" required
               onChange={handleInputChange}   name="password"
              sx={{label:{fontSize:'14px' , color:'#A7A7A7'} , background:'#F8F6F6' , mt:'0.9rem'}}/>
          </Box>
          <Box sx={{
             width: "100%",
             display:'flex',
             justifyContent:'end',
             py:'1rem'
          }}>
             <Typography variant="body1" color="#3797EF" fontSize="12px" fontWeight='500'>Forgot password?</Typography>
          </Box>
          <Box sx={{textAlign:'center' ,  mb:'4rem'}} width='100%'>
            <Typography variant="h2"  onClick={handleLogin}
            sx={{
              py:'15px',
              borderRadius:'5px',
              color:'white' ,
              width:'100%' ,
                mt:'1rem' ,
                mb:'2rem' ,
                background:'#3797EF' ,
                  fontWeight:'600' ,
                  fontSize:'14px' 
                  }}>
                    Log in
                  </Typography>
            <Typography variant="body1" 
             sx={{ width:'100%' , display:'flex'
              , alignItems:'center' , justifyContent:"center"}}>

                <img src={faceBook} alt="" />
                <Link to='/' className="linkFacebook">
                Log in with Facebook
                  </Link>

            </Typography>

            <Box component='div' sx={{display:'flex' , my:'3rem' , justifyContent:'center' , alignItems:'center' , width:'100%'}}>
                <Box component='div' sx={{
                  width:'100%',
                  height:'0px',
                  mt:'10px',
                  border:'1px solid #DBDBDB'
                }}></Box>
                <Box component='div' sx={{
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  m:'0px 20px',
                  fontWeight:'600' ,
                  color:'#8E8E8E',
                  fontSize:'12px',
                  mt:'10px'
                  
                }}>OR</Box>
                <Box component='div' sx={{
                  width:'100%',
                  height:'0px',
                  mt:'10px',
                  border:'1px solid #DBDBDB'
                }}></Box>
            </Box>

            <Box display='flex' justifyContent='center'>
              <Typography variant="body1" color='#A7A7A7' sx={{fontWeight:'400' , fontSize:'14px'}}>Don’t have an account?</Typography>
              <Typography variant="body1" color='#3797EF' sx={{fontWeight:'400' , fontSize:'14px'}}>Sign up.</Typography>
            </Box>
          </Box>

            
          <Box 
          sx={{
                  width: "100%",
                  position: "fixed",
                  bottom: 0,
                  borderTop: "solid 1px  rgb(210, 207, 207)",
                  display:'flex',
                  background:'white',
                  justifyContent:'center',
                  alignItems:'center',
                  pb:'30px',
                  pt:'20px'
            }}>
            <Typography variant="body1" color='#A7A7A7' sx={{fontWeight:'400' , fontSize:'12px'}}>Instagram от Facebook</Typography>
          </Box>
        </Box>
      </Container>
  )
}

export default SwitchAccounts;