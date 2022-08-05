import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Box, Button, LogoImg } from '../styles';
import Raise_Your_Vote_Logo from '../img/Raise_Your_Vote_Logo.png';

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch('/api/logout', { method: 'DELETE' }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <>
      <Wrapper>
        <Nav>
          <Button variant="outline" onClick={handleLogoutClick}>
            Logout
          </Button>
        </Nav>
        
      </Wrapper>
      <LogoImg></LogoImg>
          {/* <div className="logo-small">
            <img src={Raise_Your_Vote_Logo} alt="Raise Your Vote logo" />
          </div> */}
    </>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;
