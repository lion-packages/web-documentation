import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function CardLink({
  title,
  uri,
  description,
  textColor = { title: "text-white", description: "text-white" },
  external = false,
}) {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Card bg="dark-blue" onClick={scrollTop}>
      {!external ? (
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
      ) : (
        <Card.Body onClick={() => window.open(uri)} role="button">
          <Card.Link className={"text-decoration-none"}>
            <Card.Title className={textColor.title}>{title}</Card.Title>
            <Card.Text className={textColor.description}>
              {description}
            </Card.Text>
          </Card.Link>
        </Card.Body>
      )}
    </Card>
  );
}

export default CardLink;
