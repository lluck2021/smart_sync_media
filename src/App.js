import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { ColorModeContext, useMode } from './theme';
import Topbar from './pages/global/Topbar';
import Sidebar from './pages/global/Sidebar';
import Dashboard from './pages/dashboard';
import PostMedia from './pages/posting';
import AIimage from './pages/ai_image';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/posting" element={<PostMedia />} />
              <Route path="/ai_image" element={<AIimage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;