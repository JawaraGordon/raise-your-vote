import React from 'react';
import { Button, Nav, NavWrapper } from '../styles';
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
      <NavWrapper>
        <Nav>
          <Button variant="outline" onClick={handleLogoutClick}>
            Logout
          </Button>
        </Nav>
      </NavWrapper>
    </>
  );
}

export default NavBar;
