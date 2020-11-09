import styled from 'styled-components';
import CustomButton from './components/custom-button/custom-button.component';
import { device } from './utils/responsive';
export const ImgContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
`;

export const Video = styled.video`
  width: 100%;
  object-fit: cover;
  object-position: center center;
`;
export const BlackOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 4px;
  right: 0;
  left: 0;
  background: #00000033;
`;
export const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  color: white;
  top: 50%;

  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;

  animation: fadeIn ease 3s;
  animation-fill-mode: forwards;
  animation-delay: 4s;
  opacity: 0;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media ${device.laptop} {
    width: 75%;
  }
`;

export const Headline = styled.h1`
  text-shadow: 3px 3px rgba(0, 0, 0, 0.13);
  font-size: 1rem;
  font-weight: 500;
  margin: 0.5rem;

  @media ${device.tablet} {
    font-size: 1.5rem;
    margin: 0rem;
  }
  @media ${device.laptop} {
    font-size: 2rem;
    margin-bottom: 5rem;
  }
  @media ${device.laptopL} {
    margin: 4rem;
    font-size: 2.5rem;
  }
`;
export const Logo = styled.img`
  width: 40%;
  margin: 2rem;
`;

export const CTAButton = styled(CustomButton)`
  background-color: #8bd088;
  letter-spacing: 0.1rem;
  height: 30px;
  min-height: 30px;
  margin: 0;
  margin-bottom: 1rem;
  @media ${device.mobileL} {
    letter-spacing: 0.2rem;
    min-height: 40px;
    margin: 1rem;
  }
  @media ${device.tablet} {
    letter-spacing: 0.2rem;
    min-height: 40px;
    margin: 2rem;
  }
  @media ${device.laptopL} {
    min-height: 60px;
    font-size: 1.3rem;
    width: 30%;
  }
`;
export const Content = styled.main`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Founders = styled.div`
  display: flex;

  @media ${device.tablet} {
    margin: 4rem;
  }
`;

export const Story = styled.p`
  font-family: 'Lato';
  font-size: 1rem;
  line-height: 1.7;
  letter-spacing: 0.09rem;
  @media ${device.tablet} {
    font-size: 1.3rem;
  }
  @media ${device.laptopL} {
    font-size: 1.7rem;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  text-align: left;
`;

export const Item = styled.li`
  margin: 1rem;
  position: relative;
  font-weight: 600;
  &::before {
    content: '🌱 ';
    position: absolute;
    left: -36px;
    top: 0px;
  }
  @media ${device.tablet} {
    font-size: 1.3rem;
  }
  @media ${device.laptopL} {
    font-size: 1.7rem;
  }
`;
