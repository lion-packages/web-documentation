import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Content from "../Tools/Content";
import CardLink from "./components/CardLink";

function LibraryContent() {
  const [lion, setLion] = useState(Content().libraries.lion);
  const [external, setExternal] = useState(Content().libraries.external);

  return (
    <Container>
      <div className="my-4 text-white">
        <h3 className="pb-2 title-card-link-5">LION LIBRARIES AVAILABLE</h3>

        <Row>
          {Object.entries(lion).map(([key, library]) => (
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={6}
              className="mb-3"
              key={key}
            >
              <CardLink
                title={library.title}
                description={library.description}
                uri={library.url}
                textColor={{
                  title: "title-card-link-2",
                  description: "text-white",
                }}
              />
            </Col>
          ))}
        </Row>

        <hr />

        <h3 className="pb-2 title-card-link-5">CREDIT TO EXTERNAL LIBRARIES</h3>

        <Row>
          {Object.entries(external).map(([key, library]) => (
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={6}
              className="mb-3"
              key={key}
            >
              <CardLink
                external={true}
                title={library.label}
                description={library.description}
                uri={library.url}
                textColor={{
                  title: "title-card-link-2",
                  description: "text-white",
                }}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default LibraryContent;
