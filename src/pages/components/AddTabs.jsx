import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  ListGroup,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Outlet, useParams } from "react-router-dom";
import Content from "../../Tools/Content";
import SelectVersion from "./SelectVersion";

export default function AddTabs() {
  const { item_version, library = null } = useParams();
  const [show, setShow] = useState(false);
  const [filter_search, setFilter_search] = useState("");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const filterItems = () => {
    let content = null;

    if (null === library) {
      content = Content().framework[item_version].docs;
    } else {
      content = Content().library[library][item_version];
    }

    return Object.entries(content).filter(([index, item]) =>
      filterObjectByName(item, filter_search.toLowerCase())
    );
  };

  const filterObjectByName = (obj, searchTerm) => {
    if (obj.name.toLowerCase().includes(searchTerm)) {
      return true;
    }

    if (obj.list) {
      const filteredList = Object.values(obj.list).filter((subItem) =>
        subItem.name.toLowerCase().includes(searchTerm)
      );
      return filteredList.length > 0;
    }

    return false;
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
                      to={
                        library === null
                          ? `/docs/framework/${item_version}/${index}/${indexItem}`
                          : `/docs/library/${library}/${item_version}/${index}/${indexItem}`
                      }
                      key={`${index}-${indexItem}`}
                    >
                      <ListGroup.Item
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
    <Container fluid className="my-4 text-white">
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={3} xxl={3}>
          <div className="d-xl-none">
            <div className="mb-3">
              <Button
                variant="dark-gradient"
                className="me-3"
                onClick={() => setShow(true)}
              >
                <i className="bi bi-list"></i>
              </Button>

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
                <SelectVersion />

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

          <div className={"sticky-top d-none d-xl-block"}>
            <div className="sticky-top bg-dark-logo py-3">
              <SelectVersion />

              <div className="mb-3">
                <Form.Control
                  type="search"
                  className="form-control-dark"
                  placeholder="Search..."
                  value={filter_search}
                  onChange={(e) => setFilter_search(e.target.value)}
                />
              </div>
            </div>

            <div className="vh-100 overflow-y-scroll">
              <ListItems />
            </div>
          </div>
        </Col>

        <Col xs={12} sm={12} md={12} lg={12} xl={9} xxl={9}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}
