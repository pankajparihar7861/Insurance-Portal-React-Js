import React, { useState, useEffect } from 'react'
import  AllSales  from './AllSales/allsales'
import Event from './Event/event'
import { NewApplicants } from '../NewApplicants/newapplicants'
import { Schedule } from '././Schedule/schedule'
import { TotalSellingProducts } from '././TopSellingProducts/tsp'
import { useNavigate } from 'react-router-dom'
import InsService from '../../Service/InsService'
// import './Dashborad.css'
// import '../../assets/css/style.css'

export const Dashboard = () => {

  const [employeesList, setEmployeesList] = useState([])

   useEffect(() => {
      InsService.findAllEmployee()
      .then((resp) => setEmployeesList(resp.data))
      .catch(err => 'ERROR IN FETCH ALL EMPLOYEES >> ' + err)
    }, [])

   const navigate = useNavigate();

   const handleNewLeadsNavigate = () => {
      navigate("/NewLeads")
   }

   const handleRenewalNavigate = () => {
      navigate('/Renewal')
   }

   const handleExpiredNavigate = () => {
      navigate('/Expired')
   }

  return (
    <>
      <main id="main" class="main">
         <section class="section dashboard">

            <h6 style={{marginLeft: '5px'}}> Dashboard </h6> &nbsp;

            <div class="row">

               <div class="col-md-8">
                  
                  <div class="row">

                     {/* NEW LEADS  */}
                     <div class="col-xxl-4 col-md-3">
                        <div class="card info-card sales-card" onClick={handleNewLeadsNavigate}>
                           <div class="card-body">
                              <div class="d-flex align-items-center mt-3">
                                 <img src="https://img.icons8.com/fluency-systems-filled/48/21E2AF/chart-arrow-rise.png"
                                    class="icon-img" alt='' />
                                 <div class="ps-0">
                                    <h6 class="lead-n"> 
                                        { employeesList.length > 9 ? employeesList.length : '0' + employeesList.length } 
                                    </h6>
                                    <span class="large pt-2 ps-1 exp">
                                          New Leads
                                    </span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     {/* TOTAL CLAIMS  */}
                     <div class="col-xxl-4 col-md-3">
                        <div class="card info-card sales-card">
                           <div class="card-body">
                              <div class="d-flex align-items-center mt-3">
                                 <i class="bi bi-file-earmark-check icon-bi"></i>
                                 <div class="ps-0">
                                    <h6 class="claim-n">06</h6>
                                    <span class="large pt-2 ps-1 exp">
                                       Total claims
                                    </span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* RENEWAL  */}
                     <div class="col-xxl-4 col-md-3" >
                        <div class="card info-card sales-card" onClick={handleRenewalNavigate}>
                           <div class="card-body">
                              <div class="d-flex align-items-center mt-3">
                                 <img src="https://img.icons8.com/ios/50/FF6968/synchronize.png" class="icon-img" alt=''/>
                                 <div class="ps-0">
                                    <h6 class="renewal-n">08</h6>
                                    <span class="large pt-2 ps-1 exp">
                                       Renewal
                                    </span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     {/* EXPIRED  */}
                     <div class="col-xxl-4 col-md-3">
                        <div class="card info-card sales-card" onClick={handleExpiredNavigate}>
                           <div class="card-body">
                              <div class="d-flex align-items-center mt-3">
                                 <i class="bi bi-file-earmark icon-bi"></i>
                                 <div class="ps-0">
                                    <h6 class="expired-n">02</h6>
                                    <span class="large pt-2 ps-1 exp">
                                       Expired
                                    </span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div>
                        <NewApplicants />
                     </div>

                     <div>
                        <AllSales />
                     </div>
                     
                  </div>
               </div>

               <div class="col-lg-4">
                  <div class="col-lg-12">
                     <TotalSellingProducts />
                  </div>

                  <div class="col-lg-12">
                     <Schedule />
                  </div>
                  
                  <div class="col-lg-12">
                     <Event />
                  </div>
               </div>

            </div>

         </section>
       </main>
    </>
  )
}


            