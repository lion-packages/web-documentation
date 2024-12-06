import { Col } from "react-bootstrap";

export default function EmptyTecnologyBlock() {
  return (
    <Col xs={3} sm={3} md={2} lg={1} className="mb-3">
      <div
        className="bg-transparent-blur py-5 rounded border-lion-light h-100 blocks"
        role="button"
      />
    </Col>
  );
}
