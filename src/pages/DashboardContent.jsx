import { Container } from "react-bootstrap";
import DashboardPresentation from "./components/dashboard/DashboardPresentation";
import { Fragment } from "react";
import DashboardCards from "./components/dashboard/DashboardCards";

function DashboardContent() {
  return (
    <Fragment>
      <Container className="mt-3 px-4">
        <DashboardPresentation />
      </Container>

      <Container className="mt-4 mb-4 px-4 text-white">
        <DashboardCards />
      </Container>
    </Fragment>
  );
}

export default DashboardContent;
