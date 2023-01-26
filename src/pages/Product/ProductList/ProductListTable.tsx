import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import StatusChangeModal from './StatusChangeModal';
import { flexBox } from '../../../styles/mixin';

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

interface Props {
  searchValue: string;
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

const ProductListTable = ({ searchValue }: Props) => {
  const [checkedList, setCheckedList] = useState<number[]>([]);
  const [isChangeModalOpen, setIsChangeModalOpen] = useState(false);
  const [productListData, setProductListData] = useState<ProductData[]>([]);
  const [searchData, setSearchData] = useState<ProductData[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const ITEMSPERPAGE = 10;
  const totalPage =
    searchValue === ''
      ? Math.ceil(productListData.length / ITEMSPERPAGE)
      : Math.ceil(searchData.length / ITEMSPERPAGE);

  const slicedProductData =
    searchValue === ''
      ? productListData.slice(
          currentPage * ITEMSPERPAGE - ITEMSPERPAGE,
          currentPage * ITEMSPERPAGE
        )
      : searchData.slice(
          currentPage * ITEMSPERPAGE - ITEMSPERPAGE,
          currentPage * ITEMSPERPAGE
        );

  const onChangeStatusClick = () => setIsChangeModalOpen(true);

  const onAllCheckBoxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    if (target.checked) {
      const idArray: number[] = [];
      slicedProductData.forEach(el => idArray.push(el.id));
      setCheckedList(idArray);
    } else {
      setCheckedList([]);
    }
  };

  const onSingleCheckBoxClick = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const target = e.target as HTMLInputElement;

    if (target.checked) {
      setCheckedList(prev => [...prev, id]);
    } else {
      setCheckedList(checkedList.filter(el => el !== id));
    }
  };

  const onPrevClick = () => {
    if (currentPage <= 1) return;
    setCurrentPage(currentPage - 1);
    setCheckedList([]);
  };

  const onNextClick = () => {
    if (currentPage >= totalPage) return;
    setCurrentPage(currentPage + 1);
    setCheckedList([]);
  };

  const fetchProductData = () => {
    fetch('/data/ProductList.json')
      .then(res => res.json())
      .then(data => setProductListData(data as ProductData[]));
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    if (searchValue === '') return;

    const searchedData = productListData.filter(data => {
      return data.productInfo.toLowerCase().includes(searchValue.toLowerCase());
    });
    setSearchData(searchedData);
  }, [searchValue]);

  return (
    <>
      {isChangeModalOpen && (
        <StatusChangeModal setIsChangeModalOpen={setIsChangeModalOpen} />
      )}
      <StatusChangeButtonBox>
        <StatusChangeButton
          onClick={onChangeStatusClick}
          disabled={checkedList.length === 0}
        >
          Change product status
        </StatusChangeButton>
      </StatusChangeButtonBox>

      <TableWrapper>
        <Table>
          <TableHead>
            <tr>
              <Th>
                <CheckBox
                  type="checkbox"
                  onChange={e => onAllCheckBoxClick(e)}
                  checked={checkedList.length === slicedProductData.length}
                />
              </Th>
              {TH_LIST.map(({ list }) => {
                return <Th key={list}>{list}</Th>;
              })}
            </tr>
          </TableHead>

          <tbody>
            {slicedProductData.map(
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
                        onChange={e => onSingleCheckBoxClick(e, id)}
                        checked={checkedList.includes(id)}
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

const StatusChangeButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 12px;
`;

const StatusChangeButton = styled.button`
  ${flexBox()}
  width: 160px;
  height: 40px;
  border: ${({ disabled }) => (disabled ? 'none' : '1px solid #3d68ff')};
  border-radius: 12px;
  background-color: ${({ disabled }) => (disabled ? '#EAECF0' : 'transparent')};
  color: ${({ disabled }) => (disabled ? '#CED1D8' : '#3d68ff')};
  font-size: 13px;
  font-weight: 500;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;

const TableWrapper = styled.div`
  margin-top: 12px;
  overflow-x: scroll;
  border: ${({ theme }) => theme.globalBoardStyle};
  border-radius: 10px 10px 0 0;
`;

const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  appearance: none;
  border: 1px solid #ced1d8;
  border-radius: 2px;
  background-color: #fff;
  cursor: pointer;

  &:checked {
    background: url('/images/check.svg') no-repeat;
    background-color: #21caa1;
    background-position: center;
    border-color: #21caa1;
  }
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
  border: ${({ theme }) => theme.globalBoardStyle};

  &:nth-child(3) {
    text-align: left;
    padding-left: 16px;
  }
`;

const Td = styled.td`
  min-width: ${({ width }) => width}px;
  vertical-align: middle;
  text-align: center;
  border: ${({ theme }) => theme.globalBoardStyle};
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
  color: ${({ theme }) => theme.FreeShippingColor};
  background-color: ${({ theme }) => theme.FreeShippingBackGroundColor};
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
  color: ${({ theme }) => theme.OnSaleColor};
  background-color: ${({ theme }) => theme.OnSaleBackGroundColor};
`;

const SoldOut = styled(OnSale)`
  color: ${({ theme }) => theme.SoldOutColor};
  background-color: ${({ theme }) => theme.SoldOutBackGroundColor};
`;

const WaitingForSale = styled(OnSale)`
  color: ${({ theme }) => theme.WaitingForSaleColor};
  background-color: ${({ theme }) => theme.WaitingForSaleBackGroundColor};
`;

const PageBtnBox = styled.div`
  ${flexBox()}
  margin-top: 56px;
  gap: 8px;
`;

const PageBtn = styled.button`
  border: 1px solid #eaecf0;
  border-radius: 4px;
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
