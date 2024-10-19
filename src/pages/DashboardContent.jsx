import { Container } from "react-bootstrap";
import DashboardPresentation from "./components/dashboard/DashboardPresentation";
import { Fragment } from "react";
import DashboardCards from "./components/dashboard/DashboardCards";

function DashboardContent() {
  return (
    <div className="bg-blur">
      <main className="vh-100">
        <DashboardPresentation />
      </main>

      <Container className="mt-4 mb-4 px-4">
        <DashboardCards />
      </Container>
    </div>
  );
}

export default DashboardContent;
