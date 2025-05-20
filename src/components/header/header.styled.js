import styled from "styled-components";

export const SHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;  
`
export const SContainer = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
    @media (max-width: 495px) {
        width: 100%;
        padding: 0 16px;
    }
`
export const SHeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px; 
`