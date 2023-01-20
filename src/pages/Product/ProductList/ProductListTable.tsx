import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
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
  isChecked: boolean;
}

const TH_LIST = [
  { list: 'Sales status' },
  { list: 'Product Name' },
  { list: 'Category' },
  { list: 'Price' },
  { list: 'Shipping fee' },
  { list: 'Upload date' },
  { list: 'Last edited' },
];

const ProductListTable = () => {
  const [productListData, setProductListData] = useState<ProductData[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const ITEMSPERPAGE = 10;
  const totalPage = Math.ceil(productListData.length / ITEMSPERPAGE);

  // TODO: 체크박스 상태값 변경 작업중
  const onCheckBoxClick = (id: number) => {
    const newData = productListData.map(item => {
      if (item.id === id) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });
    setProductListData(newData);
  };

  const onPrevClick = () => {
    if (currentPage <= 1) return;
    setCurrentPage(currentPage - 1);
  };

  const onNextClick = () => {
    if (currentPage >= totalPage) return;
    setCurrentPage(currentPage + 1);
  };

  const fetchProductData = () => {
    fetch('/data/ProductList.json')
      .then(res => res.json())
      .then(data => setProductListData(data as ProductData[]));
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <>
      <TableWrapper>
        <Table>
          <TableHead>
            <tr>
              <Th>
                <CheckBox type="checkbox" />
              </Th>
              {TH_LIST.map(({ list }) => {
                return <Th key={list}>{list}</Th>;
              })}
            </tr>
          </TableHead>

          <tbody>
            {/* TODO: 페이지당 10개로 수정 */}
            {productListData
              .slice(
                currentPage * ITEMSPERPAGE - ITEMSPERPAGE,
                currentPage * ITEMSPERPAGE
              )
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
                        <CheckBox
                          type="checkbox"
                          onClick={() => onCheckBoxClick(id)}
                        />
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
                          src="https://placeimg.com/64/64/nature"
                          alt="123"
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
      </TableWrapper>

      <PageBtnBox>
        <PageBtn onClick={onPrevClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </PageBtn>
        <CurrentPage>{currentPage}</CurrentPage>
        <PageBtn onClick={onNextClick}>
          <FontAwesomeIcon icon={faChevronRight} />
        </PageBtn>
      </PageBtnBox>
    </>
  );
};

export default ProductListTable;

const TableWrapper = styled.div`
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

const PageBtnBox = styled.div`
  margin-top: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const PageBtn = styled.button`
  border: 1px solid #eaecf0;
  background-color: transparent;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const CurrentPage = styled.span`
  font-weight: 600;
  font-size: 14px;
  width: 32px;
  text-align: center;
`;
