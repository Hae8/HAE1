import './App.css';

// REACT 주요 라이브러리
// 1. Material UI (MUI)
// 2. Sweet Alert
// 3. REACT HOOK FORM

import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Swal from 'sweetalert2'
import { Autocomplete, Grid, IconButton, TextField, ThemeProvider, createFilterOptions, createTheme, AppBar, Toolbar, Typography, BottomNavigation } from '@mui/material';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';

const theme = createTheme({
  palette: {
    primary: {
      main: '#03A688'
    },
    secondary:{
      main: "#04C4D9"
    },
    error: {
      main: "#F23005"
    }
  }
})

function App() {
  const top100Films = [
    { title: 'The Godfather', id: 1 },
    { title: 'Pulp Fiction', id: 2 },
  ];

  const top2Films = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
  ];

  const [value, setValue] = useState();

  const filter = createFilterOptions();

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <div>xs={12} sm={6} md={3}</div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div>xs={12} sm={6} md={3}</div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div>xs={12} sm={6} md={3}</div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div>xs={12} sm={6} md={3}</div>
        </Grid>
      </Grid>
      <div>
        <div>
          <Button onClick={()=>{
            Swal.fire({
              title: '에러가 발생했습니다.',
              text: '잠시 후 다시 시도해주세요.',
              icon: 'error',
              footer: '고객센터 : 02-***-****',
              confirmButtonText: '확인'
          });
          }}>기본버튼</Button>
          <Button variant="contained">기본버튼</Button>
          <Button variant="outlined">기본버튼</Button>
        </div>
        <div>
          <Button variant="contained" size="small">작은 버튼</Button>
          <Button variant="contained">기본버튼</Button>
          <Button variant="contained" size="large">큰 버튼</Button>
        </div>
        <div>
          <Button variant="contained" startIcon={<BrightnessLowIcon/>}>버튼</Button>
          <Button variant="contained" endIcon={<Brightness2Icon/>}>버튼</Button>
          <IconButton size='large'>
            <FilterDramaIcon fontSize="inherit" />
          </IconButton>
        </div>
        <div>
          <Button variant="contained" color='primary'>기본버튼</Button>
          <Button variant="outlined" color='primary'>기본버튼</Button>
          <Button variant="contained" color='secondary'>기본버튼</Button>
          <Button variant="outlined" color='secondary'>기본버튼</Button>
          <Button variant="contained" color='warning'>기본버튼</Button>
          <Button variant="outlined" color='warning'>기본버튼</Button>
        </div>




        <Autocomplete
          disablePortal
          options={top2Films}
          sx ={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="Movies" />}
        />

        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            if (typeof newValue === 'string') {
              setValue({
                title: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              // Create a new value from the user input
              setValue({
                title: newValue.inputValue,
              });
            } else {
              setValue(newValue);
            }
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);

            const { inputValue } = params;
            // Suggest the creation of a new valuetitle
            const isExisting = options.some((option) => inputValue === option.title);
            if (inputValue !== '' && !isExisting) {
              filtered.push({
                inputValue,
                title: `"${inputValue}" 추가하기`,
              });
            }
            return filtered;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          options={top100Films}
          getOptionLabel={(option) => {
            // Value selected with enter, right from the input
            if (typeof option === 'string') {
              return option;
            }
            // Add "xxx" option created dynamically
            if (option.inputValue) {
              return option.inputValue;
            }
            // Regular option
            return option.title;
          }}
          renderOption={(props, option) => <li {...props}>{option.title}</li>}
          sx={{ width: 300 }}
          freeSolo
          renderInput={(params) => (
            <TextField {...params} label="영화를 선택하세요" />
          )}
        />
      </div>
    </ThemeProvider>
  );
}



export default App;
