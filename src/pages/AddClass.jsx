import { Col, Container, Row } from "react-bootstrap";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import LionHelpers from "./libraries/Lion/LionHelpers";

function AddClass() {
  const navigate = useNavigate();
  const { library } = useParams();

  const AddCmp = ({ lib }) => {
    const cmp = {
      helpers: <LionHelpers />,
    };

    return cmp[lib];
  };

  return (
    <Container fluid>
      <div className="text-white">
        <Row>
          <Col xs={12} sm={12} md={12} lg={4} xl={3} xxl={3}>
            <AddCmp lib={library} />
          </Col>

          <Col xs={12} sm={12} md={12} lg={8} xl={9} xxl={9}>
            <Outlet />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default AddClass;
