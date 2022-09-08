import React from "react";
import { Table } from "react-bootstrap";
export default function Rejected(){
   return(
      <div id="tablemain">
                <h1>DueStatus</h1>
      <div id="table">
      <Table striped bordered hover>
        <thead id="thead1">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr id="maintr">
          
            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAB7CAMAAAAfU9HR
            AAAAA1BMVEX///+nxBvIAAAALUlEQVR4nO3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAA
            AAAAACeDFleAAGeqr+CAAAAAElFTkSuQmCC"/> <br/><p className="chgclr2">Client</p></td>
            <td id="desciption">stars wars themed wedding-<br/>
            30x Lights<br/>
            20x Waiters
            </td>
            <td className="chgclr">90,000 pkr</td>
            <td className="chgclr">50,000 pkr</td>
          </tr>
         
          <tr id="maintr">
          
            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAB7CAMAAAAfU9HR
            AAAAA1BMVEX///+nxBvIAAAALUlEQVR4nO3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAA
            AAAAACeDFleAAGeqr+CAAAAAElFTkSuQmCC"/> <br/><p className="chgclr2">Client</p></td>
            <td id="desciption">stars wars themed wedding-<br/>
            30x Lights<br/>
            20x Waiters
            </td>
            <td className="chgclr">90,000 pkr</td>
            <td className="chgclr">50,000 pkr</td>
          </tr>
         
        </tbody>
      </Table>
      </div>
     </div>   ) 
}