import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { FaBaby, FaFemale, FaUserFriends } from 'react-icons/fa';
import { ImMan } from 'react-icons/im'
import { BsThreeDots } from 'react-icons/bs'
import { Footer } from './Footer';
import './AddNewLeadForm.css'

const initialState = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    dob: '',
    pincode: '',
    gender: '',
    smoke: '',
    alcohol: '',
    address: '',
    dependants: ''
}

export const PersonalDetails = (props) => {

 const [personalDetailsObj, setPersonalDetailsObj] = useState(initialState);

//  const [date, setDate] = useState(new Date(2021, 9, 2, 10, 33, 30).toISOString().substring(0, 10));
 const [date, setDate] = useState(new Date().toISOString().substring(0, 10));

//  useEffect(() => {
//     setPersonalDetailsObj({...personalDetailsObj, dob: date, phone: '+91-'})
//     setPersonalDetailsObj({...personalDetailsObj, phone: '+91-'})
//  }, [])

 const handleChange = (e) => {
   let name = e.target.name
   let value = e.target.value
   setPersonalDetailsObj({...personalDetailsObj, [name]: value})
 }

 const handleNextPageMove = () => {
    props.userCallback(personalDetailsObj)
    props.nextStep()  
 }

  return (
    <>
        <div class='row top-margin'>

            <div class='col-md-9'>

                <div class='row'>

                    <div class='col-md-6 mb-5'>
                        <Form>
                            <Form.Group>
                                <Form.Label class='label-design'> First Name </Form.Label>
                                <Form.Control 
                                    id='input-design' 
                                    name='firstname'
                                    type="input" 
                                    // placeholder="Will"
                                    value={personalDetailsObj.firstname}
                                    onChange={handleChange}
                                 />
                            </Form.Group>
                        </Form>
                    </div>

                    <div class='col-md-6 mb-5'>
                        <Form>
                            <Form.Group>
                                <Form.Label class='label-design'> Last Name </Form.Label>
                                <Form.Control 
                                   id='input-design' 
                                   name='lastname' 
                                   type="input" 
                                //    placeholder="Smith" 
                                   value={personalDetailsObj.lastname}
                                   onChange={handleChange}
                                />
                            </Form.Group>
                        </Form>
                    </div>

                    <div class='col-md-6 mb-5'>
                        <Form>
                            <Form.Group>
                                <Form.Label class='label-design'> Phone Number </Form.Label>
                                <Form.Control 
                                    id='input-design' 
                                    name='phone' 
                                    // type="number" 
                                    type="input" 
                                    // placeholder="+91-677754443" 
                                    value={personalDetailsObj.phone}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Form>
                    </div>

                    <div class='col-md-6 mb-5'>
                        <Form>
                            <Form.Group>
                                <Form.Label class='label-design'> Email Address </Form.Label>
                                <Form.Control 
                                   id='input-design' 
                                   name='email' 
                                   type="email" 
                                //    placeholder="Smith@xyz.com" 
                                   value={personalDetailsObj.email}
                                   onChange={handleChange}
                                />
                            </Form.Group>
                        </Form>
                    </div>

                    <div class='col-md-6 mb-5'>
                        <Form>
                            <Form.Group>
                                <Form.Label class='label-design'> Date of Birth </Form.Label>
                                <Form.Control 
                                   id='dob-input-design' 
                                   name='dob' 
                                   type="date" 
                                   value={personalDetailsObj.dob} 
                                //    onChange={(e) => setDate(e.target.value)} 
                                   onChange={handleChange} 
                                />
                            </Form.Group>
                        </Form>
                    </div>

                    <div class='col-md-6 mb-5'>
                        <Form>
                            <Form.Group>
                                <Form.Label class='label-design'> Pincode </Form.Label>
                                <Form.Control 
                                   id='input-design' 
                                   name='pincode'
                                   type="number" 
                                //    placeholder="93503" 
                                   value={personalDetailsObj.pincode}
                                   onChange={handleChange}
                                />
                            </Form.Group>
                        </Form>
                    </div>


                    {/* Gender  */}
                    <div class='col-md-8 mb-5'>
                        <Form>
                            <Form.Group>
                                <Form.Label class='label-design'> Gender </Form.Label> <br />

                                <Form.Check 
                                    inline 
                                    label={<b> Male </b>} 
                                    name="gender" 
                                    type='radio' 
                                    id='radio-label-gap'
                                    value='male' 
                                    onChange={handleChange}
                                />
                                <span class='radio-options-gap'/>

                                <Form.Check 
                                   inline 
                                   label={<b> Female </b>} 
                                   name="gender" 
                                   type='radio' 
                                   id='radio-label-gap'
                                   value='female' 
                                   onChange={handleChange}
                                />
                                <span class='radio-options-gap'/>

                                <Form.Check 
                                   inline 
                                   label={<b> Transgender </b>} 
                                   name='gender' 
                                   type='radio' 
                                   id='radio-label-gap'
                                   value='transgender' 
                                   onChange={handleChange}
                                />
                            </Form.Group>
                        </Form>
                    </div>


                    {/* Do you smoke? Do you consume alchohal? */}
                    <div class='col-md-12 mb-5'>
                       <div class='row'>
                            <div class='col-md-4 gap-design'>
                                <Form>
                                    <Form.Group>
                                        <Form.Label class='label-design'> Do you smoke? </Form.Label> <br/>
                                        
                                        <div id='btn-position'>
                                            <Button variant="primary" id='btn-design-1' value='YES' name='smoke'
                                              onClick={handleChange}> Yes </Button>

                                            <Button variant="primary" id='btn-design-2' value='NO' name='smoke'
                                              onClick={handleChange}> No </Button>
                                        </div>
                                    </Form.Group>
                               </Form>
                            </div>

                            <div class='col-md-6'>
                                <Form>
                                    <Form.Group>
                                        <Form.Label class='label-design'> Do you consume alcohol? </Form.Label> <br/>
                                        
                                        <div id='btn-position'>
                                            <Button variant="primary" id='btn-design-1' value='YES' name='alcohol'
                                              onClick={handleChange}> Yes </Button>

                                            <Button variant="primary" id='btn-design-2' value='NO' name='alcohol'
                                              onClick={handleChange}> No </Button>
                                        </div>
                                    </Form.Group>
                               </Form>
                            </div>
                       </div>
                    </div>


                    {/* ADDRESS AND DATE OF BIRTH */}
                    <div class='col-md-12 mb-5'>
                        <div class='row'>
                            <div class='col-md-4 gap-design'>
                                <Form>
                                    <Form.Group>
                                        <Form.Label class='label-design'> Address </Form.Label>
                                        <Form.Control 
                                           as="textarea" 
                                           rows={8} 
                                           id='textarea-design' 
                                        //    placeholder="1533, Mccandless, Miliptas" 
                                           name='address'
                                           value={personalDetailsObj.address}
                                           onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Form>
                            </div>

                            <div class='col-md-6'>
                                <Form>
                                    <Form.Group>
                                        <Form.Label class='label-design'> Date of Birth </Form.Label>
                                        <Form.Control id='dob-input-design' type="date" value={date} 
                                        onChange={(e) => setDate(e.target.value)} />
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>
                    </div>


                    {/* DEPENDATNST  */}
                    <div class='col-md-8 mb-5'>

                         <Form>
                            <Form.Group>
                                <Form.Label class='label-design mb-3'> Add Dependants </Form.Label>
                            </Form.Group>
                         </Form>  

                        <div class='row'>

                            <div class='col-md-2'
                                 onClick={() => setPersonalDetailsObj({...personalDetailsObj, dependants: 'Spouse'})}>
                                <Card bg='Light' text='' className="mb-2 dependants-cards">
                                    <Card.Body>
                                        <Card.Text>
                                          <FaUserFriends class='couple-icon' />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <b class='cards-label'> Spouse </b>
                            </div>

                            <div class='col-md-2'
                                 onClick={() => setPersonalDetailsObj({...personalDetailsObj, dependants: 'Mother'})}>
                                <Card bg='Light' text='' className="mb-2 dependants-cards">
                                    <Card.Body>
                                        <Card.Text>
                                          <FaFemale class='mom-icon' />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <b class='cards-label'> Mother </b>
                            </div>

                            <div class='col-md-2'
                                 onClick={() => setPersonalDetailsObj({...personalDetailsObj, dependants: 'Father'})}>
                                <Card bg='Light' text='' className="mb-2 dependants-cards">
                                    <Card.Body>
                                        <Card.Text>
                                           <ImMan class='dad-icon' />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <b class='cards-label-father'> Father </b>
                            </div>

                            <div class='col-md-2'
                                 onClick={() => setPersonalDetailsObj({...personalDetailsObj, dependants: 'Child'})}>
                                <Card bg='Light' text='' className="mb-2 dependants-cards">
                                    <Card.Body>
                                        <Card.Text>
                                           <FaBaby class='baby-icon' />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <b class='cards-label-child'> Child </b>
                            </div>

                            <div class='col-md-2' 
                                 onClick={() => setPersonalDetailsObj({...personalDetailsObj, dependants: 'Other'})}>

                                <Card bg='Light' text='' className="mb-2 dependants-cards">
                                    <Card.Body>
                                        <Card.Text>
                                          <BsThreeDots class='three-dots' />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <b class='cards-label-other'> Other </b>
                            </div>

                            <div class='col-md-2'>
                              <Button variant="primary" id='dependants-btn'> + ADD </Button>
                            </div>
                        </div>
                    </div> {/* DEPENDATIST ends  */}

                    <span class='footer-margin-top' />
                </div>
            </div>
        </div> {/* row ends here */}


        {/* Footer with new row  */}
        {/* ----------------------------- */}
        <div class='footer-btn fixed-bottom'>  
            <div class='row'>
                <div class='col-md-6'>
                    <Button variant='primary' id='footer-back-btn' disabled> BACK </Button>
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
