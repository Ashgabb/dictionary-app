import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react'
import "./Header.css";
import { MenuItem, TextField } from "@mui/material"
import categories from "../../data/category.js";
import { Language } from '@mui/icons-material';

const Header = ({setCategory, category, word, setWord}) => {
    const darkTheme = createTheme({
        palette: {
          primary: {
            main: '#fff'
          },
          type: "dark",
        },
      });

      const handleChange = (Language) => {
        setCategory(Language);
        setWord("");
      }
  return (
    <div className='header'>

      <span className='title'>{word ? word : "Digiword"}</span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
        <TextField 
          className='search'  
          // eslint-disable-next-line react/jsx-no-duplicate-props
          label="Search a Word" 
                  value={word}
                  onChange={(e)=>setWord(e.target.value)}
        />
        
        <TextField className='select'
        select
        label="Language"
                value={category}
                onChange={(e)=>handleChange(e.target.value)}
        helperText="Please select language"
        >
            {
                categories.map((option) => (
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
