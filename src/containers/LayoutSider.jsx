import { Outlet } from "react-router-dom";
import Sidebar from "../pages/components/Sidebar";
import NavbarSecundary from "../pages/components/NavbarSecundary";
import { useModules } from "../hooks/Context/ModulesContext";

const LayoutSider = () => {
  const { loading } = useModules();

  return !loading ? (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col w-full">
        <div className="md:ml-64 mt-14 md:mt-24">
          <NavbarSecundary />
        </div>

        <div className="md:ml-64">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div style={{ color: "#FFF" }}>Loading...</div>
  );
};

export default LayoutSider;
