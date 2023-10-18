import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Grid,
  Container,
  Paper,
} from '@mui/material';
import PersonalInfo from './PersonalInfo';
import SelectYourPlan from './SelectYourPlan';
import PickAddOns from './PickAddOns';
import FinishingUp from './FinishingUp';
import ThankYou from './ThankYou';

const steps = ['Personal Info', 'Select Your Plan', 'Pick Add-Ons', 'Finishing Up', 'Thank You'];

const buttonStyles = {
  background: 'royalblue', // Fondo azul rey para los botones
  color: 'white',          // Letras blancas para los botones
};

function FormularioPrincipal() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      // Enviar el formulario o realizar alguna acción final
      // Aquí puedes agregar lógica para enviar los datos del formulario.
      // En este ejemplo, simplemente pasaremos a la página de agradecimiento.
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setSelectedAddOns([]);
  };

  const handleConfirmation = () => {
    // Realiza cualquier lógica necesaria antes de pasar a la página de agradecimiento.
    // Por ejemplo, podrías enviar los datos del formulario aquí.
    setActiveStep(activeStep + 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalInfo />;
      case 1:
        return <SelectYourPlan />;
      case 2:
        return (
          <PickAddOns
            selectedAddOns={selectedAddOns}
            onAddOnSelection={(addOns) => setSelectedAddOns(addOns)}
          />
        );
      case 3:
        return (
          <FinishingUp
            selectedAddOns={selectedAddOns}
            onConfirm={handleConfirmation}
          />
        );
      case 4:
        return <ThankYou />;
      default:
        return 'Paso desconocido';
    }
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: 20, backgroundColor: 'blue' }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel style={{ color: 'white' }}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} style={{ padding: 20, backgroundColor: 'white' }}>
            {getStepContent(activeStep)}
            <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
              <Button disabled={activeStep === 0} onClick={handleBack} style={buttonStyles}>
                Atrás
              </Button>
              {activeStep === steps.length - 1 ? (
                <Button onClick={handleReset} style={buttonStyles}>
                  Reiniciar
                </Button>
              ) : (
                <Button onClick={handleNext} style={buttonStyles}>
                  {activeStep === steps.length - 2 ? 'Confirmar' : 'Siguiente'}
                </Button>
              )}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FormularioPrincipal;
