import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Dashboard from './pages/Dashboard';
import Editor from './pages/Editor';
import Templates from './pages/Templates';
import Preview from './pages/Preview';
import ResumePreview from './pages/ResumePreview';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/resume-preview" element={<ResumePreview />} />
        </Routes>
      </Layout>
      <Toaster position="top-center" />
    </Router>
  );
}

export default App;