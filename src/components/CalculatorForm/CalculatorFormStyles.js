import styled from 'styled-components';
import { Checkbox } from '@material-ui/core';

export const test = styled.section`
  display: flex;
  justify-content: center;
  min-height: 30vh; 
  flex-wrap: wrap;
  margin-top: 1px;
  max-width: 400px;
  margin-left: auto; 
  margin-right: auto; 
`;

export const StyledCheckbox = styled(Checkbox)`
  color: blue; // Change the color to red
  font-size: 3.8rem;
`;

export const FormContainer = styled.section`
  min-height: 30vh; 
  margin-top: 1px;
  max-width: 400px;
  margin-left: 80px; 
`;
