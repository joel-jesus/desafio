import styled from 'styled-components'
import { FaTh } from 'react-icons/fa'
import { FaThList } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  margin: 0 auto;
  height: 100%;
  margin-top: 10px;
`
export const Route = styled.span`
  margin-bottom: 10px;
  font-size: 12px;
  a {
    text-decoration: none;
    color: var(--custom-black);
  }
  a:active {
    color: var(--custom-red);
  }
`

export const ContainerMain = styled.div`
  margin-top: 10px;
  height: 100%;
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }
`

export const Filter = styled.div`
  width: 250px;
  padding: 10px;
  border: solid 1px rgba(232, 232, 232, 1);
  height: 350px;
  margin-right: 15px;

  h2 {
    color: var(--custom-red);
    margin-bottom: 10px;
  }
  h3 {
    color: #6c8f8b;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  a {
    text-decoration: none;
    color: #949494;
    font-size: 14px;
    font-weight: bold;
  }

  ul {
    list-style: none; /* Remove default bullets */
  }

  li {
    margin-bottom: 5px;
  }

  li::before {
    content: '• ';
    color: gray;
  }
`

export const Collor = styled.div`
  width: 50px;
  height: 25px;

  background: ${props => props.collor};
  margin-right: 3px;
`

export const BoxCards = styled.div`
  padding-right: 10px;
  width: 100%;

  h1 {
    color: var(--custom-red);
    font-weight: normal;
  }
`

export const ContainerCollor = styled.div`
  display: flex;
`

export const OrderList = styled.div`
  border-top: solid 1px rgba(232, 232, 232, 1);
  border-bottom: solid 1px rgba(232, 232, 232, 1);
  height: 30px;
  display: flex;
  justify-content: space-between;
`

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`
export const IconGrid = styled(FaTh)`
  font-size: 20px;
  margin-right: 10px;
  color: #84bcb9;
`
export const IconList = styled(FaThList)`
  font-size: 20px;
  color: #949494;
`

export const ContainerOrder = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  span {
    font-weight: bold;
    color: #949494;
    margin-right: 10px;
    font-size: 12px;
  }
  select {
    width: 150px;
    font-weight: bold;
    color: #949494;
    border: solid 1px rgba(232, 232, 232, 1);
  }
`

export const ContainerCards = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto auto auto;
  grid-row-gap: 20px;
  grid-column-gap: 10px;
  margin-top: 10px;

  @media only screen and (max-width: 960px) {
    grid-template-columns: auto auto auto;
  }
  @media only screen and (max-width: 760px) {
    grid-template-columns: auto auto;
  }
  @media only screen and (max-width: 390px) {
    grid-template-columns: auto;
  }
`
export default Container
