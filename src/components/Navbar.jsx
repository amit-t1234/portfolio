import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Toggle from './Toggle';
import { ThemeContext, themes } from '../wrappers/ThemeContext';

const NavigationBar = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg={ darkMode ? 'dark': 'light' } variant={ darkMode ? 'dark': 'light' } >
        <Container fluid className="px-5">
          <Navbar.Brand eventKey="1" href="/">Amit Thakur</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link eventKey="2" href="/terminal">Terminal</Nav.Link>
              <Nav.Link eventKey="3" href="/#about">About</Nav.Link>
              <Nav.Link eventKey="4" href="/#contact">Contact</Nav.Link>
              <Nav.Link eventKey="5" href="javascript:void(0)">
                <ThemeContext.Consumer>
                  {({ changeTheme }) => (
                    <Toggle label="DarkMode"
                      isDark={ darkMode }
                      toggleDark={() => {
                        localStorage.setItem('darkMode', !darkMode);
                        setDarkMode(!darkMode);
                        changeTheme(darkMode ? themes.light : themes.dark);
                      }}
                    />
                  )}
                </ThemeContext.Consumer>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
