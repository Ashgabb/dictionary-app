import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react'
import "./Header.css";
import { TextField } from "@mui/material"

const Header = () => {
    const darkTheme = createTheme({
        palette: {
          primary: {
            main: '#fff'
          },
          type: "dark",
        },
      });
  return (
    <div className='header'>
      <span className='title'>Word World</span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
        <TextField id="standard-basic" label="Standard" variant="standard" />
        </ThemeProvider>
      
      </div>
    </div>
  )
}

export default Header
