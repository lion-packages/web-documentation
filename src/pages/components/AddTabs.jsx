import { useState } from "react";
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
import { Outlet, useParams } from "react-router-dom";
import Content from "../../Tools/Content";
import { FiArrowLeft } from "react-icons/fi";
import SelectVersionButton from "./SelectVersionButton";

export default function AddTabs() {
  const { item_version, code } = useParams();
  const [show, setShow] = useState(false);
  const [filter_search, setFilter_search] = useState("");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const filterItems = () => {
    const content = Content().framework[item_version].docs;

    return Object.entries(content).filter(([index, item]) =>
      item.name.toLowerCase().includes(filter_search.toLowerCase())
    );
  };

  const ListItems = () => {
    let count = 0;

    return (
      <ListGroup>
        {filterItems().map(([index, tab]) => {
          count++;

          if ("sub_modules" === tab.type) {
            let subCount = 0;

            return (
              <div key={index}>
                <ListGroup.Item variant="dark" className="border-0">
                  {`${count} - ${tab.name}`}
                </ListGroup.Item>

                {Object.entries(tab.list).map(([indexItem, item]) => {
                  subCount++;

                  return (
                    <LinkContainer
                      to={`/framework/index/${item_version}/${index}/${indexItem}`}
                      key={`${index}-${indexItem}`}
                    >
                      <ListGroup.Item
                        // className="border-0"
                        variant="dark"
                        action
                        onClick={() => {
                          setShow(false);

                          scrollToTop();
                        }}
                      >
                        <i className="bi bi-arrow-return-right text-warning me-2"></i>
                        <label className="text-warning">{`${count}.${subCount}`}</label>
                        {" - "}
                        {item.name}
                      </ListGroup.Item>
                    </LinkContainer>
                  );
                })}
              </div>
            );
          }

          return (
            <ListGroup.Item key={index} variant="dark">
              {`${count} - ${tab.name}`}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  };

  return (
    <Container className="my-4 text-white">
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={3} xxl={3}>
          <div className="d-none d-xl-block">
            <SelectVersionButton />

            <InputGroup className="mb-3 mb-3">
              <LinkContainer to={`/`}>
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
                variant="dark-gradient"
                className="me-3"
                onClick={() => setShow(true)}
              >
                <i className="bi bi-list"></i>
              </Button>

              <LinkContainer to={`/framework/content`}>
                <Button variant="dark-gradient">
                  <FiArrowLeft size={"1.3em"} />
                </Button>
              </LinkContainer>

              <hr />
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
                <SelectVersionButton />

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
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}
