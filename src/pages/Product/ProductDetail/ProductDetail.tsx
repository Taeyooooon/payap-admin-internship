import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

const ProductDetail = () => {
  return (
    <Wrapper>
      <Header>
        <Title>Prouct details</Title>
        <EditBtn>
          <FontAwesomeIcon icon={faPenToSquare} size="lg" />
          <span>Edit</span>
        </EditBtn>
      </Header>

      <DateBox>
        <DateTitle>Upload date</DateTitle>
        <Date>29-04-2022 20:00</Date>
        <DateTitle>Last edited</DateTitle>
        <Date>29-04-2022 20:00</Date>
      </DateBox>

      <ProductDataSection>
        <Img src="https://placeimg.com/328/328/nature" alt="product img" />
        <InfoBox>
          <Info>
            <CategoryText>여성의류</CategoryText>
            <ProductNameText>
              Product Name Product Name Product Name Product Name
            </ProductNameText>
            <ProductOriginalPrice>310.000 đ</ProductOriginalPrice>
            <ProductPriceBox>
              <ProductSalePercentage>10%</ProductSalePercentage>
              <ProductPrice>279.000 ₫</ProductPrice>
            </ProductPriceBox>
            <DeliveryBadge>miễn phí vận chuyển</DeliveryBadge>
          </Info>
          <InfoBtnBox>
            <SaleBadge>On sale</SaleBadge>
            <ChageStatusBtn>Change product status</ChageStatusBtn>
          </InfoBtnBox>
        </InfoBox>
      </ProductDataSection>

      <Devider />

      <ProductInfoSection>
        <H3>Product Information</H3>
      </ProductInfoSection>

      <Devider />

      <DescriptionSection>
        <H3>Description</H3>
      </DescriptionSection>

      <Devider />

      <OptionSection>
        <H3>Option</H3>
      </OptionSection>
    </Wrapper>
  );
};

export default ProductDetail;

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

const EditBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 160px;
  height: 40px;
  border: 1px solid #dfe1e6;
  border-radius: 12px;
  background-color: #fff;
  font-size: 14px;
  cursor: pointer;
`;

const DateBox = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 16px;
  margin-top: 28px;
  border: 1px solid #dfe1e6;
`;

const Date = styled.span`
  flex: 1;
  padding: 6px 8px;
`;

const DateTitle = styled(Date)`
  flex: 0.8;
  background-color: #f4f5f8;
`;

const ProductDataSection = styled.section`
  margin: 20px 0;
  display: flex;
  gap: 16px;
`;

const Img = styled.img`
  border-radius: 4px;
`;

const InfoBox = styled.div``;

const Info = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid #eaecf0;
`;

const CategoryText = styled.span`
  display: block;
  font-size: 14px;
  line-height: 20px;
  color: #777f8b;
`;

const ProductNameText = styled.span`
  display: block;
  margin-top: 8px;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  max-width: 328px;
`;

const ProductOriginalPrice = styled.span`
  margin-top: 2px;
  color: #aeb4be;
  font-size: 18px;
  line-height: 25px;
  text-decoration: line-through;
`;

const ProductPriceBox = styled.div`
  font-size: 22px;
  font-weight: 700;
  line-height: 31px;
  margin-top: 2px;
  margin-right: 4px;
`;

const ProductSalePercentage = styled.span`
  margin-right: 4px;
  color: #21caa1;
`;

const ProductPrice = styled.span``;

const DeliveryBadge = styled.span`
  display: block;
  width: fit-content;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #3d68ff;
  background-color: #f1f4ff;
  border-radius: 4px;
  padding: 4px 6px;
  margin-top: 2px;
`;

const InfoBtnBox = styled.div`
  margin-top: 16px;
`;

const SaleBadge = styled.span`
  font-family: 'Noto Sans';
  display: block;
  width: fit-content;
  color: #2e7d31;
  font-weight: 700;
  font-size: 12px;
  line-height: 17px;
  padding: 1.5px 6px;
  background-color: #e8f5e9;
  border-radius: 4px;
`;

const ChageStatusBtn = styled.button`
  margin-top: 16px;
  color: #3d68ff;
  background-color: #fff;
  border: 1px solid #3d68ff;
  border-radius: 12px;
  padding: 11px 13px;
  font-weight: 500;
  cursor: pointer;
`;

const Devider = styled.div`
  height: 8px;
  background: #f4f5f8;
  width: calc(100% + 24 * 2);
  margin: 0 -24px;
`;

const ProductInfoSection = styled.section`
  margin: 20px 0;
`;

const H3 = styled.h3`
  font-weight: 700;
  line-height: 22px;
`;

const DescriptionSection = styled.section`
  margin: 20px 0;
`;

const OptionSection = styled.section`
  margin: 20px 0;
`;
