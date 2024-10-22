import { Container } from "react-bootstrap";
import DashboardPresentation from "./components/dashboard/DashboardPresentation";
import DashboardServerAndDocker from "./components/dashboard/DashboardServerAndDocker";
import DashboardRoutesAndApiAndTest from "./components/dashboard/DashboardRoutesAndApiAndTest";
import DashboardViteAndDatabase from "./components/dashboard/DashboardViteAndDatabase";
import DashboardTaskInQueueAndCommands from "./components/dashboard/DashboardTaskInQueueAndCommands";

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

        <DashboardTaskInQueueAndCommands />
      </Container>
    </div>
  );
}

export default DashboardContent;
