import styled, { keyframes } from 'styled-components';
import { device } from '../../utils/responsive';

export const SingleTeamMemberContainer = styled.div`
  background: white;
  width: 100%;
  min-height: 5rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  @media ${device.mobileS} {
  }
  @media ${device.mobileM} {
  }
  @media ${device.mobileL} {
  }
  @media ${device.mobileXL} {
    flex-direction: row;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
  @media ${device.laptopL} {
  }
`;

export const NameAndPictureContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  height: auto;

  margin-right: 0;

  @media ${device.mobileS} {
  }
  @media ${device.mobileM} {
  }
  @media ${device.mobileL} {
  }
  @media ${device.mobileXL} {
    margin-right: 2rem;
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
  @media ${device.laptopL} {
  }
`;

export const ProfileImageContainer = styled.div`
  width: 5rem;
  height: 5rem;

  margin-bottom: 1rem;

  z-index: 99;

  @media ${device.mobileS} {
  }
  @media ${device.mobileM} {
    width: 7rem;
    height: 7rem;
  }
  @media ${device.mobileL} {
  }
  @media ${device.mobileXL} {
    margin-bottom: 0;
  }
  @media ${device.tablet} {
    width: 9rem;
    height: 9rem;
  }
  @media ${device.laptop} {
  }
  @media ${device.laptopL} {
    width: 12rem;
    height: 12rem;
  }
`;

export const CycleColorsLight = keyframes`

0% {
  border-color: hsl(130, 100%, 28%);
}
25% {
  border-color: hsl(130, 100%, 23%);
}
50% {
  border-color: hsl(130, 100%, 18%);
}
75% {
  border-color: hsl(130, 100%, 40%);
}
100% {
  border-color: hsl(130, 100%, 15%);
}

`;

export const Pulse = keyframes`

    to {
      opacity: 05;
      transform: scale(1);
    }
  
`;

export const AvatarAnimLight = styled.div`
  height: 100%;
  position: relative;
  width: 100%;

  &::before,
  &::after {
    animation: ${Pulse} 1s linear infinite, ${CycleColorsLight} 6s linear infinite;
    border: #fff solid 8px;
    border-radius: 9999px;
    box-sizing: border-box;
    content: ' ';
    height: 140%;
    left: -20%;
    opacity: 1;
    position: absolute;
    top: -20%;
    transform: scale(0.714);
    width: 140%;
    z-index: 1;
  }

  &::after {
    animation-delay: 1s;
  }

  &:hover::before,
  &:hover::after {
    animation: ${Pulse} 1s linear infinite, ${CycleColorsLight} 6s linear infinite;
  }

  &:hover::after {
    animation-delay: 0.5s;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: 50% 20%;
`;
