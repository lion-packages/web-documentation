import "./assets/css/index.css";
import { Routes, Route } from "react-router-dom";
import Content from "./Tools/Content";
import NavbarNavigation from "./pages/components/NavbarNavigation";
import AddMethods from "./pages/components/AddMethods";
import AddCode from "./pages/components/AddCode";
import AddTabs from "./pages/components/AddTabs";

import NotFound from "./pages/NotFound";
import FrameworkContent from "./pages/FrameworkContent";
import DashboardContent from "./pages/DashboardContent";
import LibraryContent from "./pages/LibraryContent";

function App() {
  return (
    <>
      <NavbarNavigation />

      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<DashboardContent />} />

        <Route path="framework">
          <Route path="content" element={<FrameworkContent />} />
          <Route path="index/:item_version/:tab" element={<AddTabs />} />
        </Route>

        <Route path="libraries">
          <Route path="content" element={<LibraryContent />} />

          <Route path="lion">
            {Object.keys(Content().libraries.lion).map((library, index) => (
              <Route path={library} key={index}>
                <Route
                  path={"index"}
                  element={Content().libraries.lion[library].component}
                />

                <Route path=":version/:classname" element={<AddMethods />}>
                  <Route path=":functionname" element={<AddCode />} />
                </Route>
              </Route>
            ))}
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
