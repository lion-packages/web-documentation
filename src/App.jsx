import "./assets/css/index.css";
import { Routes, Route } from "react-router-dom";
import NavbarNavigation from "./pages/components/NavbarNavigation";
import AddTabs from "./pages/components/AddTabs";
import NotFound from "./pages/NotFound";
import DashboardContent from "./pages/DashboardContent";
import LibraryContent from "./pages/LibraryContent";
import FooterNavigation from "./pages/components/FooterNavigation";
import ContentView from "./pages/ContentView";
import LinuxConfiguration from "./pages/LinuxConfiguration";
import Standars from "./pages/Standars";
import Editors from "./pages/Editors";

function App() {
  return (
    <>
      <NavbarNavigation />

      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<DashboardContent />} />
        <Route path="editors" element={<Editors />} />
        <Route path="standards" element={<Standars />} />
        <Route path="linux-configuration" element={<LinuxConfiguration />} />

        <Route path="docs/">
          <Route path="framework">
            <Route path=":item_version/:tab" element={<AddTabs />}>
              <Route path=":code" element={<ContentView />} />
            </Route>
          </Route>

          <Route path="library">
            <Route path="content" element={<LibraryContent />} />

            <Route path=":library/:item_version/:tab" element={<AddTabs />}>
              <Route path=":code" element={<ContentView />} />
            </Route>
          </Route>
        </Route>
      </Routes>

      <FooterNavigation />
    </>
  );
}

export default App;
