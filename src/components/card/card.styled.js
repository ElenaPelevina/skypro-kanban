import styled, { keyframes } from "styled-components";

const cardAnimation = keyframes`
0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
`

export const SCardsItem = styled.div`
  padding: 5px;
  /* &:hover {
    animation: ${cardAnimation} 500ms linear
  } */
  
`
export const SCardsCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`
export const SCardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SCardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`

export const SCardBtnDiv = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94A6BE;
`

export const SCardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

export const SCardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`

export const SCardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const SCardDateSvg = styled.svg`
width: 13px;
`

export const SCardDateP = styled.p`
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #94A6BE;
  letter-spacing: 0.2px;
`


export const cardColors = {
    "Web Design": "#FF6D00",
    Research:"#06B16E",
    Copywriting: "#9A48F1",
}

export const cardBackground = {
    "Web Design": "#FFE4C2",
    Research: "#B4FDD1",
    Copywriting: "#E9D4FF",
}

export const SCardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({$color}) => $color};
`

export const SFontTheme = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
  color: ${({$color}) => $color};
`
