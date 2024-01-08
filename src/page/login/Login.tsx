import { Box, Button, Grid, Typography , Container } from "@mui/material";
import Logo from '../../assets/Instagram Logo.jpg'
import Profile from '../../assets/user.jpg'


export default function Login() {
  return (
    <Box sx={{
    display:'flex' , flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    height: "100vh"
    }}>
      <Box >
        <img src={Logo} alt="" />
      </Box>
      <Box>
        <Box component='img' alt="Profile" src={Profile} sx={{width:'5rem' , borderRadius:'50%' , mt:'2rem'}} />
        <Box>
          user_name
        </Box>
      </Box>
      <Box sx={{textAlign:'center'}}>
        <Typography variant="h2"
         sx={{
          py:'10px',
          borderRadius:'5px',
          color:'white' ,
           width:'20rem' ,
            mt:'1rem' ,
            mb:'2rem' ,
             background:'#3797EF' ,
              fontWeight:'600' ,
               fontSize:'14px' 
               }}>Log in</Typography>
        <Typography variant="body1" color='#3797EF' sx={{fontWeight:'600' , fontSize:'14px'}}>Switch accounts</Typography>
      </Box>
        
      <Box 
       sx={{
              width: "100%",
              position: "fixed",
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
  )
}
