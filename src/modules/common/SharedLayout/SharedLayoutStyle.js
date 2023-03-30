import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  padding: 30px;
  margin-bottom: 10px;
  box-shadow: 0 8px 6px -6px black;
`;

export const Link = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  font-weight: 600;
  :first-child {
    margin-right: 20px;
  }

  &.active {
    color: red;
  }
`;

export const Container = styled.div`
  padding: 0 30px;
`;
