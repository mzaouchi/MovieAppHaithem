import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const NavMovie=()=>{
    return(
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Movie APP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/ListMovies'>Movies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavMovie