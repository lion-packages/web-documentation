import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Content from "../../Tools/Content";
import CardLink from "../components/CardLink";

function LibraryContent() {
  const [lion, setLion] = useState(Content.libraries.lion);
  const [external, setExternal] = useState(Content.libraries.external.class);

  return (
    <Container>
      <div className="my-4 text-white">
        <Row>
          <Col xs={12} sm={12} md={6}>
            <h5 className="pb-2">LION LIBRARIES AVAILABLE</h5>

            {Object.entries(lion).map(([key, library]) => (
              <div className="mb-3" key={key}>
                <CardLink
                  title={library.title}
                  description={library.description}
                  uri={library.url}
                  textColor={{
                    title: "title-degradient",
                    description: "description-gradient text-white",
                  }}
                />
              </div>
            ))}
          </Col>

          <Col xs={12} sm={12} md={6}>
            <h5 className="pb-2">CREDIT TO EXTERNAL LIBRARIES</h5>

            {Object.entries(external).map(([key, library]) => (
              <div className="mb-3" key={key}>
                <CardLink
                  title={library.title}
                  description={library.description}
                  uri={library.url}
                  textColor={{
                    title: "title-degradient",
                    description: "text-white",
                  }}
                />
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default LibraryContent;
