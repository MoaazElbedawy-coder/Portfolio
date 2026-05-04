import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Themes from "./themes/Themes";
const AppLayout = () => {
  return (
    <>
      <Outlet />
      <Themes />
      <Navbar />      
    </>
  );
};

export default AppLayout;
