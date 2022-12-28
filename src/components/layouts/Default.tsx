import { Outlet } from "react-router-dom";
import { FC } from "react";
import NavBarDeault from "../NavBarDefault";

const Layout: FC = () => {
  return (
    <div>
      <NavBarDeault />
      <Outlet />
    </div>
  );
};
export default Layout;
