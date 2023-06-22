import React from 'react'
import './tsp.css'
import ProgressBar from 'react-bootstrap/ProgressBar';

export const TotalSellingProducts = () => {

  const valuesArr = [80, 70, 90]
  const soldArr = [455, 412, 566]
  const namesArr = ['Health Protect Plus', 'Covid Shield Plus', 'CG Term Life' ]

  return (
    <div>
      <div class="col-lg-12">

        <div class="row">
          <div class="card">
              <div class="card-body">

                    <h5><b> Top selling products </b></h5> &nbsp;
                
                    <h5 class="card-subtitle mb-1">
                      <section class = "tp-section matProgress">
                            <label class = "tp-margin" style={{ width: '165px', textDecoration: 'solid'}}> {namesArr[0]} </label>
                            <ProgressBar variant="danger" now={valuesArr[0]} id='progress-bar' />
                            <label class='tp-margin-2'> {soldArr[0]} sold</label>
                      </section>
                  </h5> &nbsp;

                  <h5 class="card-subtitle mb-1">
                    <section class = "tp-section matProgress1">
                        <label class = "tp-margin" style= {{width: '166px', textDecoration: 'solid'}}> {namesArr[1]} </label>
                        <ProgressBar variant="success" now={valuesArr[1]} id='progress-bar'/>
                        <label class='tp-margin-2'> {soldArr[1]} sold</label>
                    </section>
                  </h5> &nbsp;

                  <h5 class="card-subtitle mb-1">
                      <section class = "tp-section matProgress2">
                        <label class = "tp-margin" style={{ width: '138px' }}> {namesArr[2]} </label>
                        <ProgressBar variant="warning" now={valuesArr[2]} id='progress-bar'/>
                        <label class='tp-margin-2'> {soldArr[2]} sold</label>
                      </section>
                  </h5>
             </div>
           </div>
         </div> 
      </div> 
  </div>
  )
}
