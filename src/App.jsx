import { Routes, Route } from "react-router-dom";
import "./assets/css/index.css";
import NavbarNavigation from "./pages/components/NavbarNavigation";

import NotFound from "./pages/NotFound";
import FrameworkContent from "./pages/FrameworkContent";
import GettingStarted from "./pages/framework/GettingStarted";
import Commands from "./pages/framework/Commands";
import Headers from "./pages/framework/Headers";
import Request from "./pages/framework/Request";
import Response from "./pages/framework/Response";
import Carbon from "./pages/framework/Carbon";
import FrameworkRoutes from "./pages/framework/Routes";
import Controllers from "./pages/framework/Controllers";
import Middleware from "./pages/framework/Middleware";
import Models from "./pages/framework/Models";
import Rules from "./pages/framework/Rules";
import DashboardContent from "./pages/DashboardContent";
import Capsules from "./pages/framework/Capsules";

import Add from "./pages/libraries/Add";
import LibraryContent from "./pages/libraries/LibraryContent";
import LionHelpers from "./pages/libraries/Lion/LionHelpers";
import AddMethods from "./pages/AddMethods";
import AddCode from "./pages/AddCode";
import LionRoute from "./pages/libraries/Lion/LionRoute";
import LionSpreadsheet from "./pages/libraries/Lion/LionSpreadsheet";
import LionMailer from "./pages/libraries/Lion/LionMailer";
import LionSQL from "./pages/libraries/Lion/LionSQL";
import LionRequest from "./pages/libraries/Lion/LionRequest";

function App() {
  return (
    <>
      <NavbarNavigation />

      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route index path="/" element={<DashboardContent />} />

        <Route path="framework" element={<FrameworkContent />}>
          <Route path="getting-started" element={<GettingStarted />} />
          <Route path="commands" element={<Commands />} />
          <Route path="headers" element={<Headers />} />
          <Route path="request" element={<Request />} />
          <Route path="response" element={<Response />} />
          <Route path="carbon" element={<Carbon />} />
          <Route path="routes" element={<FrameworkRoutes />} />
          <Route path="controllers" element={<Controllers />} />
          <Route path="middleware" element={<Middleware />} />
          <Route path="models" element={<Models />} />
          <Route path="capsules" element={<Capsules />} />
          <Route path="rules" element={<Rules />} />
        </Route>

        <Route path="libraries">
          <Route path="content" element={<LibraryContent />} />

          <Route path="lion">
            <Route path="request">
              <Route path={"index"} element={<LionRequest />} />
              <Route path=":version/:classname" element={<AddMethods />}>
                <Route path=":functionname" element={<AddCode />} />
              </Route>
            </Route>

            <Route path="spreadsheet">
              <Route path={"index"} element={<LionSpreadsheet />} />
              <Route path=":version/:classname" element={<AddMethods />}>
                <Route path=":functionname" element={<AddCode />} />
              </Route>
            </Route>

            <Route path="sql">
              <Route path={"index"} element={<LionSQL/>} />
              <Route path=":version/:classname" element={<AddMethods />}>
                <Route path=":functionname" element={<AddCode />} />
              </Route>
            </Route>

            <Route path="mailer">
              <Route path={"index"} element={<LionMailer />} />
              <Route path=":version/:classname" element={<AddMethods />}>
                <Route path=":functionname" element={<AddCode />} />
              </Route>
            </Route>

            <Route path="helpers">
              <Route path={"index"} element={<LionHelpers />} />
              <Route path=":version/:classname" element={<AddMethods />}>
                <Route path=":functionname" element={<AddCode />} />
              </Route>
            </Route>

            <Route path="route">
              <Route path={"index"} element={<LionRoute />} />
              <Route path=":version/:classname" element={<AddMethods />}>
                <Route path=":functionname" element={<AddCode />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
