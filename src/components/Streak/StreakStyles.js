import styled from 'styled-components';

export const StreaksContainer = styled.div`
  flex: 1; /* Grow to fill remaining space */
  display: flex;
  padding-left: 50px;
  margin-top: 60px;
`;

export const Image = styled.img`
  max-width: 12%; /* Ensure image doesn't overflow */
  max-height: 8%;
  margin-top: 80px;
  padding-right: 5px;
`;