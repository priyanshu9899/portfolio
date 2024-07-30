import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoadingPage from './components/LoadingPage.jsx';

// Lazy load your components
const App = lazy(() => import('./App.jsx'));
const About = lazy(() => import('./components/About.jsx'));
const Projects = lazy(() => import('./components/Projects.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const Dyslexify = lazy(() => import('./components/Dyslexify.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/dyslexify",
    element: <Dyslexify />
  },
  {
    path: "*",
    element: <div>404 not found</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
