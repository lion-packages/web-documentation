import { useEffect, useState } from "react";
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
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Content from "../../Tools/Content";
import SelectVersion from "./SelectVersion";

export default function AddTabs() {
  const { item_version, tab, library = null } = useParams();
  const [show, setShow] = useState(false);
  const [filter_search, setFilter_search] = useState("");
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getContent = () => {
    let content = null;

    if (null === library) {
      content = Content().framework.versions[item_version].docs;
    } else {
      content = Content().library[library].versions[item_version];
    }

    return content;
  };

  const filterItems = (content) => {
    return Object.entries(content).filter(([index, item]) =>
      item.name.toLowerCase().includes(filter_search.toLowerCase())
    );
  };

  const ListItems = () => {
    return (
      <ListGroup>
        {Object.entries(getContent()).map(([tabName, tabObject]) => (
          <ListGroup.Item
            action
            variant="dark"
            className="border-0"
            key={tabName}
            onClick={() => {
              scrollToTop();

              const firstItem = Object.entries(tabObject.list).shift().shift();

              navigate(
                library === null
                  ? `/docs/framework/${item_version}/${tabName}/${firstItem}`
                  : `/docs/library/${library}/${item_version}/${tabName}/${firstItem}`
              );
            }}
          >
            {tabObject.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  };

  const ListMethodsItems = () => {
    const content = getContent();

    if (!content[tab] || !content[tab].list) {
      return [];
    }

    return filterItems(content[tab].list).map((methods) => (
      <LinkContainer
        to={
          library === null
            ? `/docs/framework/${item_version}/${tab}/${methods[0]}`
            : `/docs/library/${library}/${item_version}/${tab}/${methods[0]}`
        }
        key={`${methods[0]}`}
      >
        <ListGroup.Item
          variant="dark"
          action
          className="p-1"
          onClick={() => scrollToTop()}
        >
          <span className="text-lion-orange">{methods[1].name}</span>
        </ListGroup.Item>
      </LinkContainer>
    ));
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [tab]);

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
            </div>

            <div className="vh-100 overflow-y-scroll">
              <ListItems />
            </div>
          </div>
        </Col>

        <Col xs={12} sm={12} md={12} lg={12} xl={7} xxl={7}>
          <Outlet />
        </Col>

        <Col xs={12} sm={12} md={12} lg={12} xl={2} xxl={2}>
          <div className="mb-3">
            <Form.Control
              type="search"
              className="form-control-dark"
              placeholder="Search..."
              value={filter_search}
              onChange={(e) => setFilter_search(e.target.value)}
            />
          </div>

          <ListMethodsItems />
        </Col>
      </Row>
    </Container>
  );
}
