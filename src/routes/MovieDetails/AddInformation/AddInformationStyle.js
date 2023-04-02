import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BackButton = styled.button`
  margin-bottom: 10px;
`;

export const AddInfTitle = styled.p`
  margin-bottom: 10px;
`;

export const Link = styled(NavLink)`
  display: block;
  :not(:last-child) {
    margin-bottom: 6px;
  }
`;

export const AddInfWrapper = styled.div`
  padding: 30px 0;
  border-top: 2px solid gray;
  border-bottom: 2px solid gray;
  margin-bottom: 20px;
`;
