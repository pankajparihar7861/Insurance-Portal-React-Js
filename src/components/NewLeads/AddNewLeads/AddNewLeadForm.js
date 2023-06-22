import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stepper, Step } from "react-form-stepper";
import StepWizard from "react-step-wizard";
import { PersonalDetails } from "./PersonalDetails";
import { IncomeDetails } from "./IncomeDetails";
import { Documents } from "./Documents";
import { Quotation } from "./Quotation";
import { AiOutlineLeft } from 'react-icons/ai'
import './AddNewLeadForm.css'

export const AddNewLeadForm = () => {

  const [stepWizard, setStepWizard] = useState(null);
  const [user, setUser] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  const navigate = useNavigate()

  const assignStepWizard = (instance) => {
    setStepWizard(instance);
  };

  const assignUser = (val) => {
    console.log("parent receive user callback", val);
    setUser((user) => ({
      ...user,
      ...val
    }));


   setTimeout(() => {
    console.log('Final', user)
   }, 5000)
  };

  const handleStepChange = (e) => {
    console.log("step change");
    console.log(e);
    setActiveStep(e.activeStep - 1);
  };

  const handleComplete = () => {
    alert("You are done. TQ");
  };

  const handleClick = () => {
    navigate('/NewLeads')
  }

  return (
    <>

      <main id='main'>
         
       <div class='card fixed-top-design fixed-top'>
          <div class='row share-whatsapp-icons-overflow'>
              <div class='col-md-6 protect-form-heading'>
                    <h5 class='cg-protect'> 
                       <AiOutlineLeft onClick={handleClick} style={{cursor: 'pointer'}} /> &nbsp;  
                        CG Protect Form 
                    </h5>
              </div>

              <div class='col-md-6 share-whatsapp-icons'>
                  <i class="bi bi-share-fill share-design"></i>
                  <i class="bi bi-whatsapp wa-design"></i>
              </div>
          </div>
            
          <div id="stepper-design">
            <Stepper activeStep={activeStep}>
                {/* <Step label="Step - 1: Enter Name" children={<MdDescription />} /> */}

                <Step label='PERSONAL DETAILS' />
                <Step label='INCOME DETAILS' />
                <Step label='DOCUMENTS' />
                <Step label='QUOTATION' />
              </Stepper>
          </div>
       </div>

            {/* NOTE: IMPORTANT !! StepWizard must contains at least 2 children components, else got error */}
            <StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
              {/* <One userCallback={assignUser} />
              <Two user={user} userCallback={assignUser} />
              <Three user={user} completeCallback={handleComplete} /> */}

              <PersonalDetails userCallback={assignUser} />
              <IncomeDetails userCallback={assignUser}/>
              <Documents userCallback={assignUser}/>
              <Quotation user={user} userCallback={assignUser}/>
            </StepWizard>
        </main>
    </>
  );
};

// export default AddNewLeadForm;

