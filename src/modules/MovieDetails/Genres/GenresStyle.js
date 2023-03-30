import styled from 'styled-components';

export const GenreList = styled.ul`
  display: flex;
`;

export const GenreItem = styled.li`
  :not(:first-child) {
    margin-left: 10px;
  }
`;
