import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ProductData {
  id: number;
  saleStatus: string;
  productInfo: string;
  category: string;
  price: string;
  shippingFee: string;
  uploadDate: string;
  lastEdited: string;
}

interface CurrentPageProps {
  currentPage: number;
}

const ProductListTable = ({ currentPage }: CurrentPageProps) => {
  const [productListData, setProductListData] = useState<ProductData[]>([]);

  const fetchProductData = () => {
    fetch('/data/ProductList.json')
      .then(res => res.json())
      .then(data => setProductListData(data as ProductData[]));
  };

  useEffect(() => {
    fetchProductData();
  }, []);
  console.log(currentPage);

  return (
    <Wrapper>
      <Table>
        <TableHead>
          <tr>
            <Th>
              <CheckBox type="checkbox" />
            </Th>
            <Th>Sales status</Th>
            <Th>Product Name</Th>
            <Th>Category</Th>
            <Th>Price</Th>
            <Th>Shipping fee</Th>
            <Th>Upload date</Th>
            <Th>Last edited</Th>
          </tr>
        </TableHead>

        <tbody>
          {/* TODO: 페이지당 10개로 수정 */}
          {productListData
            .slice(currentPage * 5 - 5, currentPage * 5)
            .map(
              ({
                id,
                saleStatus,
                productInfo,
                category,
                price,
                shippingFee,
                uploadDate,
                lastEdited,
              }) => {
                return (
                  <tr key={id}>
                    <Td width={64}>
                      <CheckBox type="checkbox" />
                    </Td>
                    <Td width={140}>
                      {saleStatus === 'On sale' ? (
                        <OnSale>{saleStatus}</OnSale>
                      ) : saleStatus === 'Sold out' ? (
                        <SoldOut>{saleStatus}</SoldOut>
                      ) : (
                        <WaitingForSale>{saleStatus}</WaitingForSale>
                      )}
                    </Td>
                    <ProductInfo width={264}>
                      <img
                        src="https://placeimg.com/64/64/any"
                        alt="123"
                        width="64px"
                        height="64px"
                        className="productImg"
                      />
                      <ProductLink to="#">{productInfo}</ProductLink>
                    </ProductInfo>
                    <Td width={160}>{category}</Td>
                    <Td width={160}>
                      <Price>{price}</Price>
                    </Td>
                    <Td width={160}>
                      {shippingFee === 'Free Shipping' ? (
                        <FreeShipping>FREE Shipping</FreeShipping>
                      ) : (
                        <Price>{shippingFee}</Price>
                      )}
                    </Td>
                    <Td width={160}>{uploadDate}</Td>
                    <Td width={160}>{lastEdited}</Td>
                  </tr>
                );
              }
            )}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default ProductListTable;

const Wrapper = styled.div`
  margin-top: 12px;
  overflow-x: scroll;
  border: 1px solid #dfe1e6;
  border-radius: 10px 10px 0 0;
`;

const CheckBox = styled.input`
  border: 1px solid red;
  border-radius: 10px;
  background-color: red;
`;

const Table = styled.table`
  font-size: 14px;
  border-style: hidden;
  width: 100%;
`;

const TableHead = styled.thead`
  background-color: #f4f5f8;
  font-weight: 600;
`;

const Th = styled.th`
  height: 48px;
  vertical-align: middle;
  border: 1px solid #dfe1e6;

  &:nth-child(3) {
    text-align: left;
    padding-left: 10px;
  }
`;

const Td = styled.td`
  min-width: ${props => props.width}px;
  vertical-align: middle;
  text-align: center;
  border: 1px solid #dfe1e6;
  height: 92px;
`;

const ProductInfo = styled(Td)`
  & .productImg {
    border-radius: 4px;
    margin: 10px;
    float: left;
  }
`;

const ProductLink = styled(Link)`
  color: #1f66df;
  text-decoration: underline;
  text-align: left;
  line-height: 18px;
  margin: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const FreeShipping = styled.span`
  display: inline-block;
  font-size: 10px;
  line-height: 14px;
  padding: 3px 6px;
  border-radius: 4px;
  font-weight: 700;
  color: #3d68ff;
  background: #f1f4ff;
`;

const Price = styled.span`
  font-weight: 700;
  letter-spacing: -0.035em;
`;

const OnSale = styled.span`
  font-weight: 700;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 4px;
  color: #2e7d31;
  background-color: #e8f5e9;
`;

const SoldOut = styled(OnSale)`
  color: #e33d1c;
  background-color: #fce9e8;
`;

const WaitingForSale = styled(OnSale)`
  color: #f09f02;
  background-color: #ffeece;
`;
