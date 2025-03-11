import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import FeaturesPage from './pages/FeaturesPage'
import ServicesPage from './pages/ServicesPage'
import { AdminRoute, AdminLink } from './components/admin'

// Placeholder pages that will be developed later
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="container mx-auto px-4 py-24">
    <h1 className="text-3xl font-bold mb-6">{title}</h1>
    <p className="text-text-secondary">
      This page is under development. Content will be added soon.
    </p>
  </div>
)

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Route - Only accessible in development mode */}
        <Route path="/admin" element={<AdminRoute />} />
        
        {/* Main Site Routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<FeaturesPage />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
          <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
        </Route>
      </Routes>
      
      {/* Admin Link - Only visible in development mode */}
      <AdminLink />
    </Router>
  )
}

export default App