import { Container } from "react-bootstrap";
import styles from './styles.module.css'
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";
const {container,wrapper}=styles 
export default function MainLayout() {
    return (<Container className={container} >
        <Header/>
        <div className={wrapper}></div>
        <Footer/>
  </Container>
  )
}