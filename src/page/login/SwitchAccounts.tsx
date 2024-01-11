import { Box, Container, TextField, Typography  } from "@mui/material";
import Logo from '../../assets/Instagram Logo.jpg'
import faceBook from '../../assets/icons/Icon.svg'
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {AppContext} from '../../context/AppContext.jsx'
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function SwitchAccounts() {
  const { user , username , password , setUsername , setPassword } =useContext(AppContext);
  const navigate = useNavigate();

  const userName = localStorage.getItem('username')
  const passWord = localStorage.getItem('password')
  
  localStorage.setItem('username',username);
  localStorage.setItem('password',password);

  const hanleSubmit = () => {
    if(user.username == userName && user.password == passWord){
      navigate("/home");
    }else{
      // toast()
      toast.error('username or password that false', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }
  
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
              <TextField fullWidth size="small" label='Username' type="text" required onChange={(e) => setUsername(e.target.value)}
              sx={{label:{fontSize:'14px' , color:'#A7A7A7'} , background:'#F8F6F6' }}/>
              <TextField fullWidth size="small" label='Password' type="password" required onChange={(e) => setPassword(e.target.value)}
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
            <Typography variant="h2" onClick={hanleSubmit}
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
