import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import InsService from '../../Service/InsService'
import Avatar from '@mui/material/Avatar';
import NewLeadsImage from '../../assets/img/newleads.png';
import { useNavigate } from "react-router-dom";
import "./NewLeads.css";

export const NewLeads = () => {

  const [employeesList, setEmployeesList] = useState([])
  const product = 'Team Insurance'

  const navigate = useNavigate()

  useEffect(() => {
    InsService.findAllEmployee()
    .then((resp) => setEmployeesList(resp.data))
    .catch(err => 'ERROR IN FETCH ALL EMPLOYEES >> ' + err)
  }, [])

  const handleAddNewLead = () => {
    navigate('/AddNewLeadForm')
  }

  return (
    <div>

      <main id="main" class="main">

        <div class="col-12">

          <h4 class="table-title">
            <a href="/Dashboard">
              <FontAwesomeIcon icon={faAngleLeft} />
            </a>
            <b> New Leads </b>
          </h4> &nbsp;

          <div class="filter">
            <select class="table-drop" name="dropdown" id="filter">  &nbsp;&nbsp;
              <option value="All Policies">All Policies</option>
              <option value="Health">Health</option>
              <option value="Documents">Documents</option>
              <option value="Gallery">Gallery</option> &nbsp;&nbsp;
            </select> &nbsp;&nbsp;&nbsp;&nbsp;

            <select class="table-drop" name="dropdown" id="filter"> &nbsp;&nbsp;
              <option value="All Policies">All Policies</option>
              <option value="Health">Health</option>
              <option value="Documents">Documents</option>
              <option value="Gallery">Gallery</option>&nbsp;&nbsp;
            </select>

            <button type="button" onClick={handleAddNewLead} class="btn btn-light wish-btn"> add new lead </button>
          </div>

          <br />

          <div class="card recent-sales overflow-auto">
            <div class="card-bod">
              <table class="table table-stripped table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Last Contacted</th>
                    <th scope="col">Product</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Lead Stage</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    employeesList.map(emp => (
                      <tr>
                        <td style={{ display: 'inline-flex'}}> 
                           <Avatar className='avatar bg-info' alt="Monu" src={NewLeadsImage} />
                           &nbsp; &nbsp; &nbsp; {emp.name} &nbsp; &nbsp; &nbsp;
                        </td>
                        <td> {emp.lastConnected} </td>
                        <td> {product} </td>
                        <td> {emp.email} </td>
                        <td> (91) {emp.contact} </td>
                        <td class='leadStageCss'> {emp.leadStage} </td>
                        <td style={{ color: 'lightskyblue'}}><i class="bi bi-envelope"></i></td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
      
    </div>
  );
};
