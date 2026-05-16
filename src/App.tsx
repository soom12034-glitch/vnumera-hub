import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainSite from './MainSite'
import Login from './admin/Login'
import AdminLayout from './admin/AdminLayout'
import Dashboard from './admin/Dashboard'
import SoftwareManager from './admin/SoftwareManager'
import ContentEditor from './admin/ContentEditor'
import FileManager from './admin/FileManager'
import Settings from './admin/Settings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="software" element={<SoftwareManager />} />
          <Route path="content" element={<ContentEditor />} />
          <Route path="files" element={<FileManager />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
