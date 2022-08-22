import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

function ListTabs(props) {
  return (
    <div className="my-5">
      <Tab.Container id="left-tabs-example" defaultActiveKey={props.default}>
        <Row>
          <Col sm={3}>
            {props.items.map((item, index) => (
              <Nav variant="pills" className="flex-column" key={index}>
                <Nav.Item>
                  <Nav.Link eventKey={item.event}>{item.name}</Nav.Link>
                </Nav.Item>
              </Nav>
            ))}
          </Col>

          <Col sm={9}>
            <Tab.Content className="border p-3">
              {props.panes.map((pane, index) => (
                <Tab.Pane eventKey={pane.event} key={index}>
                  {pane.content}
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default ListTabs;
