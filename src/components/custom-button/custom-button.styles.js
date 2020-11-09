import styled, { css } from 'styled-components';
import { device } from '../../utils/responsive';

const largeButtonStyles = css`
  padding: 0 35px 0 35px;
  height: 4rem;
`;
const smallButtonStyles = css`
  padding: 0 15px 0 15px;
  height: 2rem;
`;

const invertedButtonStyles = css`
  &:hover {
    border: 1px solid black;
    background-color: white;
    color: black;
  }
`;

const getButtonStyles = ({ large }) => {
  return large ? largeButtonStyles : smallButtonStyles;
};

export const CustomButtonContainer = styled.button`
  width: ${({ newsLetter = false }) => (newsLetter ? '100%' : 'auto')};
  min-width: 160px;
  min-height: 50px;
  letter-spacing: 0.5px;
  letter-spacing: 0.3rem;
  font-family: 'Lato';
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #001e1d;
  color: white;
  border: none;
  border-radius: 4px;
  margin: 2rem 0;
  ${getButtonStyles}
  ${({ inverted }) => (inverted ? invertedButtonStyles : null)}
  transition: all 0.15s ease-in-out 0s;

  @media ${device.mobileS} {
    font-size: 0.75rem;
  }
  @media ${device.mobileM} {
    font-size: 0.75rem;
  }
  @media ${device.mobileL} {
    font-size: 0.75rem;
  }
  @media ${device.mobileXL} {
    font-size: 0.875rem;
  }
  @media ${device.tablet} {
    font-size: 0.875rem;
    width: ${({ newsLetter = false }) => (newsLetter ? '50%' : 'auto')};
  }
  @media ${device.laptop} {
    font-size: 0.875rem;
  }
  @media ${device.laptopL} {
    font-size: 0.875rem;
  }
`;
