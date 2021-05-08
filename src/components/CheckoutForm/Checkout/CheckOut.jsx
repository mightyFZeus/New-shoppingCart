import React, { useState } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button
} from "@material-ui/core";
import useStyles from "./Styles";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";

const Confirmation = () => <div>Confirmation</div>;

const Steps = ["Shipping Address", "Payment details"];

const CheckOut = () => {
  const [activeStep, setactiveStep] = useState(0);
  const classes = useStyles();

  const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);
  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            CheckOut
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {Steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === Steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  );
};

export default CheckOut;
