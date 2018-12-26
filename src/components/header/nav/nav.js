import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/social">Social floorball</Link>
      </li>
      <li>
        <Link to="/competitive">Competitions</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
