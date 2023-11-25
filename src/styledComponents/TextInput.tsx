import {styled, keyframes} from "styled-components";
import React, {ChangeEventHandler, KeyboardEventHandler, RefObject} from "react";


const inputHighlighter = keyframes`
  from {
    background: #5264AE;
  }
  to {
    width: 0;
    background: transparent;
  }
`;

const Group = styled.div`
  position: relative;
  margin-bottom: 45px;
`;
const Input = styled.input`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #757575;
  background: lightgray;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    top: -20px;
    font-size: 14px;
    color: #5264AE;
  }

  /* active state */
  &:focus ~ .bar:before, &:focus ~ .bar:after {
    width: 50%;
  }
  &:focus ~ .highlight {
    -webkit-animation: ${inputHighlighter} 0.3s ease;
    -moz-animation: ${inputHighlighter} 0.3s ease;
    animation: ${inputHighlighter} 0.3s ease;
  }
`;
const Highlight = styled.span`
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
`;
const Bar = styled.span`
  position: relative;
  display: block;
  width: 300px;

  &:before, &:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #5264AE;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }
`;
const Label = styled.label<{ $existValue: boolean }>`
  left: 5px;
  top: ${props => props.$existValue ? '-20px' : '12px'};
  color: ${props => props.$existValue ? '#5264AE' : '#999'};
  font-size: ${props => props.$existValue ? '14px' : '18px'};
  font-weight: normal;
  position: absolute;
  pointer-events: none;

  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`;

interface ITextInput {
    label?: string,
    value: string | number,
    type: string,
    required: boolean,
    inputRef: RefObject<HTMLInputElement>,
    onChange: ChangeEventHandler<HTMLInputElement>
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>
}

const TextInput: React.FC<ITextInput> = ({label, type, value, required, inputRef, onChange, onKeyDown}) => (
    <Group>
        <Input
            ref={inputRef}
            value={value}
            type={type}
            required={required}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
        <Highlight className={'highlight'}/>
        <Bar className={'bar'}/>
        <Label $existValue={!!value}>{label}</Label>
    </Group>
);

export default TextInput;
