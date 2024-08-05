import styles from "./style.module.css";
import { Header, Footer } from "@components/common";
import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router-dom";

const { MainLayoutStyle } = styles;
const MainLayout = () => {
  return (
    <div className={MainLayoutStyle}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
