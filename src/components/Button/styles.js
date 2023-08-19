import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  /* background-color: #046ee5; */
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, #78e4ff, #32b08d);
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;

  &:hover{
    opacity: 0.85;
  }
`;