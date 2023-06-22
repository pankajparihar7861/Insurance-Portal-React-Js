import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { FiEdit3 } from 'react-icons/fi'
import { MdOutlineWifiCalling3 } from 'react-icons/md'
import { CiMail } from 'react-icons/ci'
import { Footer } from './Footer'
import InsService from '../../../Service/InsService'

// BACKEND-DATA-FORMAT 
// -------------------
/*
    {
        "contact": 0,
        "name": "string",
        "email": "string",
        "lastConnected": "string",
        "leadStage": "string",
        "birthDate": "2023-05-23T10:35:45.912Z"
    }
*/

export const Quotation = (props) => {

  const navigate = useNavigate()

  const handleSendPaymentLink = () => {

    const lastConnected = Math.floor(Math.random() * 10);
    const leadStage = lastConnected % 2 === 0 ? 'Interested' : 'Qualified'
    const contact = parseFloat(props.user.phone) // converting number from string to double

    const employeeDetails = {
        contact: contact,
        name: props.user.firstname + " " + props.user.lastname,
        email: props.user.email,
        lastConnected: lastConnected + ' days ago',
        leadStage: leadStage,
        birthDate: props.user.dob
    }

    employeeDetails.name && employeeDetails.contact && employeeDetails.email &&
    InsService.saveNewUser(employeeDetails)
    .then(resp => alert('New Lead Added', resp))
    .catch(err => console.log(err))

    employeeDetails.contact ?
    navigate('/QuotationSummary', { state: props.user })
    : alert('No data entered..!! Please enter some data') 
  }

  const calculateAge = () => {

    // let dob = new Date("06/24/2008");  
    let dob = new Date(props.user.dob);  //format -> 2015-04-23

    //calculate month difference from current date in time  
    let month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    let age_dt = new Date(month_diff);   
      
    //extract year from date      
    let year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    let age = Math.abs(year - 1970);  
      
    //display the calculated age  
    // document.write("Age of the date entered: " + age + " years");  

    if(age < 10)
       age = '0' + age

    return age;
  }

  return (
    <>
        <div class='row top-margin'>

            <div class='col-md-10'>

                <div class='row'>

                    <div class='col-md-12'>
                        <Card bg='Light' text='' className='quotation-card'>
                                <Card.Body>
                                    <Card.Text>
                                        <div class='row'>
                                            <div class='col-md-6' >
                                                <h6 class='quotation-headings'> Quotation Reference </h6>
                                                <h6 class='quotation-headings-values'> GRH/3345 </h6>
                                            </div>

                                            <div class='col-md-6 align-right' >
                                                <h6 class='quotation-headings'> Premium </h6>
                                                <h6 class='quotation-headings-values'> $70 per week </h6>
                                            </div>
                                        </div>

                                        <hr />

                                        <div class='row mb-5'>
                                            <div class='col-md-6' >
                                                <h6 class='quotation-headings'> Product </h6>
                                                <h6 class='quotation-headings-values'> CG Protect </h6>
                                            </div>

                                            <div class='col-md-6 align-right' >
                                                <h6 class='quotation-headings'> Sum insured upto </h6>
                                                <h6 class='quotation-headings-values'> $200, 000 </h6>
                                            </div>
                                        </div>

                                        <div class='row'>
                                            <div class='col-md-6'>
                                                <Button variant='primary' id='view-benefits-btn'> VIEW BENEFITS </Button>
                                            </div>

                                            <div class='col-md-6 share-wa-icons-quot'>
                                                <i class="bi bi-share-fill share-design"></i>
                                                <i class="bi bi-whatsapp wa-design"></i>
                                            </div>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>



            {/* CARD-2  */}

            <div class='col-md-10'>

                <div class='row'>

                    <div class='col-md-12 mb-5'>
                        <Card bg='Light' text='' className='quotation-card'>
                                <Card.Body>

                                   <Card.Title style={{color: 'black', fontWeight: 'bolder'}}> 
                                       Applicant Details
                                       <FiEdit3 class='edit-icon' />
                                       <MdOutlineWifiCalling3 class='calling-icon' />
                                       <CiMail class='mail-icon' />
                                    </Card.Title>

                                    <Card.Text>
                                        <div class='row mb-5'>
                                            <div class='col-md-4' >
                                                <h6 class='quotation-headings'> Applicant's Name </h6>
                                                {/* <h6 class='quotation-headings-values'> John Smith </h6> */}
                                                <h6 class='quotation-headings-values'> 
                                                   {props.user.firstname} {props.user.lastname}
                                                </h6>
                                            </div>

                                            <div class='col-md-4' >
                                                <h6 class='quotation-headings'> Address </h6>
                                                {/* <h6 class='quotation-headings-values'> 1533, Mccandless, Miliptas </h6> */}
                                                <h6 class='quotation-headings-values'> {props.user.address} </h6>
                                            </div>

                                            <div class='col-md-4 align-right-2' >
                                                <h6 class='quotation-headings'> Email </h6>
                                                {/* <h6 class='quotation-headings-values'> john.smith@xyz.com </h6> */}
                                                <h6 class='quotation-headings-values'> {props.user.email} </h6>
                                            </div>
                                        </div>


                                        <div class='row mb-5'>
                                            <div class='col-md-4' >
                                                <h6 class='quotation-headings'> Phone Number </h6>
                                                {/* <h6 class='quotation-headings-values'> +91-677754443 </h6> */}
                                                <h6 class='quotation-headings-values'> +91-{props.user.phone} </h6>
                                            </div>

                                            <div class='col-md-4' >
                                                <h6 class='quotation-headings'> Gender </h6>
                                                {/* <h6 class='quotation-headings-values'> Male </h6> */}
                                                <h6 class='quotation-headings-values'> {props.user.gender} </h6>
                                            </div>

                                            <div class='col-md-4 align-right-2' >
                                                <h6 class='quotation-headings'> Consumes alcohol </h6>
                                                {/* <h6 class='quotation-headings-values'> Yes </h6> */}
                                                <h6 class='quotation-headings-values'> {props.user.alcohol} </h6>
                                            </div>
                                        </div>


                                        <div class='row'>
                                            <div class='col-md-4' >
                                                <h6 class='quotation-headings'> Consumes tobacco </h6>
                                                {/* <h6 class='quotation-headings-values'> Yes </h6> */}
                                                <h6 class='quotation-headings-values'> {props.user.smoke} </h6>
                                            </div>

                                            <div class='col-md-4' >
                                                <h6 class='quotation-headings'> Age </h6>
                                                {/* <h6 class='quotation-headings-values'> 24 </h6> */}
                                                <h6 class='quotation-headings-values'> {calculateAge()} </h6>
                                            </div>

                                            <div class='col-md-4 align-right-2' >
                                                <h6 class='quotation-headings'> D.O.B </h6>
                                                {/* <h6 class='quotation-headings-values'> 04/04/1986 </h6> */}
                                                <h6 class='quotation-headings-values'> {props.user.dob} </h6>
                                            </div>
                                        </div>

                                    </Card.Text>
                                </Card.Body>
                        </Card>
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
                    <Button variant='primary' id='footer-next-btn' onClick={handleSendPaymentLink}> SEND PAYMENT LINK </Button>
                </div>
            </div>
        </div>

        {/* <Footer {...props} /> */}
    </>
  )
}
