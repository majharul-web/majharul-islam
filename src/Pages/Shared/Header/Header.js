import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const location = useLocation();
  const style = {
    backgroundColor: "#dff3f5",
  };

  // Function to check if the link is active
  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <Navbar collapseOnSelect expand='lg' variant='light' style={style} className='navbar-padding'>
      <Container>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mx-auto'>
            <Nav.Link as={Link} to='/home' className={`item ${isActive("/home")}`}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='/about' className={`item ${isActive("/about")}`}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to='/portfolio' className={`item ${isActive("/portfolio")}`}>
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to='/contact' className={`item ${isActive("/contact")}`}>
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to='/blog' className={`item ${isActive("/blog")}`}>
              Blog
            </Nav.Link>
            <Button
              variant='outline-success'
              className='btn-font fs-6'
              href='https://drive.google.com/file/d/1s-5dAuqEBIiFd99p67RcLK7feC6xyxpN/view?usp=sharing'
              target='blank'
            >
              Resume
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
