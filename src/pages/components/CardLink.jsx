import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function CardLink({ title, uri }) {
  return (
    <LinkContainer to={uri}>
      <Card bg="transparent-blur" role="button">
        <Card.Body>
          <Card.Link className={"text-decoration-none"}>
            <Card.Title>
              <span className={"fs-4 text-warning"}>{title}</span>

              <i className="bi bi-arrow-right text-white float-end fs-3"></i>
            </Card.Title>
          </Card.Link>
        </Card.Body>
      </Card>
    </LinkContainer>
  );
}

export default CardLink;
