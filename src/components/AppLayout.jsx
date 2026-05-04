import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Themes from "./themes/Themes";
const Applayout = () => {
  return (
    <>
      <Outlet />
      <Themes />
      <Navbar />      
    </>
  );
};

export default Applayout;
