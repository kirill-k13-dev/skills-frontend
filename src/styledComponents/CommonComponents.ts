import {styled} from "styled-components";


const Container = styled.div`
    padding: 20px;
`;

const FlexContainer = styled.div`
    display: flex;
`;

const SubmitButton = styled.button<{ $color?: string; $backgroundColor?: string; }>`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  border: none;
  height: 42px;
  padding: 0 24px;
  text-align: center;
  font-size: 16px;
  position: relative;
  overflow: hidden;
  border-radius: 50px;
  color: ${props => props.$color};
  background-color: ${props => props.$backgroundColor};
`;

export {Container, FlexContainer,  SubmitButton};
