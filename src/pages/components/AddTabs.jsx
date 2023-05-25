import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  ListGroup,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router-dom";

import Content from "../../Tools/Content";
import { FiArrowLeft } from "react-icons/fi";

export default function AddTabs() {
  const { item_version, tab } = useParams();
  const [mdText, setMdText] = useState("");
  const [show, setShow] = useState(false);
  const [filter_search, setFilter_search] = useState("");

  const filterItems = () => {
    const items = Content(mdText).framework[item_version];

    return Object.entries(items).filter(([index, item]) =>
      item.name.toLowerCase().includes(filter_search.toLowerCase())
    );
  };

  const ListItems = () => {
    return (
      <ListGroup numbered>
        {filterItems().map(([index, tab]) => (
          <LinkContainer
            to={`/framework/index/${item_version}/${index}`}
            key={index}
          >
            <ListGroup.Item
              variant="dark"
              action
              onClick={() => {
                setShow(false);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              {tab.name}
            </ListGroup.Item>
          </LinkContainer>
        ))}
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
          <div className="d-none d-xl-block">
            <InputGroup className="mb-3 mb-3">
              <LinkContainer to={`/framework/content`}>
                <Button variant="dark">
                  <FiArrowLeft size={"1.4em"} />
                </Button>
              </LinkContainer>

              <Form.Control
                type="search"
                className="form-control-dark"
                placeholder="Search..."
                value={filter_search}
                onChange={(e) => setFilter_search(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="d-xl-none">
            <div className="mb-3">
              <Button
                variant="outline-warning"
                className="rounded-pill me-3"
                onClick={() => setShow(true)}
              >
                <i className="bi bi-list"></i>
              </Button>

              <LinkContainer to={`/framework/content`}>
                <Button variant="outline-warning" className="rounded-pill">
                  <FiArrowLeft />
                </Button>
              </LinkContainer>
            </div>

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
                <div className="mb-3">
                  <Form.Control
                    type="search"
                    className="form-control-dark"
                    placeholder="Search..."
                    value={filter_search}
                    onChange={(e) => setFilter_search(e.target.value)}
                  />
                </div>

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
