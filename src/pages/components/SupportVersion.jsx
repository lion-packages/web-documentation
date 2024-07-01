import { Alert } from "react-bootstrap";

export default function SupportVersion({ title, version }) {
  return (
    <Alert variant="warning">
      <strong>Note:</strong> {title} supports PHP versions{" "}
      <label className="text-secondary">({version})</label>.
    </Alert>
  );
}
