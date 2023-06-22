import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { FaFolderPlus } from 'react-icons/fa'
import { AiFillCamera } from 'react-icons/ai'
import { Footer } from './Footer'

const initialState = {
    documentIdProof: ''
}

export const Documents = (props) => {

  const [documents, setDocuments] = useState(initialState)

  const handleNextPageMove = () => {
    props.userCallback(documents)
    props.nextStep()
  }

  return (
    <>
        <h6 class='mb-3'> YOUR PROOF </h6>   

         <div class='row top-margin'>

            <div class='col-md-10'>

                <div class='row'>

                    <div class='col-md-6'>
                        <h6 class='mb-3'> Upload Identity Proof </h6>
                        <Card bg='Light' text='' className='documents-card'>
                            <Card.Body>
                                <Card.Text>
                                    <div class='file-border' >
                                        <AiFillCamera id='cam-icon'/>
                                        <FaFolderPlus id='gallery-icon'/>
                                        <h6 class='upload-image-text'> Upload image from gallery </h6>
                                    </div>
                                </Card.Text>
                            </Card.Body>

                            <Card.Footer className="card-footer-design">
                              <input type="file" 
                                     class="form-control" 
                                     id="inputGroupFile02" 
                                     value={documents.documentIdProof} 
                                     onChange={(e) => setDocuments(e.target.value)} />
                            </Card.Footer>
                        </Card>
                    </div>

                    <div class='col-md-6 mb-5'>
                        <h6 class='mb-3'> Upload Financial Proof </h6>
                        <Card bg='Light' text='' className='documents-card'>
                            <Card.Body>
                                <Card.Text>
                                    <div class='file-border card-height' >
                                        <AiFillCamera id='cam-icon'/>
                                        <FaFolderPlus id='gallery-icon'/>
                                        <h6 class='upload-image-text'> Upload image from gallery </h6>
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
                    <Button variant='primary' id='footer-next-btn' onClick={handleNextPageMove}> NEXT </Button>
                </div>
            </div>
        </div>

        {/* <Footer {...props}/> */}
    </>
  )
}
