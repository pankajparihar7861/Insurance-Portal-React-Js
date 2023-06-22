import React from 'react'
import { Button } from 'react-bootstrap'

export const Footer = (props) => {

  return (
    <>
        <div class='footer-btn fixed-bottom'>  
            <div class='row'>
                <div class='col-md-6'>
                    <Button variant='primary' id='footer-back-btn' onClick={() => props.previousStep()}> BACK </Button>
                </div>

                <div class='col-md-6'>
                    <Button variant='primary' id='footer-next-btn' onClick={() => props.nextStep()}> NEXT </Button>
                </div>
            </div>
        </div>
    </>
  )
}
