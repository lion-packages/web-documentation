import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import LayoutSider from "./containers/LayoutSider";
import Dashboard from "./pages/Dashboard";
import Docker from "./pages/Docker";
import Cron from "./pages/Cron";
import Library from "./pages/Library";
import Home from "./pages/Home";
import { ModulesProvider } from "./hooks/Context/ModulesContext";
import FooterNavigation from "./pages/components/FooterNavigation";

function App() {
  return (
    <ModulesProvider>
      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Home />} />

        <Route element={<LayoutSider />}>
          <Route path="framework">
            <Route path="guide">
              <Route index element={<Dashboard />} />
              <Route path="docker" element={<Docker />} />
              <Route path="cron" element={<Cron />} />
            </Route>
          </Route>
        </Route>

        <Route element={<LayoutSider />}>
          <Route path="library" element={<Library />} />
        </Route>
      </Routes>
      <FooterNavigation />
    </ModulesProvider>
  );
}

export default App;
