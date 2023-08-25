import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: ${props => props.height || '100%'};
  cursor: pointer;
  background-color: #368BEA;
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
  letter-spacing: 1px;
  font-family: Roboto, sans-serif;

  &:hover{
    opacity: 0.75;
  }
`;