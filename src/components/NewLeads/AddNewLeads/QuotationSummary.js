import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { AiOutlineLeft } from 'react-icons/ai'
import { FiEdit3 } from 'react-icons/fi'
import { MdOutlineWifiCalling3 } from 'react-icons/md'
import { CiMail } from 'react-icons/ci'
import { FaRegCheckCircle } from 'react-icons/fa'

export const QuotationSummary = () => {

const navigate = useNavigate()
 
const location  = useLocation()
const data = location.state

const [date] = useState(new Date().toISOString().substring(0, 10));

  return (

    <main id='main'>

        <h5 class='mb-3'> <AiOutlineLeft onClick={() => navigate('/Dashboard')} style={{cursor: 'pointer'}} /> Quotation Summary </h5>

        <div clas='row'>

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

                    {/* CARD-2  */}
                    <div class='col-md-12'>

                        <div class='row'>

                            <div class='col-md-12 mb-5'>
                                <Card bg='Light' text='' className='quotation-card'>
                                        <Card.Body>

                                        <Card.Title> 
                                            <FaRegCheckCircle id='check-circle' />
                                            <span id='notification-title'> Applicant has been sent for review </span>
                                            <p id='notified-text'> You will get notified once the application is reviewed </p>

                                             <span class='align-icons'>
                                                <FiEdit3 class='edit-icon-q' />
                                                <MdOutlineWifiCalling3 class='calling-icon-q' />
                                                <CiMail class='mail-icon-q' />
                                             </span>
                                        </Card.Title>

                                            <Card.Text>
                                                <table class='table table-borderless summary-table'>
                                                    <tbody>
                                                        <tr> 
                                                            <td class='headings-summary'> Application no. </td> 
                                                            <td class='values-summary'> 55343766 </td> 
                                                        </tr>
                                                        <tr> 
                                                            <td class='headings-summary'> Product Name </td> 
                                                            <td class='values-summary'> CG Protect </td> 
                                                        </tr>
                                                        <tr> 
                                                            <td class='headings-summary'> Applicant's Name </td> 
                                                            {/* <td class='values-summary'> John Smith </td>  */}
                                                            <td class='values-summary'> {data.firstname} {data.lastname} </td> 
                                                        </tr>
                                                        <tr> 
                                                            <td class='headings-summary'> Address </td> 
                                                            {/* <td class='values-summary'> 1533, Mccandless, Miliptas </td>  */}
                                                            <td class='values-summary'> {data.address} </td> 
                                                        </tr>
                                                        <tr> 
                                                            <td class='headings-summary'> Email </td>
                                                            {/* <td class='values-summary'> John.smith@xyz.com </td> */}
                                                            <td class='values-summary'> {data.email} </td>
                                                        </tr>
                                                        <tr> 
                                                            <td class='headings-summary'> Status </td> 
                                                            <td class='values-summary'> 
                                                                <span id='uw-process'> UW PROCESS </span>
                                                            </td> 
                                                        </tr>
                                                        <tr> 
                                                            <td class='headings-summary'> Submission Date </td> 
                                                            {/* <td class='values-summary'> 01/02/2014 </td>  */}
                                                            <td class='values-summary'> {date} </td> 
                                                        </tr>
                                                     </tbody>
                                                </table>
                                            </Card.Text>
                                        </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </main>
  )
}
















































 {/* <h5 
                                                style={{marginLeft: '40px', marginBottom: '20px'}} class='quotation-headings-summary'> Application no. 
                                                   <span style={{marginLeft: '117px'}} class='quotation-headings-values-summary'> 55343766 </span> 
                                                </h5> 

                                                <h5 style={{marginLeft: '40px', marginBottom: '20px'}} class='quotation-headings-summary'> Product Name 
                                                   <span style={{marginLeft: '120px'}} class='quotation-headings-values-summary'> CG Protect </span> 
                                                </h5> 

                                                <h5 style={{marginLeft: '40px', marginBottom: '20px'}} class='quotation-headings-summary'> Applicant's Name 
                                                   <span style={{marginLeft: '97px'}} class='quotation-headings-values-summary'> John Smith </span> 
                                                </h5> 

                                                <h5 style={{marginLeft: '40px', marginBottom: '20px'}} class='quotation-headings-summary'> Address
                                                   <span style={{marginLeft: '170px'}} class='quotation-headings-values-summary'> 1533, Mccandless, Miliptas </span> 
                                                </h5> 

                                                <h5 style={{marginLeft: '40px', marginBottom: '20px'}} class='quotation-headings-summary'> Email 
                                                   <span style={{marginLeft: '195px'}} class='quotation-headings-values-summary'> 
                                                   John.smith@xyz.com </span> 
                                                </h5> 

                                                <h5 style={{marginLeft: '40px', marginBottom: '20px'}} class='quotation-headings-summary'> Status 
                                                   <span  class='quotation-headings-values-summary uv-process'> 
                                                      UW PROCESS
                                                   </span> 
                                                </h5> 

                                                <h5 style={{marginLeft: '40px', marginBottom: '20px'}} class='quotation-headings-summary'> Submission Date
                                                   <span style={{marginLeft: '100px'}} class='quotation-headings-values-summary'> 01/02/2014 </span> 
                                                </h5>  */}
