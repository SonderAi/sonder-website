import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'

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
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<PlaceholderPage title="Our Services" />} />
          <Route path="/projects" element={<PlaceholderPage title="Projects" />} />
          <Route path="/about" element={<PlaceholderPage title="About Us" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
          <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App