import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import All from './All';
import Rejected from './Rejected';
import Accepted from './Accepted';
import Pending from './Pending';
import './Bidstatus.css';

function BidStatus() {
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
    </div>
    
  );
}

export default BidStatus;