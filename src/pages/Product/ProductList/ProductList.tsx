import React from 'react';
import styled from 'styled-components';

const ProductList = () => {
  return (
    <Wrapper>
      <Header>
        <Title>Product List</Title>
        <UploadBtn>
          <PlusIcon>+</PlusIcon>
          <BtnText>Upload Product</BtnText>
        </UploadBtn>
      </Header>
    </Wrapper>
  );
};

export default ProductList;

const Wrapper = styled.div`
  padding: 34px 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 26px;
  line-height: 36.4px;
  letter-spacing: -0.3px;
`;

const PlusIcon = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-right: 6px;
  font-size: 18px;
  background-color: #fff;
  border-radius: 12px;
  color: #3d68ff;
`;

const BtnText = styled.span``;

const UploadBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 196px;
  height: 44px;
  border: none;
  border-radius: 12px;
  background-color: #3d68ff;
  color: #fff;
  font-weight: 600;
  line-height: 22.4px;
  cursor: pointer;
`;
