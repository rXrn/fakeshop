import logo from "./logo.svg";
import "./App.css";
import { Button, DatePicker } from "antd";
import Navigation from "./components/layout/Navigation";
import { useEffect } from "react";
import TestLayout from "./components/layout/TestLayout";
import { Products } from "./components/pages/Products";
import { Outlet } from "react-router-dom";

<Button className=""></Button>;
function App() {
  useEffect(() => {
    document.title = "Fake Shop";
  });
  return (
    <>
      <link
        rel="shortcut icon"
        type="image/vnd.microsoft.icon"
        href="/assets/favicon.ico"
      />
      <Navigation>Home</Navigation>
      <Outlet />
    </>
  );
}

export default App;
