import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import './css/index.css';

import ErrorPage from "./error-page";
import ErrorBoundary from './components/ErrorBoundary';
import HomePage from './pages/home/Home';
import Layout from './components/Layout';
import Lab1 from './pages/lab1/Lab1';
import Lab2 from './pages/lab2/Lab2';
import Lab3 from './pages/lab3/Lab3';
import Lab4 from './pages/lab4/Lab4';
import Lab5 from './pages/lab5/Lab5';
import Lab6 from './pages/lab6/Lab6';
import Lab7 from './pages/lab7/Lab7';
import Lab8 from './pages/lab8/Lab8';

ReactDOM.createRoot(document.getElementById('root')).render(
     <ErrorBoundary>
     <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="lab1" element={<Lab1 />} />
          <Route path="lab2" element={<Lab2 />} />
          <Route path="lab3" element={<Lab3 />} />
          <Route path="lab4" element={<Lab4 />} />
          <Route path="lab5" element={<Lab5 />} />
          <Route path="lab6" element={<Lab6 />} />
          <Route path="lab7" element={<Lab7 />} />
          <Route path="lab8" element={<Lab8 />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
     </BrowserRouter>
     </ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
