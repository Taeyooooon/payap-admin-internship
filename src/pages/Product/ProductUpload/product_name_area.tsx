import React, { useState } from 'react';
import styled from 'styled-components';
import InputForm from '../../../components/common/input_form';
import Subtitle from '../../../components/common/subtitle';

// ToDo: 이 페이지에서 데이터를 받아서 inputForm에게 props로 전달
const ProductNameAreaContainer = () => {
  const [productName, setProductName] = useState<string | undefined>('');

  return (
    <NameAreaContainer>
      <Subtitle>Product name *</Subtitle>
      <InputForm
        inputInitialValue={productName}
        placeHolder="Product name"
        setValueFnc={setProductName}
      />
    </NameAreaContainer>
  );
};

export default ProductNameAreaContainer;

const NameAreaContainer = styled.div`
  /* border: 1px solid red; */
`;
