import { Container } from "react-bootstrap";
import styles from "./styles.module.css";
import Header from "@components/common/Header/Header";
import Footer from "@components/common/Footer/Footer";
import { Outlet } from "react-router-dom";
const { container, wrapper } = styles;
export default function MainLayout() {
  return (
    <div className={container}>
      <Header />
      <Container className={wrapper}>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}
