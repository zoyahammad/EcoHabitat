import styled from 'styled-components';

export const ImageContainer = styled.div`
  flex: 1; /* Grow to fill remaining space */
  display: flex;
  justify-content: flex-end; /* Align image to the right */
  padding-left: 170px;
`;

export const Image = styled.img`
  max-width: 100%; /* Ensure image doesn't overflow */
  margin-right: 0px;
`;