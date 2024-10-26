import "../assets/css/dashboard.css";

import { Fragment } from "react";
import { Container } from "react-bootstrap";
import DashboardPresentation from "./components/dashboard/DashboardPresentation";
import DashboardServerAndDocker from "./components/dashboard/DashboardServerAndDocker";
import DashboardRoutesAndApiAndTest from "./components/dashboard/DashboardRoutesAndApiAndTest";
import DashboardViteAndDatabase from "./components/dashboard/DashboardViteAndDatabase";
import DashboardTaskInQueueAndCommands from "./components/dashboard/DashboardTaskInQueueAndCommands";
import DashboardTecnologies from "./components/dashboard/DashboardTecnologies";

function DashboardContent() {
  return (
    <Fragment>
      <div className="bg-blur-center vh-100 py-5">
        <DashboardPresentation />
      </div>

      <div className="bg-blur-left-ellipse" id="initial-section">
        <Container>
          <DashboardServerAndDocker />

          <DashboardRoutesAndApiAndTest />
        </Container>
      </div>

      <div className="bg-blur-right-ellipse">
        <Container>
          <DashboardViteAndDatabase />

          <DashboardTaskInQueueAndCommands />
        </Container>
      </div>

      <div className="bg-blur-buttom-ellipse">
        <Container>
          <DashboardTecnologies />
        </Container>
      </div>
    </Fragment>
  );
}

export default DashboardContent;
