import React from 'react'
import Table from 'react-bootstrap/Table'
import './ViewProduct.css'

export const EligibiltyTable = () => {

  return (
    <>
         <Table bordered id='table-design' style={{marginLeft: '-25px'}}>
            <thead>
                <tr id='header-design'>
                    <th> Eligibility Criteria </th>
                    <th> Life Option </th>
                    <th> Income Replacement, Return of Premium </th>
                    <th> Life Long Protection </th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td> MIN AGE AT ENTRY </td>
                    <td> 18 Years </td>
                    <td> 18 Years </td>
                    <td> 25 Years </td>
                </tr>

                <tr>
                    <td> MAX AGE AT ENTRY</td>
                    <td> 65 Years </td>
                    <td> 65 Years </td>
                    <td> 65 Years </td>
                </tr>

                <tr>
                    <td> MIN PLOICY TERM </td>
                    <td> (85 Years - Age at Entry) </td>
                    <td> 40 Years </td>
                    <td> Whole of Life </td>
                </tr>

                <tr>
                    <td> PREMIUM PAYMENT MODE </td>
                    <td> Single Pay, Regular Pay, Limited Pay: 5 yrs to 84 </td>
                    <td> Single Pay, Regular Pay, Limited Pay: 5 yrs to 39 </td>
                    <td> Whole of Life </td>
                </tr>

                <tr>
                    <td> PREMIUM PAYMENT </td>
                    <td> Single, Annual, Semi-Annual, Quarterly, Monthly </td>
                    <td> Single, Annual, Semi-Annual, Quarterly, Monthly </td>
                    <td> Limited Pay: (65-Age Entry or 75- Age Entry) </td>
                </tr>
            </tbody>
    </Table>
    </>
  )
}
