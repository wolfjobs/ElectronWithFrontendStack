import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
function App() {
    return (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx("a", { href: "https://vite.dev", target: "_blank", children: _jsx("img", { src: viteLogo, className: "logo", alt: "Vite logo" }) }), _jsx("a", { href: "https://react.dev", target: "_blank", children: _jsx("img", { src: reactLogo, className: "logo react", alt: "React logo" }) })] }), _jsxs("div", { className: "container", children: [_jsx("h1", { children: "Welcome to Electron Multi-Framework App" }), _jsx("button", { className: "btn", onClick: function () { return window.open('/src/renderer/react-app/'); }, children: "Go to React App" }), _jsx("button", { className: "btn", onClick: function () { return window.open('/src/renderer/vue-app/'); }, children: "Go to Vue App" }), _jsx("button", { className: "btn", onClick: function () { return window.open('/src/renderer/svelte-app/'); }, children: "Go to Svelte App" })] })] }));
}
export default App;
