import { Routes, Route } from 'react-router-dom';
import './assets/css/index.css';
import NavbarNavigation from './pages/components/NavbarNavigation';
import Dashboard from './pages/dashboard';
import NotFound from './pages/NotFound';
import LionRoute from './pages/libraries/LionRoute';
import LibraryContent from './pages/LibraryContent';
import LionFiles from './pages/libraries/LionFiles';
import LionCommand from './pages/libraries/LionCommand';
import LionMailer from './pages/libraries/LionMailer';
import LionRequest from './pages/libraries/LionRequest';
import LionSQL from './pages/libraries/LionSQL';
import LionSecurity from './pages/libraries/LionSecurity';
import FrameworkContent from './pages/FrameworkContent';
import GettingStarted from './pages/framework/GettingStarted';
import Commands from './pages/framework/Commands';
import Headers from './pages/framework/Headers';
import Request from './pages/framework/Request';
import Response from './pages/framework/Response';
import Security from './pages/framework/Security';
import Carbon from './pages/framework/Carbon';
import FrameworkRoutes from './pages/framework/Routes';
import Controllers from './pages/framework/Controllers';
import Middleware from './pages/framework/Middleware';
import Models from './pages/framework/Models';
import Rules from './pages/framework/Rules';

function App() {
  return (
    <>
      <NavbarNavigation />

      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Dashboard />} />

        <Route path='framework' element={<FrameworkContent />}>
          <Route path='getting-started' element={<GettingStarted />} />
          <Route path='commands' element={<Commands />} />
          <Route path='headers' element={<Headers />} />
          <Route path='request' element={<Request />} />
          <Route path='response' element={<Response />} />
          <Route path='security' element={<Security />} />
          <Route path='carbon' element={<Carbon/>} />
          <Route path='routes' element={<FrameworkRoutes />} />
          <Route path='controllers' element={<Controllers />} />
          <Route path='middleware' element={<Middleware />} />
          <Route path='models' element={<Models />} />
          <Route path='rules' element={<Rules />} />
        </Route>

        <Route path='libraries' element={<LibraryContent />}>
          <Route path='files' element={<LionFiles />} />
          <Route path='command' element={<LionCommand />} />
          <Route path='mailer' element={<LionMailer />} />
          <Route path='request' element={<LionRequest />} />
          <Route path='sql' element={<LionSQL />} />
          <Route path='security' element={<LionSecurity />} />
          <Route path='route' element={<LionRoute />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;