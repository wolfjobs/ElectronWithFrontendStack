import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
createRoot(document.getElementById('app')).render(_jsx(StrictMode, { children: _jsx(App, {}) }));
