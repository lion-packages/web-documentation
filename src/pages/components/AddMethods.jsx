import { Button, Col, Container, Row } from "react-bootstrap";
import { FiArrowLeft } from "react-icons/fi";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import Content from "../../Tools/Content";
import Add from "./Add";
import CardLink from "./CardLink";

function AddMethods() {
  let cont = 1;
  const { version, classname } = useParams();
  const location = useLocation();
  const route = location.pathname.split("/").filter((route) => route != "");

  return (
    <Container fluid>
      <div className="my-3 text-white">
        <LinkContainer
          to={"/libraries/" + route[1] + "/" + route[2] + "/index"}
        >
          <Button variant="outline-light" className="rounded-pill mb-3">
            <FiArrowLeft size={22} />
          </Button>
        </LinkContainer>

        <hr />

        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={7}>
            <Row>
              {Object.entries(
                Content.libraries.lion[route[2]].class[version][classname]
                  .methods
              ).map(([index, arrfunc]) => {
                const title = `${cont} - ${arrfunc.title}`;

                const elem = (
                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={6}
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
          </Col>

          <Col xs={12} sm={12} md={6} lg={6} xl={5}>
            <Add />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default AddMethods;
