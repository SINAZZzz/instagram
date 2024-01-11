import { Box, Container, Typography  } from "@mui/material";
import Logo from '../../assets/Instagram Logo.jpg'
import { Link } from "react-router-dom";
import { useContext } from "react";
import {AppContext} from '../../context/AppContext.jsx'


export default function Login() {
  const { user } =useContext(AppContext);
  return (
    <Container>
      <Box sx={{
      display:'flex' , flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      height: "100vh",
      }}>
        <Box >
          <img src={Logo} alt="" />
        </Box>
        <Box>
          <Box component='img' alt="Profile" src={user.img} sx={{width:'5rem' , borderRadius:'50%' , mt:'2rem'}} />
          <Box>
            {user.username}
          </Box>
        </Box>
        <Box sx={{textAlign:'center'}} width='100%'>
          <Typography variant="h2"
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
                   <Link to='/home' className="linkHome"> Log in</Link>
                </Typography>
          <Typography>
            <Link to='/switchaccounts' className="linkSwitchAccounts">Switch accounts</Link>
          </Typography>
        </Box>
          
        <Box 
        sx={{
                width: "100%",
                position: "fixed",
                background:'white',
                bottom: 0,
                borderTop: "solid 1px  rgb(210, 207, 207)",
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                pb:'30px',
                pt:'20px'
          }}>
          <Typography variant="body1" color='#A7A7A7' sx={{fontWeight:'400' , fontSize:'12px'}}>Don’t have an account?</Typography>
          <Typography variant="body1" color='#262626' sx={{fontWeight:'600' , fontSize:'12px'}}>Sign up.</Typography>
        </Box>
      </Box>
    </Container>
  )
}
