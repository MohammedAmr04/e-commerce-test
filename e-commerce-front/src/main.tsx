import ReactDOM from 'react-dom/client';
import MainLayout from './layouts/MainLayout/MainLayout';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Container>
    <MainLayout/>
  </Container>
);
