import { Box } from "@mui/material";
import { useState } from "react";
import { MuiFileInput } from "mui-file-input";
import AttachFileIcon from '@mui/icons-material/AttachFile';

export default function AddPost() {
  const [value, setValue] = useState<File | null>(null)

  const handleChange = (newValue: File | null) => {
    setValue(newValue)
  }
  return (
    <Box component="div" my='20px'>
      <Box sx={{position:'absolute' , mt:'15px'}}>
        <AttachFileIcon />
      </Box>
      <MuiFileInput value={value} onChange={handleChange} inputProps={{accept:'image/*'}}  placeholder="Select File" sx={{width:'100%'}} />
    </Box>
  );
}
