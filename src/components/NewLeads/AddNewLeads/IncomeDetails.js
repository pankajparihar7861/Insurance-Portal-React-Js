import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import './AddNewLeadForm.css'
import { Footer } from './Footer'

const initialState = {
    annualIncome: '',
    governmentRebate: '',
    taxRebate: ''
}

export const IncomeDetails = (props) => {

  const [incomeDetailsObj, setIncomeDetailsObj] = useState(initialState)

  const handleChange = (e) => {
    setIncomeDetailsObj({...incomeDetailsObj, [e.target.name]: e.target.value})
  }

  const handleNextPageMove = () => {
    props.userCallback(incomeDetailsObj)
    props.nextStep()
  }

  return (
    <>
        <div class='row top-margin'>
            <div class='col-md-4'>

                <div class='row'>

                    <div class='col-md-12 mb-5'>
                        <Form>
                            <Form.Group>
                                <Form.Label class='label-design'> Annual Income </Form.Label>
                                <Form.Control 
                                    id='input-design' 
                                    type="input" 
                                    // placeholder="40,000" 
                                    value={incomeDetailsObj.annualIncome}
                                    onChange={handleChange}
                                    name='annualIncome'
                                />
                            </Form.Group>
                        </Form>
                    </div>

                    <div class='col-md-12 mb-5'>
                        <Form>
                            <Form.Group>
                                <Form.Label class='label-design'> Government Rebate </Form.Label>
                                <Form.Control 
                                   id='input-design' 
                                   type="input" 
                                //    placeholder="$ 3000" 
                                   value={incomeDetailsObj.governmentRebate}
                                   onChange={handleChange}
                                   name='governmentRebate'
                                />
                            </Form.Group>
                        </Form>
                    </div>

                    <div class='col-md-12 bottom-extra-space'>
                        <Form>
                            <Form.Group>
                                <Form.Label class='label-design'> Tax Rebate </Form.Label>
                                <Form.Control 
                                   id='input-design' 
                                   type="input" 
                                //    placeholder="$ 200" 
                                   value={incomeDetailsObj.taxRebate}
                                   onChange={handleChange}
                                   name='taxRebate'
                                />
                            </Form.Group>
                        </Form>
                    </div>

                </div>
            </div>
        </div>

        {/* Footer with new row  */}
        <div class='footer-btn fixed-bottom'>  
            <div class='row'>
                <div class='col-md-6'>
                    <Button variant='primary' id='footer-back-btn' onClick={() => props.previousStep()}> BACK </Button>
                </div>

                <div class='col-md-6'>
                    <Button variant='primary' id='footer-next-btn' onClick={handleNextPageMove}> NEXT </Button>
                </div>
            </div>
        </div>
        {/* <Footer {...props} /> */}
    </>
  )
}
