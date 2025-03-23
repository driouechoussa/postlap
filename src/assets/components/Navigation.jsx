
import {Container , Nav , Navbar } from 'react-bootstrap'
import logo from '../images/logo.svg'

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-white">
      <Container>
        <Navbar.Brand href="#home"><img width={100} src={logo} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="me-auto  m-auto">
            <Nav.Link className='mx-4' href="#home">home</Nav.Link>
            <Nav.Link className='mx-4' href="#link">about</Nav.Link>
            <Nav.Link className='mx-4' href="#link">categores</Nav.Link>
            <Nav.Link className='mx-4' href="#link">events</Nav.Link>
            <Nav.Link className='mx-4' href="#link">contact</Nav.Link>
          </Nav>
          <button className='btn-account px-4 shadow-sm' type="button">join us</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default Navigation;