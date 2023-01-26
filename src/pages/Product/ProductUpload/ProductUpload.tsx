import React from 'react';
import styled from 'styled-components';
import ProductNameAreaContainer from './product_name_area';
const ProductUpload = () => {
  return (
    <ContentsContainer>
      <PageTitle>Upload product</PageTitle>
      <RemarkMandatoryInput>* Mandatory field.</RemarkMandatoryInput>
      <ProductNameAreaContainer />
    </ContentsContainer>
  );
};

export default ProductUpload;

const ContentsContainer = styled.div`
  padding: 30px 30px 30px 270px;
`;

const PageTitle = styled.div`
  padding: 0px 0px 50px 0px;
  font-size: 22px;
  font-weight: 600;
`;
const RemarkMandatoryInput = styled.div`
  padding: 0px 0px 30px 0px;
  right: 30%;
  display: flex;
  justify-content: flex-end;
  font-size: 18px;
`;
