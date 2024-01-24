// mui
import { Box , TextField , Button , Container , Input ,InputLabel  } from "@mui/material";
// react
import { useState } from "react";
// Camera
import CameraComponent from "./components/Camera";
// axios
import axios from "axios";
// toast 
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// router
import { useNavigate } from "react-router-dom";
import FileUpload from './components/FileUpload'

interface Posts {
  File: File ;
  Description:string;
  Country:string;
}

export default function AddPost() {
  const [postData , setPostData] = useState<Posts>({File:'https://s6.uupload.ir/files/user_0ek2.jpg' , Description:'' , Country:'Iran'})
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    if(postData.File === '' || postData.Description === ''){
      toast.error('faild add post', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }else{
      axios.post(`http://localhost:5015/posts` , postData)
      .then(res => {
        toast.success('success add post', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          navigate("/home");
      })
    }
  }


  return (
    <Box component="div" my='20px' px='20px'>
      <ToastContainer />
      <Container>
        <InputLabel >Select File</InputLabel >
        {/* value={postData.File}  */}
        <Input type="file" onChange={handleInputChange} 
         sx={{width:'100%'}}  inputProps={{accept:'image/*'}}
           />
         {/* <FileUpload onFileChange={handleInputChange} name='File' /> */}
        <CameraComponent />

        <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            fullWidth
            rows={4}
            placeholder="Description"
            onChange={handleInputChange} name="Description"
          />
        <Button variant="outlined" fullWidth sx={{my:'10px'}} onClick={handleSubmit}>Submit</Button>
      </Container>
    </Box>
  );
}
