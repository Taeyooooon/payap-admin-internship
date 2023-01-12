import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

interface BtnListItem {
  id: number;
  title: string;
  icon: any;
  list: {
    id: number;
    item: string;
  }[];
}

const BTN_LIST: BtnListItem[] = [
  {
    id: 1,
    title: 'Order Management',
    icon: faClipboard,
    list: [{ id: 1, item: 'Order / Shipping' }],
  },
  {
    id: 2,
    title: 'Products',
    icon: faBoxArchive,
    list: [
      { id: 1, item: 'Product list' },
      { id: 2, item: 'Upload product' },
    ],
  },
];

const Aside = () => {
  const [btnClicked, setBtnClicked] = useState<string>('Order Management');

  const onListClick = (title: string) => {
    setBtnClicked(title);
  };

  return (
    <Wrapper>
      <LogoSection>
        <img src="#" alt="logo" />
        <LogoText>Giftmall</LogoText>
      </LogoSection>
      <MenuSection>
        {BTN_LIST.map(({ id, title, icon, list }) => {
          console.log(`${title} ' s boolean : `, btnClicked === title);
          return (
            <ListWrapper key={id}>
              <ListTitle
                btnClicked={btnClicked === title}
                onClick={() => {
                  onListClick(title);
                }}
              >
                <FontAwesomeIcon icon={icon} size="lg" className="icon" />
                <span>{title}</span>
              </ListTitle>
              {btnClicked === title && (
                <List>
                  {list.map(({ id, item }) => {
                    return <Item key={id}>{item}</Item>;
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
  padding: 0 10px;
  background-color: #2a2e35;
`;

const LogoSection = styled.section`
  height: 56px;
  padding: 20px 0;
`;

const LogoText = styled.span`
  font-weight: 500;
  line-height: 16px;
  color: #888888;
`;

const MenuSection = styled.section``;

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
  cursor: pointer;
`;
