import { Link } from "react-router-dom";
import logo from "./../../assets/img/icon_white_bg.png";
import SelectVersionButton from "./SelectVersionButton";
import { useModules } from "../../hooks/Context/ModulesContext";

const Sidebar = () => {
  const { modules } = useModules();

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-dark-100 border-b border-gray-400">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
              </button>
              <Link to={"/"} className="flex gap-1 items-center m-0 p-0">
                <img src={logo} width={36} height={36} />
                <span className="font-semibold text-white">Lion-Packages</span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button type="button" className="flex text-sm text-white rounded-full focus:ring-2" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                    <span className="sr-only">Open user menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>

                  </button>
                </div>
                <div className="z-50 hidden my-4 text-base list-none rounded shadow  divide-gray-600" id="dropdown-user">

                  <ul className="py-1" role="none">
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 " role="menuitem">Dashboard</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full  sm:translate-x-0 bg-dark-100 border-gray-700" aria-label="Sidebar">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-dark-100">
          <ul className="space-y-2 text-sm">
            {modules.docs &&
              modules.docs.map((doc, index) => (
                <li key={index}>
                  <Link
                    to={doc.uri}
                    className="flex items-center p-2 rounded-lg text-white hover:bg-dark-300"
                  >
                    <span className="ml-3">{doc.id}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </aside>
    </>

  );
};

export default Sidebar;
