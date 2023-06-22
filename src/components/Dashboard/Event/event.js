import React, { useState, useEffect } from "react";
import "./event.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import ProfileImage1 from "../../../assets/img/profile-img.jpg";
import ProfileImage2 from "../../../assets/img/profile-img-2.png";
import ProfileImage3 from "../../../assets/img/profile-img-3.png";
import ProfileImage4 from "../../../assets/img/profile-img-4.jpg";
import Modals from "./Modals";
import Avatar from '@mui/material/Avatar';
import InsService from '../../../Service/InsService';

function Event() {

    const [birthdayCount, setBirthdayCount] = useState(0);

    useEffect(() => {
        InsService.getEmployeesWithBirthdayToday()
        .then((resp) => setBirthdayCount(resp.data.length))
        .catch(err => console.log('ERROR*************', err))
      }, [])

  return (

    <div className='sizing4 card pt-3 pb-3 '>
        
            <div className="row">
                <div className='col-9'> <h6 className="headertwo">Today's Events</h6> </div>
                <div class='cake-div'>
                     <FontAwesomeIcon icon={faCakeCandles} className='cake-custom-tag'/>
                </div>  
            </div>

            <div className='row avatarGroup'>
                <div className='col-6'>
                    <div className='col-4 av1 mt-4 mb-2 floatt'>
                        <Avatar  className='avatar  bg-primary'  alt="Sri" src={ProfileImage1} />
                        <Avatar className='avatar bg-warning' alt="John" src={ProfileImage3} />
                        <Avatar className='avatar bg-info' alt="Monu" src={ProfileImage2} />
                    </div>
                    <p className='text-secondary'> {birthdayCount} birthdays  today </p> &nbsp;
                </div>
                
                <div className='col-6 right px-4'>
                    <Modals />
                </div>
            </div>


            <div className='row avatarGroup'>
                <div className='col-6'>
                    <div className='av2 float'>
                        <Avatar className='avatar bg-secondary' alt="N" src={ProfileImage4} />
                    </div>
                    <p className='text-secondary'> +{1} Aniversary today</p>
                </div>

                <div className='col-6 right px-4'>
                    <Modals />
                </div>
            </div>

     </div> 
);
}

export default Event;















    // ---------------------------------------

    // <div class="col-lg-12">
    //   {/* <div class="card">
    //     <div class="card-body">
    //         <h1 class="card-title ">Today's Event 
    //         &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
    //         <FontAwesomeIcon icon={faCakeCandles}/>
    //         </h1> */}

    //   {/* Profile  */}
    //   <div class="row">
    //     <div class="card">
    //       <div class="card-body">
    //         <div class="row">
    //           <h3 class="card-title d-flex flex-nowrap mb-0">
    //             <b>Today's Event </b>
    //             <FontAwesomeIcon icon={faCakeCandles} className="wish-icon" />
    //           </h3>
    
    //           <div class="event">
    //             <div class="event-details">
    //               <div class="event-name">                  
    //                 <img src={ProfileImage} class="rounded-circle" alt="" />

    //                 <img src={ProfileImage} class="rounded-circle" alt="" />

    //                 <img src={ProfileImage} class="rounded-circle" alt="" /> 
    //               </div><br/> <br />
    //                 <div class="sub-title">+11 Birthdays</div>  
    //             </div>
                
    //             <div class="btn-wish">
                   
    //               <button class="send-wish-btn" onClick={handleClick} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    //                 Send wishes
    //               </button>
                  
    //             </div>
               
    //           </div>
             
    //           <div class="event">
                
    //             <div class="event-details">
                   
    //               <div class="event-name">
                   
    //                 <img src={ProfileImage} class="rounded-circle" alt="" /> 
                   
    //               </div><br/> <br />
    //               <div class="sub-title">1 Anniversary today</div>
                  
    //             </div>
                
    //             <div class="btn-wish">
                   
    //               <button class="send-wish-btn" onClick={handleClick} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    //                 Send wishes
    //               </button>
                  
    //             </div>
               
    //           </div>
             
    //         </div>
             
    //       </div>
          
    //     </div>
    //   </div>

    //   {/* MODAL  */}
    //   <div
    //     class="modal fade"
    //     id="staticBackdrop"
    //     data-bs-backdrop="static"
    //     data-bs-keyboard="false"
    //     tabindex="-1"
    //     aria-labelledby="staticBackdropLabel"
    //     aria-hidden="true"
    //   >
    //     <div class="modal-dialog">
    //       <div class="modal-content">
    //         <div class="modal-header">
    //           <button
    //             type="button"
    //             class="btn-close"
    //             data-bs-dismiss="modal"
    //             aria-label="Close"
    //           ></button>
    //         </div>
    //         <div class="modal-body">
    //           <div class="">
    //             <div class="">
    //               <form class="row g-3">
    //                 <div class="col-12">
    //                   <label for="inputNanme4" class="form-label">
    //                     To
    //                   </label>
    //                   <input
    //                     type="text"
    //                     class="form-control"
    //                     id="inputNanme4"
    //                     value="john.samuel@gmail.com"
    //                   />
    //                 </div>
    //                 <div class="col-12">
    //                   <input
    //                     type="text"
    //                     class="form-control"
    //                     id="inputNanme4"
    //                     value="Wishing You a Very Happy Birthday"
    //                   />
    //                 </div>
    //                 <div class="col-12">
    //                   <label for="inputPassword4" class="form-label">
    //                     Label
    //                   </label>
    //                   <textarea
    //                     type="text"
    //                     class="form-control"
    //                     id="inputPassword4"
    //                     style={{ height: "100px" }}
    //                   >
    //                     Happy Birthday..! Wishing you a many more happy returns
    //                     of the day..!
    //                   </textarea>
    //                 </div>
    //               </form>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="modal-footer">
    //           <button
    //             type="button"
    //             class="btn btn-secondary"
    //             data-bs-dismiss="modal"
    //           >
    //             Discard
    //           </button>
    //           <button type="button" class="btn btn-primary">
    //             Send
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* <button
    //     class="btn btn-lg btn-outline-primary"
    //     data-bs-toggle="modal"
    //     data-bs-target="#staticBackdrop"
    //   >
    //     Send Wishes
    //   </button> */}
    // </div>


