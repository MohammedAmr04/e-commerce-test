import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import HeaderBasket from '../../eCommerce/HeaderBasket/HeaderBasket'

export default function Header() {
    return (
        <header className='pt-1 pb-1'>
            <div className='d-flex justify-content-between align-items-center'>
                <h1><Badge>Souq</Badge></h1>
                {/* Basket */}
                <HeaderBasket/>
            </div>
            <Navbar expand="lg" className=" bg-dark"
                data-bs-theme="dark"
            >
                <Container>
                    <Navbar.Brand href="#home">Souq</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Catgories</Nav.Link>
                            <Nav.Link href="#link">about</Nav.Link>
                        </Nav>
                        <Nav >
                            <Nav.Link href="#home">Login</Nav.Link>
                            <Nav.Link href="#home">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
      </header>
  )
}
