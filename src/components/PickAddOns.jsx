import React from 'react';
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material';

const addOns = [
  { id: 1, name: 'Complemento 1', price: '$10.00' },
  { id: 2, name: 'Complemento 2', price: '$15.00' },
  { id: 3, name: 'Complemento 3', price: '$20.00' },
];

function PickAddOns({ selectedAddOns, onAddOnSelection }) {
  const handleAddOnSelection = (addOn) => {
    if (selectedAddOns.includes(addOn)) {
      onAddOnSelection(selectedAddOns.filter((item) => item !== addOn));
    } else {
      onAddOnSelection([...selectedAddOns, addOn]);
    }
  }

  return (
    <div>
      <Typography variant="h6">Pick Add-Ons</Typography>
      <Box>
        <FormGroup>
          {addOns.map((addOn) => (
            <FormControlLabel
              key={addOn.id}
              control={
                <Checkbox
                  checked={selectedAddOns.some(item => item.id === addOn.id)}
                  onChange={() => handleAddOnSelection(addOn)}
                  color="primary"
                />
              }
              label={`${addOn.name} - ${addOn.price}`}
            />
          ))}
        </FormGroup>
      </Box>
    </div>
  );
}

export default PickAddOns;
