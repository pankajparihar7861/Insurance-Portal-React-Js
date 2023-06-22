import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export const Expired = () => {
  return (
    <div>
        <main id="main" class="main">
    <div class="col-100">

        <h4 class="table-title">
            <a href="/Dashboard">
              <FontAwesomeIcon icon={faAngleLeft} />  &nbsp;
            </a>
            <b> Expired </b>
          </h4> &nbsp;

         <div class="filter">
              <select class="table-drop" name="dropdown" id="filter">&nbsp;&nbsp;
                 <option value="All Policies">All Policies</option>
                 <option value="Health">Health</option>
                 <option value="Documents">Documents</option>
                 <option value="Gallery">Gallery</option>&nbsp;&nbsp;
               </select> &nbsp;&nbsp;

               <select class="table-drop" name="dropdown" id="filter">&nbsp;&nbsp;
                <option value="All Policies">All Policies</option>
                <option value="Health">Health</option>
                <option value="Documents">Documents</option>
                <option value="Gallery">Gallery</option>&nbsp;&nbsp;
              </select>

           </div>
           <br/>
        <div class="card recent-sales overflow-auto">
          
           <div class="card-bod">
              
              <table class="table table-stripped table-borderless">
                 <thead>
                    <tr>
                       <th scope="col">ID</th>
                       <th scope="col">Name</th>
                       <th scope="col">Insurance</th>
                       <th scope="col">Contact</th>
                       <th scope="col">Status</th>
                       <th scope="col">Date</th>
                    </tr>
                 </thead>
                 <tr>
                   {/* <td>{{object.ID}}</td>
                   <td>{{object.Name}}</td>
                   <td>{{object.insurance}}</td>
                   <td>{{object.contact}}</td>
                   <td style="color:red">{{object.status}}</td>
                   <td>{{object.Date}} </td> */}
                   {/* <td><i class="bi bi-envelope"></i></td> */}
                 </tr>
                 <tbody>
                 </tbody> 
              </table>
           </div>
        </div>
     </div>
     </main>
     
    </div>
  )
}
