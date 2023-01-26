import React, { useState } from 'react';
import styled from 'styled-components';
import InputForm from '../../../components/common/input_form';
import Subtitle from '../../../components/common/subtitle';

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

const NameAreaContainer = styled.div``;
