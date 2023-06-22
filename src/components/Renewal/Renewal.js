import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import './Renewal.css'

export const Renewal = () => {
  return (
    <div>
      <main id="main" class="main">
        <div class="col-100">
          <h4 class="table-title">
            <a href="/Dashboard"> <FontAwesomeIcon icon={faAngleLeft} /> </a> &nbsp;
            <b> Renewal</b>
          </h4> &nbsp;

          <div class="filter">
            <select class="table-drop" name="dropdown" id="filter"> &nbsp;&nbsp;
              <option value="All Policies">All Policies</option>
              <option value="Health">Health</option>
              <option value="Documents">Documents</option>
              <option value="Gallery">Gallery</option> &nbsp;&nbsp;
            </select>  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;

            <select class="table-drop" name="dropdown" id="filter"> &nbsp;&nbsp;
              <option value="All Policies">All Policies</option>
              <option value="Health">Health</option>
              <option value="Documents">Documents</option>
              <option value="Gallery">Gallery</option> &nbsp;&nbsp;
            </select>
          </div>

          <br />

          <div class="card recent-sales overflow-auto">
            <div class="card-bod">

              <table class="table table-borderless datatable">
                <thead>
                  <tr>
                    <th scope="col"> Policy no </th>
                    <th scope="col"> Prd Type </th>
                    <th scope="col"> Validity </th>
                    <th scope="col"> Last paid </th>
                    <th scope="col"> Contact </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    {/* <td>{{data.policyno}}</td>
                        <td>{{data.prd_type}}</td>
                        <td>{{data.validity}}</td>
                        <td>{{data.last_paid}}</td>
                        <td>{{data.contact}}</td> */}
                  </tr>
                </tbody>
              </table>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
};
