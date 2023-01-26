import React from 'react';
import styled from 'styled-components';

interface inputProps {
  inputInitialValue: string | undefined;
  placeHolder: string;
  setValueFnc: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const InputForm: React.FC<inputProps> = ({
  inputInitialValue,
  placeHolder,
  setValueFnc,
}: inputProps) => {
  return (
    <Input
      placeholder={placeHolder}
      value={inputInitialValue}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setValueFnc(`${e.target.value}`);
      }}
    />
  );
};

export default InputForm;

const Input = styled.input`
  border: 1px solid;
  border-radius: 12px;
  border-color: ${({ theme }) => theme.gray300};

  width: 100vh;
  padding: 10px;
`;
