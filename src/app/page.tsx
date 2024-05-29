'use client'

import Image from "next/image";
import Form from 'react-bootstrap/Form';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import { Stack, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from "react";

export default function Home() {

  const [email, setEmail] = useState("sudharsan@gmail.com");
  const [password, setPassword] = useState("12345678");

  interface FormData {
    email: string
    password: string
  }

  const user: FormData = {
    email: email,
    password: password
  }
  

  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log("user",user)
    if (user.email === "sudharsan@gmail.com" && user.password === "12345678") {
      alert(" Login successful")
    }
    else{
      alert("Please enter valid credentials");
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form>
          <Box height={300} width={500}  sx={{ p: 2, border: '1px solid grey', bgcolor:'white' }}>
            <Typography variant="h5">
            Login Form
            </Typography>

            <Stack spacing={3} mt={2}>
            <TextField fullWidth id="outlined-basic" value={email} onChange={(e) =>setEmail(e.target.value)}  name="email" label="Email" variant="outlined" />

            <TextField fullWidth id="outlined-basic" type="password" onChange={(e) =>setPassword(e.target.value) } value={password} name="password" label="Password" variant="outlined" />
            </Stack>
            
            <Button type='submit' onClick={handleLogin} variant="contained" sx={{mt: 3}}>Login</Button>
                      
          </Box>
      </form>
      
    </main>
   
    
  );
}
