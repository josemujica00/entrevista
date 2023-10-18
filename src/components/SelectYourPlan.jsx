import React, { useState } from 'react';
import { Box, Typography, Checkbox, FormControlLabel } from '@mui/material';

const plans = [
  { id: 1, icon: 'icon1.png', name: 'Plan A', price: '$10' },
  { id: 2, icon: 'icon2.png', name: 'Plan B', price: '$15' },
  { id: 3, icon: 'icon3.png', name: 'Plan C', price: '$20' },
];

function SelectYourPlan() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div>
      <Typography variant="h6">Select Your Plan</Typography>
      <Box>
        {plans.map((plan) => (
          <FormControlLabel
            key={plan.id}
            control={
              <Checkbox
                checked={selectedPlan === plan}
                onChange={() => handlePlanSelection(plan)}
                color="primary"
              />
            }
            label={
              <div>
                <img src={plan.icon} alt={plan.name} />
                {plan.name} - {plan.price}
              </div>
            }
          />
        ))}
      </Box>
    </div>
  );
}

export default SelectYourPlan;
