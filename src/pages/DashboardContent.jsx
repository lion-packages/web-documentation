import { Container } from "react-bootstrap";
import DashboardPresentation from "./components/dashboard/DashboardPresentation";
import DashboardServerAndDocker from "./components/dashboard/DashboardServerAndDocker";

function DashboardContent() {
  return (
    <div className="bg-blur">
      <main className="vh-100 py-5">
        <DashboardPresentation />
      </main>

      <Container>
        <DashboardServerAndDocker />
      </Container>
    </div>
  );
}

export default DashboardContent;
