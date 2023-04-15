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
  const { version, classname } = useParams();
  const location = useLocation();
  const route = location.pathname.split("/").filter((route) => route != "");
  const [show, setShow] = useState(false);

  const ListItems = () => {
    return (
      <ListGroup numbered>
        {Object.entries(
          Content().libraries.lion[route[2]].class[version][classname].methods
        ).map(([index, arrfunc]) => (
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
    );
  };

  return (
    <Container fluid>
      <div className="my-3 text-white">
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

          <LinkContainer
            to={"/libraries/" + route[1] + "/" + route[2] + "/index"}
          >
            <Button
              variant="outline-warning"
              className="rounded-pill mb-3 ms-3"
            >
              <FiArrowLeft size={18} />
            </Button>
          </LinkContainer>
        </div>

        <div className="d-none d-xl-block">
          <LinkContainer
            to={"/libraries/" + route[1] + "/" + route[2] + "/index"}
          >
            <Button variant="outline-warning" className="rounded-pill mb-3">
              <FiArrowLeft size={22} />
            </Button>
          </LinkContainer>
        </div>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6}>
            <div className="d-none d-xl-block">
              <Row>
                {Object.entries(
                  Content().libraries.lion[route[2]].class[version][classname]
                    .methods
                ).map(([index, arrfunc]) => {
                  const title = `${cont} - ${arrfunc.title}`;

                  const elem = (
                    <Col
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                      xxl={6}
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

          <Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6}>
            <Add />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default AddMethods;
