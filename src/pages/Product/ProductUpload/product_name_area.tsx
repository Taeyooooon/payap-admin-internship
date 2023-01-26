import React from 'react';
import styled from 'styled-components';
import Subtitle from '../../../components/common/subtitle';
const ProductNameAreaContainer = () => {
  return (
    <NameAreaContainer>
      <Subtitle>Product name *</Subtitle>
    </NameAreaContainer>
  );
};

export default ProductNameAreaContainer;

const NameAreaContainer = styled.div`
  border: 1px solid red;
`;
