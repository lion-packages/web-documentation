import { useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import svg from "../assets/svg/not_found_404.svg";

function NotFound() {
  return (
    <>
      <Container>
        <Col
          xs={12}
          sm={10}
          md={6}
          lg={6}
          xl={6}
          className="mx-auto my-5 p-5 text-center bg-white rounded"
        >
          <img src={svg} className={'img-fluid'} />
        </Col>
      </Container>
    </>
  );
}

export default NotFound;
