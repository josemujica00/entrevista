import React from 'react';
import { Box, Typography, TextField } from '@mui/material';

function PersonalInfo() {
  return (
    <div>
      <Typography variant="h6">Personal Info</Typography>
      <Box>
        <TextField label="Name" fullWidth />
        <TextField label="Email Address" fullWidth />
        <TextField label="Phone Number" fullWidth />
      </Box>
    </div>
  );
}

export default PersonalInfo;
