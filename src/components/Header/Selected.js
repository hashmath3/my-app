import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useState } from "react";
function Selected() {
  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 41,
    height: 22,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#6366f1',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 19,
      height: 19,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));
  // const setDark = () => {
  //   localStorage.setItem("theme", "dark");
  //   document.documentElement.setAttribute("data-theme", "dark");
  // };

  // const setLight = () => {
  //   localStorage.setItem("theme", "light");
  //   document.documentElement.setAttribute("data-theme", "light");
  // };

  // const storedTheme = localStorage.getItem("theme");

  // const prefersDark =
  //   window.matchMedia &&
  //   window.matchMedia("(prefers-color-scheme: dark)").matches;

  // const defaultDark =
  //   storedTheme === "dark" || (storedTheme === null && prefersDark);

  // const [darkTheme, setDarkTheme] = useState(
  //   defaultDark == "dark" ? true : false
  // );

  // if (defaultDark) {
  //   setDark();
  // }

  // const toggleTheme = (e) => {
  //   if (!darkTheme) {
  //     setDark();
  //   } else {
  //     setLight();
  //   }
  //   setDarkTheme(!darkTheme);
  // };
  return (
    <div>
     <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Light</Typography>
        <IOSSwitch sx={{ m: 1 }} 
        // defaultChecked value={!darkTheme}
        //   onClick={() => toggleTheme()}
          />
       
           <Typography>Dark</Typography>
      </Stack>   </div>
  )
}

export default Selected

