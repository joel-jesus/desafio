import styled from 'styled-components'

export const Page = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  height: 100%;
  margin-top: 10px;

  display: flex;
`
export const Container = styled.div`
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
`

export const TopBox = styled.div`
  height: 100%;
  min-height: 80px;
  background-color: #acacac;
`

export const Welcome = styled.div`
  height: 100%;
  font-size: 12px;
  h3 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`
export const Footer = styled.footer`
  background-color: var(--custom-red);
  height: 150px;
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 10px;
  @media only screen and (max-width: 1024px) {
    margin: 10px;
  }
`
export default Container
