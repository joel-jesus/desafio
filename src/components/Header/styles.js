import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'

export const Container = styled.header`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
`

export const TopHeader = styled.div`
  width: 100%;
  height: 20px;
  background: var(--custom-black);
`

export const AcessRegister = styled.div`
  height: 20px;
  background: var(--custom-black);
  color: white;
  font-size: 0.8em;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  text-align: right;
  padding: 3px;
  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`

export const LinkStyle = styled.a`
  color: white;
  padding-left: 5px;
  padding-right: 5px;
`

export const MobileMenu = styled(FaBars)`
  color: var(--custom-black);
  font-size: 50px;
  cursor: pointer;
  margin: 10px;
  display: none;
  min-width: 30px;
  @media only screen and (max-width: 600px) {
    display: block;
  }
`

export const MainHeader = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  justify-content: space-between;

  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`
export const Logo = styled.div`
  height: 100%;

  background-image: url('/img/logo.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
  display: flex;
  width: 100%;
  min-width: 180px;
`
export const Search = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  align-items: center;
`

export const Input = styled.input`
  height: 30px;
  width: 250px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`

export const InputMobile = styled.input`
  height: 30px;
  width: 70%;
  position: absolute;
  margin-top: 40px;
  right: 35px;
`

export const Button = styled.button`
  width: 80px;
  height: 30px;
  background: var(--custom-red);
  color: white;
  border: 0;
  font-weight: 700;
  margin-right: -15px;

  @media only screen and (max-width: 600px) {
    visibility: hidden;
    display: none;
  }
`

export const IconSearch = styled(FaSearch)`
  color: var(--custom-red);
  font-size: 25px;
  cursor: pointer;
  visibility: hidden;

  @media only screen and (max-width: 600px) {
    visibility: visible;
    margin-right: 25px;
  }
`

export const IconClose = styled(FaTimes)`
  color: var(--custom-red);
  font-size: 25px;
  cursor: pointer;
  margin-right: 25px;
`
