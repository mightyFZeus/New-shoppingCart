import React, { useState, useEffect } from "react";
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
import { commerce } from "../../../Lib/Commerce";
const Confirmation = () => <div>Confirmation</div>;

const Steps = ["Shipping Address", "Payment details"];

const CheckOut = ({ cart,order,error, OnCaptureCheckout }) => {
  const [activeStep, setactiveStep] = useState(0);
  const [checkOutToken, setcheckOutToken] = useState(null)
  const [shippingData, setshippingData] = useState({})
  const classes = useStyles();
  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart"
        });
        console.log(token)
        setcheckOutToken(token);
      } catch (error) {
        
      }
    };

    generateToken();
  }, [cart]);

  const next =(data) =>{
    setshippingData(data)
    nextStep()
  }


  const nextStep = () =>setactiveStep((prevActiveStep) =>prevActiveStep + 1)
  const backStep = () =>setactiveStep((prevActiveStep) =>prevActiveStep - 1)

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkOutToken={checkOutToken} next={next} />
    ) : (
      <PaymentForm OnCaptureCheckout={OnCaptureCheckout} checkOutToken={checkOutToken} nextStep={nextStep} shippingData={shippingData} backStep={backStep}/>
    );
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
          {activeStep === Steps.length ? (
            <Confirmation />
          ) : (
            checkOutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};

export default CheckOut;
