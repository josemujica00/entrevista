import React from 'react';
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

function FinishingUp({ selectedAddOns, onConfirm }) {
  const total = selectedAddOns.reduce(
    (acc, addOn) => acc + parseFloat(addOn.price.replace('$', '')),
    0
  );

  return (
    <div>
      <Typography variant="h6">Finishing Up</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Complemento</TableCell>
              <TableCell>Precio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedAddOns.map((addOn) => (
              <TableRow key={addOn.id}>
                <TableCell>{addOn.name}</TableCell>
                <TableCell>{addOn.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={2}>
        <Typography variant="h6">Total: ${total.toFixed(2)}</Typography>
        <Button variant="contained" color="primary" onClick={onConfirm}>
          Confirmar
        </Button>
      </Box>
    </div>
  );
}

export default FinishingUp;
