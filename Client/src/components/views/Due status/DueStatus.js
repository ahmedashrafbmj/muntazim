import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import All from './components/All';
import Rejected from './components/Rejected';
import Accepted from './components/Accepted';
import Pending from './components/Pending';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './Duestatus.css';
import Media from "react-media";
import Calendar from '../orders/Calender';
import { Button, Drawer } from 'antd';
import { useState } from 'react';
import { Timeline } from 'antd';

function DueStatus() {
  const [calender,Setcalender]= useState()
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div id='main'>
    <Tab.Container id="left-tabs-example" className="tabs" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <div id='tabsmain'>
            <div>
            <Nav.Item id="Tab1">
              <Nav.Link eventKey="first" id="Tab1">All</Nav.Link>
            </Nav.Item>
            </div>
            <div>
            <Nav.Item>
              <Nav.Link eventKey="second" id="second">Accepted</Nav.Link>
            </Nav.Item>
            </div>
            <div>
            <Nav.Item>
              <Nav.Link eventKey="third">Rejected</Nav.Link>
            </Nav.Item>
            </div>
            <div>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Pending</Nav.Link>
            </Nav.Item>
            </div>
            
            </div>
          </Nav>
        </Col>


        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first" id="Tab1">
              <All />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Accepted />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Rejected />
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <Pending />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    {/* {calender?<Calendar/>:null} */}
     {/* <button style={{marginLeft:"1000px",marginTop:"-0px"}} onClick={() => {Setcalender((prev)=>{
          console.log(prev);
          return !prev
        })}} >abcd</button>   */}
        <Button className='btn' type="primary" onClick={showDrawer}>
      open
      </Button> 
      {/* <Drawer className='draw1'  placement="right" onClose={onClose} visible={visible}>
      <Calendar/>
      <Timeline>
    <Timeline.Item className='timeline' >Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
   </Timeline>
      </Drawer> */}

      <Drawer className='draw2'  placement="bottom" onClose={onClose} visible={visible}>
      <Calendar/>
      <Timeline>
    <Timeline.Item className='timeline' >Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
   </Timeline>
      </Drawer>

    </div>
    
  );
}

export default DueStatus;