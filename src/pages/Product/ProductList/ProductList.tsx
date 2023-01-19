import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import ProductListTable from './ProductListTable';

const FILTER_ITEM = [
  // TODO: isClicked 로직 추가
  { id: 1, item: 'All(5)' },
  { id: 2, item: 'Waiting for sale(1)' },
  { id: 3, item: 'On sale(2)' },
  { id: 4, item: 'Sold out(2)' },
];

const ProductList = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All(5)');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(10);
  const navigate = useNavigate();

  const onFilterItemClick = (item: string) => setSelectedFilter(item);

  const onPrevClick = () => {
    if (currentPage <= 1) return;
    setCurrentPage(currentPage - 1);
  };

  const onNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Wrapper>
      <Header>
        <Title>Product List</Title>
        <UploadBtn
          onClick={() => {
            navigate('/product-upload');
          }}
        >
          <PlusIcon>+</PlusIcon>
          <span>Upload Product</span>
        </UploadBtn>
      </Header>

      <FilterList>
        {FILTER_ITEM.map(({ id, item }) => {
          return (
            <FilterItem
              key={id}
              selected={selectedFilter === item}
              onClick={() => onFilterItemClick(item)}
            >
              {item}
            </FilterItem>
          );
        })}
      </FilterList>

      <SearchBox>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
        <SearchInput placeholder="Search product name" />
      </SearchBox>

      <StatusChangeButtonBox>
        <StatusChangeButton>Change product status</StatusChangeButton>
      </StatusChangeButtonBox>

      <ProductListTable currentPage={currentPage} />

      <PageBtnBox>
        <PageBtn onClick={onPrevClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </PageBtn>
        <CurrentPage>{currentPage}</CurrentPage>
        <PageBtn onClick={onNextClick}>
          <FontAwesomeIcon icon={faChevronRight} />
        </PageBtn>
      </PageBtnBox>
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
  font-size: 16px;
  letter-spacing: -0.5px;
  line-height: 22.4px;
  cursor: pointer;
`;

const FilterList = styled.ul`
  display: flex;
  margin-top: 44px;
  border-bottom: 1px solid #eaecf0;
`;

const FilterItem = styled.li`
  border-bottom: 2px solid
    ${({ selected }: { selected: boolean }) =>
      selected ? '#3D68FF' : 'trasparent'};
  color: ${({ selected }: { selected: boolean }) =>
    selected ? '#3D68FF' : '#AEB4BE'};
  font-weight: ${({ selected }: { selected: boolean }) =>
    selected ? '700' : '400'};
  padding-bottom: 12px;
  font-size: 14px;
  margin-left: 16px;
  cursor: pointer;
`;

const SearchBox = styled.div`
  margin-top: 20px;
  position: relative;

  & .icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #dfe1e6;
  border-radius: 12px;
  padding: 0 40px;

  &::placeholder {
    color: #ced1d8;
  }
`;

const StatusChangeButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 12px;
`;

const StatusChangeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 40px;
  border: 1px solid #3d68ff;
  border-radius: 12px;
  background-color: transparent;
  color: #3d68ff;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
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
