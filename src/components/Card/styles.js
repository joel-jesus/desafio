import styled, { keyframes } from 'styled-components'

const ScaleAnimation = keyframes`
 from {   
    transform: 0;
  }
  to {
   transform: rotateZ(0) scale(1.5);
  }
`

export const Cards = styled.div`
  width: 180px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  img {
    border: 1px solid rgba(232, 232, 232, 1);
    &:hover {
      animation: ${ScaleAnimation} 0.8s ease-in forwards;
      border-radius: 15px;
    }
  }
  h4 {
    margin-top: 10px;
    color: #949494;
    text-transform: uppercase;
    /* border: solid 2px pink; */
    text-align: center;
  }
  h3 {
    margin-top: 10px;
    color: var(--custom-red);
    font-weight: 700;
  }
  button {
    margin-top: 10px;
    background-color: #80bdb8;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    padding: 10px 20px;
    width: 90%;
    &:hover {
      background: var(--custom-red);
      opacity: 0.8;
      transition: 0.5s;
    }
  }
`
