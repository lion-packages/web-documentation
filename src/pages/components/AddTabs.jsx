import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  ListGroup,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router-dom";

import Content from "../../Tools/Content";

export default function AddTabs() {
  const { item_version, tab } = useParams();
  const [mdText, setMdText] = useState("");
  const [show, setShow] = useState(false);

  const ListItems = () => {
    return (
      <ListGroup numbered>
        {Object.entries(Content(mdText).framework[item_version]).map(
          ([index, tab]) => (
            <LinkContainer
              to={`/framework/index/${item_version}/${index}`}
              key={index}
            >
              <ListGroup.Item
                variant="dark"
                action
                onClick={() => setShow(false)}
              >
                {tab.name}
              </ListGroup.Item>
            </LinkContainer>
          )
        )}
      </ListGroup>
    );
  };

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Sleon4/Lion-Framework/main/CHANGELOG.md"
    )
      .then((content) => content.text())
      .then((md) => setMdText(md));
  }, []);

  return (
    <Container className="my-4 text-white">
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={3} xxl={3}>
          <div className="d-xl-none">
            <Button
              variant="outline-warning"
              className="rounded-pill mb-3"
              onClick={() => setShow(true)}
            >
              <i className="bi bi-list"></i>
            </Button>

            <Offcanvas
              placement="start"
              className="bg-dark-logo text-white"
              show={show}
              onHide={() => setShow(false)}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Available documents</Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <ListItems />
              </Offcanvas.Body>
            </Offcanvas>
          </div>

          <div className={"d-none d-xl-block mb-3"}>
            <ListItems />
          </div>
        </Col>

        <Col xs={12} sm={12} md={12} lg={12} xl={9} xxl={9}>
          {Content(mdText).framework[item_version][tab].code}
        </Col>
      </Row>
    </Container>
  );
}
