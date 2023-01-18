import React from 'react';
import styled from 'styled-components';

const PRODUCT_DATA = [
  {
    id: 1,
    saleStatus: 'On sale',
    productInfo:
      'Women Deep V Neck Strip Jumpsuit Short Sleeve Romp HI Romp HI Romp HI',
    category: '여성의류',
    price: '279,000',
    shippingFee: 'Free Shipping',
    uploadDate: '29-04-2022 20:00',
    lastEdited: '29-04-2022 20:00',
  },
  {
    id: 2,
    saleStatus: 'On sale',
    productInfo:
      'Women Deep V Neck Strip Jumpsuit Short Sleeve Romp HI Romp HI Romp HI',
    category: '여성의류',
    price: '279,000',
    shippingFee: 'Free Shipping',
    uploadDate: '29-04-2022 20:00',
    lastEdited: '29-04-2022 20:00',
  },
  {
    id: 3,
    saleStatus: 'Sold out',
    productInfo:
      'Women Deep V Neck Strip Jumpsuit Short Sleeve Romp HI Romp HI Romp HI',
    category: '여성의류',
    price: '279,000',
    shippingFee: 'Free Shipping',
    uploadDate: '29-04-2022 20:00',
    lastEdited: '29-04-2022 20:00',
  },
  {
    id: 4,
    saleStatus: 'Sold out',
    productInfo:
      'Women Deep V Neck Strip Jumpsuit Short Sleeve Romp HI Romp HI Romp HI',
    category: '여성의류',
    price: '279,000',
    shippingFee: 'Free Shipping',
    uploadDate: '29-04-2022 20:00',
    lastEdited: '29-04-2022 20:00',
  },
  {
    id: 5,
    saleStatus: 'Waiting for sale',
    productInfo:
      'Women Deep V Neck Strip Jumpsuit Short Sleeve Romp HI Romp HI Romp HI',
    category: '여성의류',
    price: '279,000',
    shippingFee: 'Free Shipping',
    uploadDate: '29-04-2022 20:00',
    lastEdited: '29-04-2022 20:00',
  },
];

const ProductListTable = () => {
  return (
    <Wrapper>
      <Table>
        <TableHead>
          <tr>
            <Checkbox>
              <input type="checkbox" />
            </Checkbox>
            <Th>Sales status</Th>
            <Th>Product Name</Th>
            <Th>Category</Th>
            <Th>Price</Th>
            <Th>Shipping fee</Th>
            <Th>Upload date</Th>
            <Th>Last edited</Th>
          </tr>
        </TableHead>

        <TableBody>
          {PRODUCT_DATA.map(
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
                    <input type="checkbox" />
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
                  <Td width={264}>{productInfo}</Td>
                  <Td width={160}>{category}</Td>
                  <Td width={160}>{price}</Td>
                  <Td width={160}>
                    {shippingFee === 'Free Shipping' ? (
                      <FreeShipping>FREE Shipping</FreeShipping>
                    ) : (
                      shippingFee
                    )}
                  </Td>
                  <Td width={160}>{uploadDate}</Td>
                  <Td width={160}>{lastEdited}</Td>
                </tr>
              );
            }
          )}
        </TableBody>
      </Table>
    </Wrapper>
  );
};

export default ProductListTable;

const Wrapper = styled.div`
  overflow-x: scroll;
`;

const Table = styled.table`
  margin-top: 64px;
  font-size: 14px;
  border-collapse: separate;
  border-spacing: 0;

  & tr:first-child th:first-child {
    border: 1px solid #dfe1e6;
    border-top-left-radius: 10px;
  }

  & tr:first-child th:last-child {
    border: 1px solid #dfe1e6;
    border-top-right-radius: 10px;
  }
`;

const TableHead = styled.thead`
  background-color: #f4f5f8;
`;

const Checkbox = styled.th`
  width: 64px;
  vertical-align: middle;
`;

const Th = styled.th`
  height: 48px;
  vertical-align: middle;
  border: 1px solid #dfe1e6;
`;

const TableBody = styled.tbody`
  border: 1px solid #dfe1e6;
`;

const Td = styled.td`
  min-width: ${props => props.width}px;
  vertical-align: middle;
  text-align: center;
  border: 1px solid #dfe1e6;
  height: 92px;
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
