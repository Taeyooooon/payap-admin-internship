import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Subtitle: React.FC<Props> = ({ children }) => {
  return <SubTitle>{children}</SubTitle>;
};

export default Subtitle;

const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 10px;
`;
