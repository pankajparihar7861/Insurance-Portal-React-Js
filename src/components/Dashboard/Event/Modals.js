import './Modal.css';
import React, { useState, useEffect } from 'react';
import { ReactMultiEmail } from 'react-multi-email';
import 'react-multi-email/dist/style.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Logo from '../../../assets/img/Wishes1.png';
import InsService from '../../../Service/InsService';
// import 'bootstrap/dist/css/bootstrap.css';

const Modals = () => {

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const [disable, setDisable] = useState(false);
  const [subMessageCount, setSubMessageCount] = useState(0)
  const [subMessageCountDisable, setSubMessageCountDisable] = useState(false)

  const [emailList, setEmailList] = useState([]);
  const [textAreaCount, setTextAreaCount] = useState(0);
  const [textAreaContent, setTextAreaContent] = useState('Happy Birthday! Wishing You many more years of good health and prosperity.')

  const [ subjectMessage, setSubjectMessage ] = useState(["Wishing You a Very Happy Birthday"]);
  
  const [emails, setEmails] = useState([
    "amit1997@gmail.com", 
    "vaishnavi21@gmail.com", 
    "ujjwalpratap2000@gmail.com", 
  ]);

  // const [focused, setFocused] = useState(false);

  useEffect(() => {
    InsService.getEmployeesWithBirthdayToday()
    .then((resp) => setEmailList(resp.data))
    .catch(err => console.log('ERROR*************', err))
  }, [])

  // HANDLE CLOSE
  //-------------
  const handleClose = () => {
    setShow(false);
    setDisable(false);
    setTextAreaCount(0);
  }

  const handleClose2 = () => {
    setShow2(false);
    setDisable(false);
    setTextAreaCount(0);
    // console.log("handleClose2");
  }
  
  // HANDEL SHOW (To view/hide specific Modals)
  //-------------------------------------------
  const handleShow = () => setShow(true);
  
  const handleShow2 = () => {

    const subject = subjectMessage;
    const body = textAreaContent;
    
    const mail = { subject, body }

    InsService.sendEmail(mail)
    .then(resp => console.log('Mail sent successfully'))
    .catch(err => console.log('Error message', err))

    // console.log("entered");
    setShow(false);
    // console.log("setshow false");
    setShow2(true);
    // console.log("setshow2 true")
  }

  // subject
  const handleSubjectMessageChange = (e) => {

    if(e.target.value > 50) {
      setSubMessageCountDisable(true)
    } else {
      setSubMessageCountDisable(false)
    }

    setSubMessageCount(e.target.value.length)
    setSubjectMessage(e.target.value)
  }

  const recalculate = (e) => {
    // console.log("event value:", e);
    setTextAreaContent(e.target.value)

    if (e.target.value.length > 250) {
      // console.log("disabled");
      setDisable(true);
    } else {
      // console.log("enabled");
      setDisable(false);
    }

    // console.log(textAreaCount);
    setTextAreaCount(e.target.value.length);
  };

  return (
    <>
      <Button id='send-wishes-btn' variant="light" onClick={handleShow}> Send Wishes </Button>

      {
        show ?
          <Modal size='lg' show={show} onHide={handleClose}>

            <Modal.Header closeButton>
              <Modal.Title className='px-3 py-1'>Send Wishes To</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form>
                
                <Form.Group className="px-3" controlId="exampleForm.ControlInput1">
                  <ReactMultiEmail
                    placeholder='Input your email'
                    emails={emailList}
                    onChange={(emails) => { 
                      setEmailList(emails);
                    }}
                    autoFocus={true}
                    // onFocus={() => setFocused(true)}
                    // onBlur={() => setFocused(false)}
                    getLabel={(email, index, removeEmail) => {
                      // console.log('mail check*********', email, email.length)
                      return (
                        index < 3 ?
                          <div data-tag key={index}>
                            <div data-tag-item>{email}</div>
                            <span data-tag-handle onClick={() => removeEmail(index)}>
                              ×
                            </span>
                          </div>
                          : (
                            index === 3
                              ?
                              <div data-tag key={index}>
                                <div data-tag-item>{"+" + (emailList.length - index) + " more"}</div>
                              </div>
                              : null
                          )
                      );
                    }}
                  />
                  <br />
                  {/* <h4>react-multi-email value</h4>
                  <h3>Focused: {focused ? 'true' : 'false'}</h3>
                  <p>{emails.join(', ') || 'empty'}</p> */}
                </Form.Group>

                <Form.Group className="mb-3 px-3" controlId="exampleForm.ControlInput1">
                  <div className=' pt-2'>
                    <Form.Label className='px-1'>Subject</Form.Label>
                    <span className='right'>{subMessageCount}/50</span>
                  </div>
                  <Form.Control
                    className='birthdayMessage'
                    type="text"
                    placeholder="Enter message"
                    value={subjectMessage}
                    onChange={handleSubjectMessageChange}
                    autoFocus
                    disabled={subMessageCountDisable}
                    required
                  />
                  <Form.Control.Feedback>Subject message shouldn't exceed 50 characters</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3 px-3" controlId="exampleForm.ControlTextarea1">
                  <div className=' pt-2'>
                    <Form.Label className='px-1'>Label</Form.Label>
                    <span className='right'>{textAreaCount}/250</span>
                  </div>

                  <Form.Control 
                     as="textarea" 
                     disabled={disable} 
                     onChange={recalculate} 
                     rows={5} 
                     value={textAreaContent} 
                  />
                </Form.Group>

              </Form>
            </Modal.Body>

            <Modal.Footer>
              <Button id='modalTwoBtn'  onClick={handleClose}> DISCARD </Button>
              <Button id='modalOneBtn'  onClick={handleShow2}> SEND </Button>
            </Modal.Footer>
          </Modal> 
        : ""
      }

      {/* INNER NESTED MODAL  */}
      {
        show2 ?
          <Modal centered size='xl bottom' show={show2} onHide={handleClose2}>
            <Modal.Body className='modalTwoBg pt-4 pb-4'>

              <div className='row right px-3'>
                <button type="button" onClick={handleClose2} className="btn-close col-12" aria-label="Close"></button>
              </div>

              <div className='row mt-4 pt-1'>

                <div className='col-5'>
                  <img src={Logo} class="rounded float-left Logo" alt="Wish sent picturee"/>
                </div>

                <div className='col-7'>
                  <Modal.Title className='modalTwoText'> Your Birthday Wishes Has Been Sent. </Modal.Title>
                  <Button className='modalOneTwo fw-bold mt-4 mb-3' variant="info" onClick={handleClose2}> Okay Thanks ! </Button>
                </div>

              </div>

            </Modal.Body>
          </Modal> 
        : ""
      }
    </>
  );
}

export default Modals;
