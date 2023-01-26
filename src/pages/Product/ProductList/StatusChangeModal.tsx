import React from 'react';
import styled from 'styled-components';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { flexBox, positionCenter } from '../../../styles/mixin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  setIsChangeModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const StatusChangeModal = ({ setIsChangeModalOpen }: Props) => {
  const onCloseClick = () => setIsChangeModalOpen(false);

  return (
    <Wrapper>
      <Header>
        <Title>Change product status</Title>
        <FontAwesomeIcon
          onClick={onCloseClick}
          icon={faXmark}
          size="lg"
          className="icon"
        />
      </Header>

      <SelectBox>
        <RadioBox>
          <Radio type="radio" id="1" name="status" />
          <Label htmlFor="1">Waiting for sale</Label>
        </RadioBox>
        <RadioBox>
          <Radio type="radio" id="2" name="status" />
          <Label htmlFor="2">On sale</Label>
        </RadioBox>
        <RadioBox>
          <Radio type="radio" id="3" name="status" />
          <Label htmlFor="3" color="red">
            Sold out
          </Label>
        </RadioBox>
      </SelectBox>

      <BtnSection>
        <CancleBtn onClick={onCloseClick}>Cancle</CancleBtn>
        <SaveBtn>Save</SaveBtn>
      </BtnSection>
    </Wrapper>
  );
};

export default StatusChangeModal;

const Wrapper = styled.div`
  ${positionCenter('fixed')}
  width: 360px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.4);
`;

const Header = styled.div`
  ${flexBox()};
  position: relative;
  height: 44px;

  & .icon {
    position: absolute;
    right: 19px;
    top: 12px;
    cursor: pointer;
  }
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.56px;
`;

const SelectBox = styled.div`
  margin: 20px 16px 32px;
`;

const RadioBox = styled.div`
  height: 20px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
`;

const Radio = styled.input`
  appearance: none;
  border: 1px solid #ced1d8;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: grid;
  margin: 0;
  place-content: center;
  cursor: pointer;

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    transform: scale(0);
    box-shadow: inset 16px 16px #21caa1;
  }

  &:checked::before {
    transform: scale(1);
  }

  &:checked {
    border: 1px solid #21caa1;
  }
`;

const Label = styled.label`
  color: ${({ color }) => (color === 'red' ? '#DF2A33' : '#0B0D11')};
  font-size: 14px;
  margin-left: 8px;
  cursor: pointer;
`;

const BtnSection = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 8px 16px;
  border-top: ${({ theme }) => theme.globalBoardStyle};
`;

const CancleBtn = styled.button`
  width: 112px;
  height: 48px;
  border: ${({ theme }) => theme.globalBoardStyle};
  border-radius: 12px;
  background-color: transparent;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
`;

const SaveBtn = styled(CancleBtn)`
  border-color: #2a2e35;
`;
