import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router-dom";
import Content from "../../Tools/Content";

export default function AddTabs() {
  const { item_version, tab } = useParams();

  return (
    <Container className="my-4 text-white">
      <Row>
        <Col xs={12} sm={12} md={3} lg={2} className={"mb-3"}>
          <ListGroup numbered>
            {Object.entries(Content.framework[item_version]).map(
              ([index, tab]) => (
                <LinkContainer
                  to={`/framework/index/${item_version}/${index}`}
                  key={index}
                >
                  <ListGroup.Item variant="dark" action>
                    {tab.name}
                  </ListGroup.Item>
                </LinkContainer>
              )
            )}
          </ListGroup>
        </Col>

        <Col xs={12} sm={12} md={9} lg={10}>
          {Content.framework[item_version][tab].code}
        </Col>
      </Row>
    </Container>
  );
}
