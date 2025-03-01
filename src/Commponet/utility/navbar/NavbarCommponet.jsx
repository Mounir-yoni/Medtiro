/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoimage from "../../../image/Logo.png";
import "./utility.css";
import { Link } from "react-router-dom";
export default function NavbarComponent() {
  const [scrolled, setScrolled] = useState(false);

  
  const [showDropdown, setShowDropdown] = useState({
    pages: false,
    blog: false,
    service: false,
  });

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1000);


  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = (dropdownName) => {
    if (isDesktop) {
      setShowDropdown((prevState) => ({
        ...prevState,
        [dropdownName]: true,
      }));
    }
    
  };

  const handleMouseLeave = (dropdownName) => {
    if (isDesktop) {
      
      setShowDropdown((prevState) => ({
        ...prevState,
        [dropdownName]: false,
      }));
    }
  };
  

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
      style={{ position: "fixed", top: "0", zIndex: "1000",width:"100%" }}
    >
      <Container style={{ maxWidth: "100%" }}>
        <Navbar.Brand href="/">
          <img
            style={{ marginLeft: "50px" }}
            src={logoimage}
            alt="React Bootstrap logo"
            title="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ backgroundColor: "#ffff" }}>
          <Nav className="me-auto">
            <Nav.Link href="/"
             >Home</Nav.Link>
            <NavDropdown
                        title="Pages"
                        onMouseEnter={() => handleMouseEnter("pages")}
                        onMouseLeave={() => handleMouseLeave("pages")}
                        show={showDropdown.pages}
                        onClick={() => {
                          setShowDropdown((prevState) => ({
                            ...prevState,
                            pages: !prevState.pages, // Toggle the dropdown on click
                          }));
                        }}
                        id="basic-nav-dropdown"
                      >
              <Link to={"/aboutas"} style={{width:"100%"}}>
              About Us
              </Link>
              <Link to={"/team"}>
               Our Team
              </Link>
              <Link to={"/faq"}>
              FAQ's
              </Link>
              <Link to={"/booking"}>
              Booking
              </Link>
              <Link to={"/pagenotfound"}>
              Error 404
              </Link>
              <Link to={"/login"}>
              Login / Register
              </Link>

            </NavDropdown>
            <NavDropdown title="Service" id="basic-nav-dropdown"               
            onClick={() => {
              setShowDropdown((prevState) => ({
                ...prevState,
                service: !prevState.service, // Toggle the dropdown on click
              }));
              }}  onMouseEnter={() => handleMouseEnter("service")}
              onMouseLeave={() => handleMouseLeave("service")} show={showDropdown.service}>
              <Link  onMouseEnter={() => handleMouseEnter("service")} to="/service">Service</Link>
              <Link to={"/serviceDetails"}>Service Details</Link>
            </NavDropdown>
            <NavDropdown title="Blog" id="basic-nav-dropdown"  onMouseEnter={() => handleMouseEnter("blog")}
              onMouseLeave={() => handleMouseLeave("blog")} show={showDropdown.blog}
              onClick={() => {
                
                  setShowDropdown((prevState) => ({
                    ...prevState,
                    blog: !prevState.blog, // Toggle the dropdown on click
                  }));
                
              }}
              >
                <Link to="/blog" onMouseEnter={() => handleMouseEnter("blog")}>Blogs</Link>
              <Link to="/blogDetails">Blog Details</Link>
            </NavDropdown>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Nav.Link href="#search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </Nav.Link>
            <Nav.Link href="#phone">Icon</Nav.Link>
            <Nav.Link href="#phone">(+01) 999 888 777</Nav.Link>
            <button className="contact-us-button">
              Contact Us
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </span>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
