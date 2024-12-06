import { Row } from "react-bootstrap";
import EmptyTecnologyBlock from "./EmptyTecnologyBlock";

export default function EmptyTecnologyRow() {
  return (
    <Row>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
        <EmptyTecnologyBlock key={index} />
      ))}
    </Row>
  );
}
