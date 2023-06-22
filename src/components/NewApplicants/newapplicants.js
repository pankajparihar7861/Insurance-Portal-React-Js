import React from 'react'
import './newapplicants.css'

export const NewApplicants = () => {

  const viewAll = () => {

  }

  return (
    <div>
      <div class="col-md-12">
   <div class="card recent-sales overflow-auto">
      <div class="filter">
         <a class="in" href='#' onClick={viewAll}> View All </a>
         <select class="table-drop" name="dropdown" id="filter">&nbsp;&nbsp;
            <option value="All Policies">All Policies</option>
            <option value="Health">Health</option>
            <option value="Documents">Documents</option>
            <option value="Gallery">Gallery</option>&nbsp;&nbsp;
          </select>
      </div>
      <div class="card-bod">
         <h5 class="table-title">18 New Applicants</h5>
         
         <table class="table table-stripped table-borderless">
            <thead>
               <tr>
                  <th scope="col">#</th>
                  <th scope="col">Policy Owner</th>
                  <th scope="col">Prd Type</th>
                  <th scope="col">Date</th>
                  <th scope="col">Status</th>
               </tr>
            </thead>
            
            <tbody>
               <tr>
                  <th scope="row"><a href="#">DC03</a></th>
                  <td>Isaiah Howard</td>
                  <td><a href="#" class="text-primary">Life Protect </a></td>
                  <td>12-30-2021</td>
                  <td>UW</td>
               </tr>
               <tr>
                <th scope="row"><a href="#">DC03</a></th>
                <td>Isaiah Howard</td>
                <td><a href="#" class="text-primary">Life Protect </a></td>
                <td>12-30-2021</td>
                <td>UW</td>
             </tr>
             <tr>
                <th scope="row"><a href="#">DC03</a></th>
                <td>Isaiah Howard</td>
                <td><a href="#" class="text-primary">Life Protect </a></td>
                <td>12-30-2021</td>
                <td>UW</td>
             </tr>
             <tr>
                <th scope="row"><a href="#">DC03</a></th>
                <td>Isaiah Howard</td>
                <td><a href="#" class="text-primary">Life Protect </a></td>
                <td>12-30-2021</td>
                <td>UW</td>
             </tr>
             <tr>
                <th scope="row"><a href="#">DC03</a></th>
                <td>Isaiah Howard</td>
                <td><a href="#" class="text-primary">Life Protect </a></td>
                <td>12-30-2021</td>
                <td>UW</td>
             </tr>
             <tr>
                <th scope="row"><a href="#">DC03</a></th>
                <td>Isaiah Howard</td>
                <td><a href="#" class="text-primary">Life Protect </a></td>
                <td>12-30-2021</td>
                <td>UW</td>
             </tr>
            </tbody> 
         </table>
      </div>
   </div>
</div>

 </div>
  )
}
