import React from 'react';
import styled from 'styled-components';

// ToDo: props로 넘어온 데이터가 있을때/없을때 나눠서 설계
// ToDo: 디테일페이지에서 edit할때도 이 컴포넌트를 사용할 수 있게끔 설계해야함
interface inputProps {
  productName: string;
  placeHolder: string;
}

const InputForm: React.FC<inputProps> = ({
  productName,
  placeHolder,
}: inputProps) => {
  return <Input placeholder={placeHolder} value={productName} />;
};

export default InputForm;

const Input = styled.input`
  border: 1px solid;
  border-radius: 12px;
  border-color: ${({ theme }) => theme.gray300};

  padding: 10px;
`;
