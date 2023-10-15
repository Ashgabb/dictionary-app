import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react'
import "./Header.css";
import { MenuItem, TextField } from "@mui/material"
import category from "../../data/category.js";

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

      <span className='title'>Digictionary</span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <TextField id="standard - select-currency"
        select
        label="Language"
        helperText="Please select language"
        >
            {
                category.map((option) => (
                    <MenuItem key={option.label} value={option.label}>
                        { option.value }
                    </MenuItem>
                ))
            }
            
        </TextField>
        <div>
        
      </div>
        </ThemeProvider>
      </div>
      
      
    </div>
  )
}

export default Header;
