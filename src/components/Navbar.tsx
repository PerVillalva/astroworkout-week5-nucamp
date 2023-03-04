import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AstroLogo from "@/assets/astroworkout-logo.png";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <NavbarBs
            bg="white"
            expand="lg"
            fixed="top"
            className="shadow-sm mb-3 py-3"
        >
            <Container>
                <NavbarBs.Brand href="/">
                    <img
                        alt=""
                        src={AstroLogo}
                        className="d-inline-block align-top"
                        width={35}
                        height={35}
                    />{" "}
                    AstroWorkout
                </NavbarBs.Brand>
                <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
                <NavbarBs.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link to="/" as={NavLink}>
                            Home
                        </Nav.Link>

                        <Nav.Link to="/about" as={NavLink}>
                            About
                        </Nav.Link>

                        <Nav.Link to="/contact" as={NavLink}>
                            Contact
                        </Nav.Link>
                    </Nav>
                </NavbarBs.Collapse>
            </Container>
        </NavbarBs>
    );
};

export default Navbar;
