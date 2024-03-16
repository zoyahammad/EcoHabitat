import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  min-height: 30vh; /* Ensures the container takes up the full height of the viewport */
  flex-wrap: wrap; /* Allows the cards to wrap to the next row */
  margin-top: 1px;
  max-width: 800px;
  margin-left: auto; 
  margin-right: auto; 
  margin-top: 50px;
`;