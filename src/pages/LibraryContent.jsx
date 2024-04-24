import { Col, Container, Row } from "react-bootstrap";
import Content from "../Tools/Content";
import CardLink from "./components/CardLink";

function LibraryContent() {
  return (
    <Container>
      <div className="my-4 text-white">
        <h3 className="pb-2 title-card-link-5">LION LIBRARIES AVAILABLE</h3>

        <Row>
          {Object.entries(Content().libraries.lion).map(([key, library]) => (
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
      </div>
    </Container>
  );
}

export default LibraryContent;
