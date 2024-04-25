import { Col, Container, Row } from "react-bootstrap";
import Content from "../Tools/Content";
import CardLink from "./components/CardLink";

function LibraryContent() {
  return (
    <Container>
      <div className="my-4 text-white">
        <Row>
          {Object.keys(Content().library).map((library, index) => {
            const version = Object.keys(Content().library[library]).shift();

            return (
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={6}
                className="mb-3"
                key={index}
              >
                <CardLink
                  title={`lion/${library}`}
                  uri={`/docs/library/${library}/${version}/getting-started/about-as`}
                  textColor={{
                    title: "title-card-link-2",
                    description: "text-white",
                  }}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  );
}

export default LibraryContent;
