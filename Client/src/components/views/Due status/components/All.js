import React from "react";
import Table from 'react-bootstrap/Table';
export default function All(){
  return(
  
   <div id="tablemain">
        {/* <h1>DueStatus</h1> */}
        {/* <Datepicker
    select="range"
    rangeHighlight={true}
    showRangeLabels={true}
/> */}
    <div id="table">
    <Table striped bordered hover>
      <thead id="thead1">
        <tr>
          <th>First Name</th>
          <th></th>
          <th>Earning</th>
          <th>Due in</th>
        </tr>
      </thead>
      <tbody>
        <tr id="maintr">
        
          <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAB7CAMAAAAfU9HR
          AAAAA1BMVEX///+nxBvIAAAALUlEQVR4nO3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAA
          AAAAACeDFleAAGeqr+CAAAAAElFTkSuQmCC"/> <br/><p className="chgclr">Client<br/><span id="chng">12-3-2022</span></p></td>
          <td id="desciption">stars wars themed wedding-<br/>
          30x Lights<br/>
          20x Waiters
          </td>
          <td className="chgclr">80,000 pkr</td>
          <td className="chgclr" id="frstcorner">1 Hour</td>
        </tr>
       
        <tr id="maintr">
          
          <td ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAB7CAMAAAAfU9HR
          AAAAA1BMVEX///+nxBvIAAAALUlEQVR4nO3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAA
          AAAAACeDFleAAGeqr+CAAAAAElFTkSuQmCC"/> <br/><p className="chgclr">Client  <br/><span id="chng2">12-3-2022</span></p></td>
          <td id="desciption">stars wars themed wedding-<br/>
          30x Lights<br/>
          20x Waiters
          </td>
          <td className="chgclr">80,000 pkr</td>
          <td className="chgclr" >3 days</td>
        </tr>
        <tr id="maintr">
          
          <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAB7CAMAAAAfU9HR
          AAAAA1BMVEX///+nxBvIAAAALUlEQVR4nO3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAA
          AAAAACeDFleAAGeqr+CAAAAAElFTkSuQmCC"/> <br/><p className="chgclr">Client<br/><span id="chng">12-3-2022</span></p></td>
          <td id="desciption">stars wars themed wedding-<br/>
          30x Lights<br/>
          20x Waiters
          </td>
          <td className="chgclr">80,000 pkr</td>
          <td className="chgclr" >1 day</td>
        </tr>
        <tr id="maintr">
          
          <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAB7CAMAAAAfU9HR
          AAAAA1BMVEX///+nxBvIAAAALUlEQVR4nO3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAAAAAAAAAAAAAA
          AAAAACeDFleAAGeqr+CAAAAAElFTkSuQmCC"/> <br/><p className="chgclr">Client <br/><span id="chng2">12-3-2022</span></p></td>
          <td id="desciption">stars wars themed wedding-<br/>
          30x Lights<br/>
          20x Waiters
          </td>
          <td className="chgclr">80,000 pkr</td>
          <td className="chgclr" id="last"> 4 days</td>
        </tr>
      </tbody>
    </Table>
    </div>
    <div id="icon2">
     <p> </p>
    </div>
   </div>
   ) 
}