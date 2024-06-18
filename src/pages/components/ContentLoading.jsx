import { Fragment } from "react";
import { Card, Col, Container, Placeholder, Row } from "react-bootstrap";

export default function ContentLoading() {
  return (
    <Container>
      <div className="mb-3">
        <Placeholder as="p" animation="wave">
          <Placeholder xs={6} size="lg" />

          <Placeholder xs={12} size="xs" />
        </Placeholder>
      </div>

      {[1, 2, 3].map((item) => (
        <Fragment key={item}>
          {[1, 2, 3].map((indexChild) => (
            <Fragment key={indexChild}>
              <Placeholder as="p" animation="glow">
                <Placeholder className="w-75" size="sm" />

                <Placeholder className="w-25 bg-primary" size="sm" />
              </Placeholder>
            </Fragment>
          ))}
        </Fragment>
      ))}

      <div className="mb-3">
        <Placeholder style={{ width: "25%" }} />
      </div>

      <Row>
        <Col>
          <Card style={{ width: "18rem" }} className="bg-dark-logo">
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} className="text-warning" />
              </Placeholder>

              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} className="text-ide" />{" "}
                <Placeholder xs={4} className="text-ide" />{" "}
                <Placeholder xs={4} className="text-ide" />{" "}
                <Placeholder xs={6} className="text-ide" />{" "}
                <Placeholder xs={8} className="text-ide" />
              </Placeholder>

              <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "18rem" }} className="bg-dark-logo">
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} className="text-warning" />
              </Placeholder>

              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} className="text-ide" />{" "}
                <Placeholder xs={4} className="text-ide" />{" "}
                <Placeholder xs={4} className="text-ide" />{" "}
                <Placeholder xs={6} className="text-ide" />{" "}
                <Placeholder xs={8} className="text-ide" />
              </Placeholder>

              <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
