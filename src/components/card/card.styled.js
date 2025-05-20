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