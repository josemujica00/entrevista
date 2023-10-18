import React from 'react';
import { Typography, Button } from '@mui/material';

function ThankYou() {
  return (
    <div>
      <Typography variant="h6">Thank You</Typography>
      <Typography>Thank you for completing the form.</Typography>
      <Button variant="contained" color="primary">
        Return
      </Button>
    </div>
  );
}

export default ThankYou;
