import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function CardLink({
  title,
  uri,
  description,
  textColor = { title: "text-white", description: "text-white" },
}) {
  return (
    // style={{ width: "18rem" }}
    <Card bg="dark-blue">
      <Card.Body>
        <LinkContainer to={uri}>
          <Card.Link className={"text-decoration-none"}>
            <Card.Title className={textColor.title}>{title}</Card.Title>
            <Card.Text className={textColor.description}>
              {description}
            </Card.Text>
          </Card.Link>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
}

export default CardLink;
