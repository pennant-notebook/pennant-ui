import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from './utils/MuiImports';
import { ToastContainer } from 'react-toastify';
import LandingPage from './components/Landing/LandingPage';
import 'react-toastify/dist/ReactToastify.css';
import UserDashboard from './components/Landing/UserDashboard';
import NotebookRoute from './components/Landing/NotebookRoute';
import ThemeManager from './contexts/ThemeManager';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeManager theme={theme} toggleTheme={toggleTheme}>
      <Box sx={{ height: '100vh' }}>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/:username' element={<UserDashboard />} />
            <Route path='/:username/:docID' element={<NotebookRoute />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeManager>
  );
}

export default App;
