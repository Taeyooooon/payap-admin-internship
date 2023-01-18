import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

interface BtnListItem {
  id: number;
  title: string;
  icon: any;
  link: string;
  list: {
    id: number;
    item: string;
    link: string;
  }[];
}

const BTN_LIST: BtnListItem[] = [
  {
    id: 1,
    title: 'Order Management',
    icon: faClipboard,
    link: 'order-list',
    list: [{ id: 1, item: 'Order List', link: 'order-list' }],
  },
  {
    id: 2,
    title: 'Products',
    icon: faBoxArchive,
    link: 'product-list',
    list: [
      { id: 1, item: 'Product list', link: 'product-list' },
      { id: 2, item: 'Upload product', link: 'product-upload' },
    ],
  },
];

const Aside = () => {
  const location = useLocation();
  const pathName = location.pathname.substring(1);

  const [btnClicked, setBtnClicked] = useState<string>(pathName);

  const onListClick = (link: string) => setBtnClicked(link);

  return (
    <Wrapper>
      <LogoSection>
        <img src="/images/lienmall-logo.svg" alt="logo" />
        <LogoText>Giftmall</LogoText>
      </LogoSection>
      <MenuSection>
        {BTN_LIST.map(({ id, title, icon, link, list }) => {
          return (
            <ListWrapper key={id}>
              <Link to={link}>
                <ListTitle
                  btnClicked={btnClicked === link}
                  onClick={() => onListClick(link)}
                >
                  <FontAwesomeIcon icon={icon} size="lg" className="icon" />
                  <span>{title}</span>
                </ListTitle>
              </Link>
              {btnClicked === link && (
                <List>
                  {list.map(({ id, item, link }) => {
                    return (
                      <Link key={id} to={link}>
                        <Item isClicked={pathName === link}>{item}</Item>
                      </Link>
                    );
                  })}
                </List>
              )}
            </ListWrapper>
          );
        })}
      </MenuSection>
    </Wrapper>
  );
};

export default Aside;

const Wrapper = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 220px;
  padding: 0 16px;
  background-color: #2a2e35;
`;

const LogoSection = styled.section`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 56px;
  padding: 20px 0;
`;

const LogoText = styled.span`
  font-weight: 500;
  line-height: 24px;
  color: #888888;
`;

const MenuSection = styled.section`
  margin-top: 16px;
`;

const ListWrapper = styled.div``;

const ListTitle = styled.button`
  background-color: ${({ btnClicked }: { btnClicked: boolean }) =>
    btnClicked ? 'rgba(255, 255, 255, 0.08)' : 'transparent'};
  color: #f4f5f8;
  text-align: left;
  border: none;
  border-radius: 8px;
  width: 100%;
  height: 48px;
  padding: 8px;
  cursor: pointer;

  .icon {
    margin: 0 8px;
    width: 18px;
    height: 18px;
  }
`;

const List = styled.ul``;

const Item = styled.li`
  font-size: 12px;
  line-height: 17px;
  padding: 10px 0 10px 42px;
  color: #aeb4be;
  color: ${({ isClicked }: { isClicked: boolean }) =>
    isClicked ? '#7D99FF' : '#aeb4be'};
  cursor: pointer;
`;
