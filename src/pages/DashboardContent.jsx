import { Container } from "react-bootstrap";
import DashboardPresentation from "./components/dashboard/DashboardPresentation";
import DashboardServerAndDocker from "./components/dashboard/DashboardServerAndDocker";
import DashboardRoutesAndApiAndTest from "./components/dashboard/DashboardRoutesAndApiAndTest";
import DashboardViteAndDatabase from "./components/dashboard/DashboardViteAndDatabase";

function DashboardContent() {
  return (
    <div className="bg-blur">
      <main className="vh-100 py-5">
        <DashboardPresentation />
      </main>

      <Container>
        <DashboardServerAndDocker />
        
        <DashboardRoutesAndApiAndTest />

        <DashboardViteAndDatabase />
      </Container>
    </div>
  );
}

export default DashboardContent;
