import * as React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import {useState} from 'react';
import { Paper } from '@material-ui/core';
import './../css/Checkout.css'



const Checkout=()=>{
 const [activeStep, setActiveStep] = useState(0); 
 const steps = ['Shipping address', 'Payment details','Review'];

/*Pasamos las variables como props a AddressForm para poder ser utilizadas desde alla  */
  const nextStep = () => setActiveStep((prevActiveStep)=>prevActiveStep + 1);
  const backtStep = () => setActiveStep((prevActiveStep)=>prevActiveStep - 1);

 function Form(step) {
  switch (activeStep) {
    case 0:
      return <AddressForm nextStep={nextStep}/>;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

  
//const Form =()=>activeStep===0 ? <AddressForm/>:<PaymentForm/>:<Review/>; 
return(
    <> 
      <Paper className='paper'>
        <h1 className='title' align="center">
            Checkout
        </h1>
        <div className='steps'>
           <Stepper activeStep={0}>
              {steps.map(step=>
              <Step key={step}>
                <StepLabel>
                {step} 
                </StepLabel>
              </Step>
              )}
          </Stepper>
        </div>
          <Form/>
  
      </Paper>
      
    </>

  );
}

export default Checkout


  

 

  
       
    
  