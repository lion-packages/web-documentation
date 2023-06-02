import {
  Button,
  Col,
  Container,
  ListGroup,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { FiArrowLeft } from "react-icons/fi";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import Content from "../../Tools/Content";
import Add from "./Add";
import CardLink from "./CardLink";
import { useState } from "react";

function AddMethods() {
  let cont = 1;
  const [filter_search, setFilter_search] = useState("");
  const { version, classname } = useParams();
  const location = useLocation();
  const route = location.pathname.split("/").filter((route) => route != "");
  const [show, setShow] = useState(false);

  const filterItems = () => {
    return Object.entries(
      Content().libraries.lion[route[2]].class[version][classname].methods
    ).filter(([index, item]) =>
      item.title.toLowerCase().includes(filter_search.toLowerCase())
    );
  };

  const ListItems = () => {
    return (
      <>
        <ListGroup numbered>
          {filterItems().map(([index, arrfunc]) => (
            <LinkContainer
              to={arrfunc.link.replace(/item_version/gm, version)}
              key={index}
            >
              <ListGroup.Item
                variant="dark"
                action
                onClick={() => setShow(false)}
              >
                {arrfunc.title}
              </ListGroup.Item>
            </LinkContainer>
          ))}
        </ListGroup>
      </>
    );
  };

  return (
    <Container fluid>
      <div className="my-3 text-white">
        <div className="d-xl-none">
          <Button
            variant="outline-warning"

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
              <div className="mb-3">
                <input
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

          <LinkContainer
            to={"/libraries/" + route[1] + "/" + route[2] + "/index"}
          >
            <Button
              variant="outline-warning"
              className="ms-3"
            >
              <FiArrowLeft size={18} />
            </Button>
          </LinkContainer>
        </div>

        <div className="d-none d-xl-block">
          <LinkContainer
            to={"/libraries/" + route[1] + "/" + route[2] + "/index"}
          >
            <Button variant="outline-warning">
              <FiArrowLeft size={22} />
            </Button>
          </LinkContainer>
        </div>

        <hr />

        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={3}>
            <div className="d-none d-xl-block">
              <div className="mb-3">
                <input
                  type="search"
                  className="form-control-dark"
                  placeholder="Search..."
                  value={filter_search}
                  onChange={(e) => setFilter_search(e.target.value)}
                />
              </div>

              <Row>
                {filterItems().map(([index, arrfunc]) => {
                  const title = `${cont} - ${arrfunc.title}`;

                  const elem = (
                    <Col
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                      xxl={12}
                      key={`${index}-${cont}`}
                      className={"mb-3"}
                    >
                      <CardLink
                        title={title}
                        description={arrfunc.description}
                        uri={arrfunc.link.replace(/item_version/gm, version)}
                        textColor={{
                          title: "text-warning",
                          description: "text-white",
                        }}
                      />
                    </Col>
                  );

                  cont++;

                  return elem;
                })}
              </Row>
            </div>
          </Col>

          <Col xs={12} sm={12} md={12} lg={12} xl={8} xxl={9}>
            <Add />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default AddMethods;
