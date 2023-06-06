import { Col, Row } from "react-bootstrap";
import CardLink from "./CardLink";

function CardClass({ methods, option }) {
  return (
    <Row>
      {![null, undefined].includes(methods) &&
        Object.entries(methods).map(([key, classname]) => (
          <Col xs={12} sm={12} md={6} lg={4} xl={3} key={key} className="mb-3">
            <CardLink
              uri={classname.url.replace(/item_version/gm, option)}
              title={classname.title}
              description={classname.description}
              textColor={{
                title: "title-card-link-2",
                description: "text-white",
              }}
            />
          </Col>
        ))}
    </Row>
  );
}

export default CardClass;
