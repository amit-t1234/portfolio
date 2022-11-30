import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Toggle from './Toggle';
import { ThemeContext, themes } from '../wrappers/ThemeContext';

const NavigationBar = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Navbar bg={ darkMode ? 'dark': 'light' } variant={ darkMode ? 'dark': 'light' } >
        <Container fluid className="px-5">
          <Navbar.Brand href="/">Amit Thakur</Navbar.Brand>
          <Nav>
            <Nav.Link href="/terminal">Terminal</Nav.Link>
            <Nav.Link href="/#about">About</Nav.Link>
            <Nav.Link href="/#contact">Contact</Nav.Link>
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
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
