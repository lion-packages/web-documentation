import { Row } from "react-bootstrap";
import EmptyTechnologyBlock from "./EmptyTechnologyBlock";

export default function EmptyTechnologyRow() {
  return (
    <Row>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
        <EmptyTechnologyBlock key={index} />
      ))}
    </Row>
  );
}
