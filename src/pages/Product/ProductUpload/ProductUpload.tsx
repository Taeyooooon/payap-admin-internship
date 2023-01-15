import React from 'react';
import styled from 'styled-components';

const ProductUpload = () => {
  return (
    <Wrapper>
      <Title>Upload Product</Title>
    </Wrapper>
  );
};

export default ProductUpload;

const Wrapper = styled.div`
  padding: 34px 24px;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 26px;
  line-height: 36.4px;
  letter-spacing: -0.3px;
`;
