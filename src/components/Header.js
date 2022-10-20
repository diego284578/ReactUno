import "./Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




function Header() {
 
    return (
                
        <Navbar variant="dark" bg="dark" expand="lg"  >
            <Container fluid>
                <Navbar.Brand href="#home" className="fs-3 ">Kadafi</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav  className="me-auto   container-fluid d-flex  flex-row-reverse">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
                        <NavDropdown title="Categorias" id="nav-dropdown-dark-example" menuVariant="dark"  >
                            <NavDropdown.Item href="#action/3.1"  >Pc-Armada</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" >
                                Procesadores/Coolers cpus
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" >Mothers</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4" >
                                Memorias Ram
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5" >
                                Almacenamiento
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4" >
                                Placas de Videos
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4" >
                                Gabinetes, Fuentes y Coolers
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4" >
                                Monitores
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4" >
                                Teclados Y Mouses
                            </NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;