import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Catalogue.css'
import { Card, Button, Form } from 'react-bootstrap';
import { MdFlight } from 'react-icons/md'
import { TbActivityHeartbeat } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiHome } from 'react-icons/fi'
import { BsShield } from 'react-icons/bs'
import { FaCat, FaCarSide } from 'react-icons/fa'
import { TfiArrowCircleDown } from 'react-icons/tfi'


export const Catalogue = () => {

  const navigate = useNavigate()

  const [showInfo, setShowInfo] = useState(false)
  const [compareFlag, setCompareFlag] = useState(false)
  const [healthCard, setHealthCard] = useState(false)

  const [arrowOne, setArrowOne] = useState(false)
  const [arrowTwo, setArrowTwo] = useState(false)
  const [arrowThree, setArrowThree] = useState(false)
  const [arrowFour, setArrowFour] = useState(false)

  const handleCardOneClick = () => {
    setShowInfo(!showInfo)
    setArrowOne(!arrowOne)
    setArrowTwo(false)
    setArrowThree(false)
    setArrowFour(false)
  }

  const handleCardTwoClick = () => {
    setShowInfo(!showInfo)
    setArrowOne(false)
    setArrowTwo(!arrowTwo)
    setArrowThree(false)
    setArrowFour(false)
  }

  const handleCardThreeClick = () => {
    setShowInfo(!showInfo)
    setArrowOne(false)
    setArrowTwo(false)
    setArrowThree(!arrowThree)
    setArrowFour(false)
  }

  const handleCardFourClick = () => {
    setShowInfo(!showInfo)
    setArrowOne(false)
    setArrowTwo(false)
    setArrowThree(false)
    setArrowFour(!arrowFour)
  }

  const handleHealthInsuranceCard = () => {
    setHealthCard(!healthCard)
  }

  const handleProductView = () => {
    navigate('/CGProtectProduct')
  }

  return (
    <>
        <main id='main-product'>
           
            <section id="hero" class="d-flex align-items-center">
                <div class="container">
                    <h1> Product Catalogue </h1>
                    <h2> Select a Product Category to view plans </h2>

                    {/* SEARCH-BAR  */}
                    <div>
                      <form class='search-form d-flex align-items-center' method='POST' action='#'>
                        <input type='text' name='query' placeholder='Search Product' title='Enter search keyword' />
                        <Button id='search-btn'> SEARCH </Button>
                      </form>
                   </div>
          
                </div>
                <br />
            </section>


            {/* ROW-1  */}
            <div class='row mx-5'>

              <div class='col-md-10'>

                <div class='row'>

                  <div class='col-md-2'>
                    <Card bg='Light' text='' id='card-design-1'>
                        <Card.Body>
                            <Card.Text>
                                <MdFlight class='flight-icon' />
                                <div class='card-icon-text'>
                                  <div> Travel  </div>
                                  <div> Insurance </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                  </div>

                  <div class='col-md-2'>
                    <Card bg='Light' text='' id='card-design' onClick={handleHealthInsuranceCard}>
                        <Card.Body>
                            <Card.Text>
                                <TbActivityHeartbeat class='card-icon' />
                                <div class='card-icon-text'>
                                  <div> Health  </div>
                                  <div> Insurance </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                  </div>

                  <div class='col-md-2'>
                    <Card bg='Light' text='' id='card-design'>
                        <Card.Body>
                            <Card.Text>
                                <AiOutlineHeart class='card-icon' />
                                <div class='card-icon-text'>
                                  <div> Life  </div>
                                  <div> Insurance </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                  </div>

                  <div class='col-md-2'>
                    <Card bg='Light' text='' id='card-design'>
                        <Card.Body>
                            <Card.Text>
                                <FiHome class='card-icon' />
                                <div class='card-icon-text'>
                                  <div> Home  </div>
                                  <div> Insurance </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                  </div>

                  <div class='col-md-2'>
                    <Card bg='Light' text='' id='card-design'>
                        <Card.Body>
                            <Card.Text>
                                <FaCarSide class='card-icon' />
                                <div class='card-icon-text'>
                                  <div> Car  </div>
                                  <div> Insurance </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                  </div>

                  <div class='col-md-2'>
                    <Card bg='Light' text='' id='card-design'>
                        <Card.Body>
                            <Card.Text>
                                <FaCat class='card-icon' />
                                <div class='card-icon-text'>
                                  <div> Pet  </div>
                                  <div> Insurance </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </div>



            {/* ROW-2  */}
            <div class='row mx-5'>
               <div class='col-md-12'>
                  <div class='row'>
                     <div class='insurance-text'>
                       <h6> Trending Insurance plans </h6>
                       <p> Insurance Plans and Policies by CG Insurance </p>
                     </div>

                     <div>
                       <Button variant='primary' 
                               id={compareFlag ? 'compare-btn-clicked' : 'compare-btn'} 
                               onClick={() => setCompareFlag(!compareFlag)}
                        > 
                         { compareFlag ? 'CANCEL' : 'COMPARE' }
                       </Button>
                     </div>
                  </div>
               </div>
            </div>


            {/* ROW-3 (4 EQUAL PRODUCT CARDS) */}
            <div class='row mx-5 row-3-design'>
                <div class='col-md-12'>
                    <div class='row'>

                        {/* CARD-1  */}
                        <div class='col-md-3 card-1-alignment'>
                            <Card bg='Light' text='' id='big-card-design-1' onClick={handleCardOneClick}>
                              <Card.Body>
                                  <Card.Text>
                                      <div class='inner-card'>

                                       {
                                        compareFlag && <Form.Check />
                                       }
                                      
                                        <div class='inner-card-icons-1'>
                                          <i class="bi bi-whatsapp wa-design-1"></i>
                                          <i class="bi bi-share-fill share-design-1"></i>
                                        </div>
                                       
                                        <h5 class='product-header'> CG Protect </h5>
                                        
                                        <div class='product-content'>
                                          <div> With the world in the </div>
                                          <div> midst of a pandemic, </div>
                                          <div> you're having to deal with </div>
                                          <div> increased uncertainities </div>
                                          <div> on a daily basis </div>
                                        </div>
                                      </div>
                                  </Card.Text>

                                  <div class='card-btns'>
                                     <Button id='view-btn' onClick={handleProductView}> VIEW </Button>
                                     <Button id='get-quote-btn-1'> GET QUOTE </Button>
                                  </div>
                              </Card.Body>
                           </Card>

                           {
                             arrowOne ?  <TfiArrowCircleDown id='arrow-down' />: ' '
                           }
                        </div>

                         {/* CARD-2  */}
                         <div class='col-md-3'>
                            <Card bg='Light' text='' id='big-card-design' onClick={handleCardTwoClick}>
                              <Card.Body>
                                  <Card.Text>
                                      <div class='inner-card'>

                                        {
                                          compareFlag && <Form.Check />
                                        }

                                        <div class='inner-card-icons'>
                                          <i class="bi bi-whatsapp wa-design"></i>
                                          <i class="bi bi-share-fill share-design"></i>
                                        </div>
                                       
                                        <h5 class='product-header'> 
                                          {
                                            healthCard ? 'CG Mediclaim' : 'CG Travel X'
                                          }
                                        </h5>
                                        <div class='product-content'>
                                          <div> With the world in the </div>
                                          <div> midst of a pandemic, </div>
                                          <div> you're having to deal with </div>
                                          <div> increased uncertainities </div>
                                          <div> on a daily basis </div>
                                        </div>
                                      </div>
                                  </Card.Text>

                                  <div class='card-btns'>
                                     <Button id='view-btn'> VIEW </Button>
                                     <Button id='get-quote-btn'> GET QUOTE </Button>
                                  </div>
                              </Card.Body>
                           </Card>

                           {
                             arrowTwo ?  <TfiArrowCircleDown id='arrow-down' />: ' '
                           }
                        </div>

                         {/* CARD-3  */}
                         <div class='col-md-3'>
                            <Card bg='Light' text='' id='big-card-design' onClick={handleCardThreeClick}>
                              <Card.Body>
                                  <Card.Text>
                                      <div class='inner-card'>
                                        
                                        {
                                          compareFlag && <Form.Check />
                                        }

                                        <div class='inner-card-icons'>
                                          <i class="bi bi-whatsapp wa-design"></i>
                                          <i class="bi bi-share-fill share-design"></i>
                                        </div>
                                       
                                        <h5 class='product-header'> 
                                          {
                                            healthCard ? 'Covid Care' : 'Covid Protect'
                                          }
                                        </h5>

                                        <div class='product-content'>
                                          <div> With the world in the </div>
                                          <div> midst of a pandemic, </div>
                                          <div> you're having to deal with </div>
                                          <div> increased uncertainities </div>
                                          <div> on a daily basis </div>
                                        </div>
                                      </div>
                                  </Card.Text>

                                  <div class='card-btns'>
                                     <Button id='view-btn'> VIEW </Button>
                                     <Button id='get-quote-btn'> GET QUOTE </Button>
                                  </div>
                              </Card.Body>
                           </Card>

                           {
                             arrowThree ?  <TfiArrowCircleDown id='arrow-down' />: ' '
                           }
                        </div>


                         {/* CARD-4  */}
                         <div class='col-md-3'>
                            <Card bg='Light' text='' id='big-card-design' onClick={handleCardFourClick}>
                              <Card.Body>
                                  <Card.Text>
                                      <div class='inner-card'>

                                         {
                                           compareFlag && <Form.Check />
                                         }

                                        <div class='inner-card-icons'>
                                          <i class="bi bi-whatsapp wa-design"></i>
                                          <i class="bi bi-share-fill share-design"></i>
                                        </div>
                                       
                                        <h5 class='product-header'>
                                          {
                                            healthCard ? 'Life Protect' : 'Travel Sure'
                                          } 
                                        </h5>
                                        <div class='product-content'>
                                          <div> With the world in the </div>
                                          <div> midst of a pandemic, </div>
                                          <div> you're having to deal with </div>
                                          <div> increased uncertainities </div>
                                          <div> on a daily basis </div>
                                        </div>
                                      </div>
                                  </Card.Text>

                                  <div class='card-btns'>
                                     <Button id='view-btn'> VIEW </Button>
                                     <Button id='get-quote-btn'> GET QUOTE </Button>
                                  </div>
                              </Card.Body>
                           </Card>

                           {
                             arrowFour ?  <TfiArrowCircleDown id='arrow-down' />: ' '
                           }
                        </div>

                    </div>
                </div>
            </div>


            {/* PRODUCT DETAILED INFORMATION WITH HIDE AND SHOW BY CLICKING ON SPECIFIC CARD  */}
            {
                showInfo ?
                <div class='row mx-5 show-hide-info-card'>
                <div class='col-md-12'>
                  <div class='mx-2'>
                    <Card id='info-card'>
                      <Card.Body>
                        <Card.Text>
                          <h3 class='benefits'> Benefits </h3>

                          <div class='info-font-style'>
                              <p> 
                                  <BsShield /> &nbsp;
                                    Get Fixed lump sum payout irrespective of the actual expenses incurred for diagnosis/procedure.
                              </p>
                              <p> 
                                  <BsShield /> &nbsp; 
                                    Make Multiple Claims for same or different conditions or procedures.
                              </p>
                              <p> 
                                <BsShield /> &nbsp; 
                                  Indexation benefit to stay ahead of medical inflation. 
                              </p>
                          </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div> : ''
            }

        </main>
    </>
  )
}
