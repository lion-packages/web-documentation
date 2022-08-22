import { Routes, Route } from 'react-router-dom'
import NavbarNavigation from './pages/components/NavbarNavigation'
import Dashboard from './pages/dashboard'
import NotFound from './pages/NotFound'
import LionRoute from './pages/libraries/LionRoute'
import LibraryContent from './pages/LibraryContent'
import LionFiles from './pages/libraries/LionFiles'
import LionCommand from './pages/libraries/LionCommand'
import LionMailer from './pages/libraries/LionMailer'
import LionRequest from './pages/libraries/LionRequest'
import LionSQL from './pages/libraries/LionSQL'
import LionSecurity from './pages/libraries/LionSecurity'

function App() {
  return (
    <>
      <NavbarNavigation />

      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Dashboard />} />

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
  )
}

export default App