import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import { LangProvider } from './contexts/LangContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { DetailProvider } from './contexts/DetailContext';
import ProjectDetail from './pages/ProjectDetail';


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Header />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'portfolio',
          element: <Portfolio />,
        },
        {
          path: 'resume',
          element: <Resume />,
        },
        {
          path: 'portfolio/:id',
          element: <ProjectDetail />
        }
      ]
    }
  ]
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LangProvider>
        <DetailProvider>
          <RouterProvider router={router} />
        </DetailProvider>
      </LangProvider>
    </ThemeProvider>
  </StrictMode>,
)
