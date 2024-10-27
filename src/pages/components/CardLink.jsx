import { LinkContainer } from "react-router-bootstrap";

export default function CardLink({ title, description, uri }) {
  return (
    <LinkContainer to={uri}>
      <div className={"p-4 rounded border-lion-light h-100"} role="button">
        <span className={"fs-4 text-warning text-shadow"}>{title}</span>

        <i className="bi bi-arrow-right text-warning text-shadow float-end fs-3"></i>

        <hr />

        <p className="lead text-white text-shadow">{description}</p>
      </div>
    </LinkContainer>
  );
}
