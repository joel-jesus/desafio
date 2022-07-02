import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '../Navbar'

import {
  Container,
  AcessRegister,
  TopHeader,
  LinkStyle,
  MainHeader,
  Logo,
  Search,
  Input,
  Button,
  IconSearch,
  IconClose,
  InputMobile,
  MobileMenu
} from './styles'

function Header() {
  const [clickSearch, setClickSearch] = useState(false)
  const [clickMobile, setclickMobile] = useState(true)

  const handleClick = () => setClickSearch(!clickSearch)
  const handleClickMobile = () => setclickMobile(!clickMobile)

  return (
    <Container>
      <TopHeader>
        <AcessRegister>
          <Link href="#" passHref>
            <LinkStyle>Acesse sua Conta</LinkStyle>
          </Link>
          ou
          <Link href="#" passHref>
            <LinkStyle>Cadastre-se</LinkStyle>
          </Link>
        </AcessRegister>
      </TopHeader>

      <MainHeader>
        <MobileMenu onClick={handleClickMobile} />

        <Logo />
        <Search>
          {clickSearch ? null : (
            <>
              <Input />
              <Button>BUSCAR</Button>
            </>
          )}

          {clickSearch ? (
            <>
              <IconClose onClick={handleClick} />
              <InputMobile />
            </>
          ) : (
            <>
              <IconSearch onClick={handleClick} />
            </>
          )}
        </Search>
      </MainHeader>

      {clickMobile ? <Navbar selected={false} /> : <Navbar selected={true} />}

      {/* <Navbar selected={false} /> */}
    </Container>
  )
}

export default Header
