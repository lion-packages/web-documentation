import { Button, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Content from "../../../Tools/Content";

export default function DashboardPresentation() {
  return (
    <Row>
      <Col xs={12} sm={12} md={8} lg={7}>
        <div className="py-5">
          <h1 className="text-degradient">LION-FRAMEWORK</h1>

          <p className="text-secondary description mb-4">
            Lion-Framework can also serve as an API backend for a JavaScript
            single page application or a mobile application.
          </p>

          <LinkContainer
            to={
              "/docs/framework/" +
              Object.keys(Content().framework).shift() +
              "/getting-started/about-as"
            }
          >
            <Button
              variant="dark-gradient-secondary"
              size="lg"
              className="fw-bold me-3"
            >
              {"Get Started"}
            </Button>
          </LinkContainer>

          <LinkContainer to={"/docs/library/content"}>
            <Button variant="dark-gradient" size="lg" className="fw-bold">
              {"Libraries"}
            </Button>
          </LinkContainer>
        </div>
      </Col>
    </Row>
  );
}
