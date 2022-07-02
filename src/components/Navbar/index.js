import { useState, useEffect } from 'react'
import Link from 'next/link'
import { api } from '../../services/api.js'

import { Container, Nav } from './styles'

function Navbar(props) {
  const [menuData, setMenuData] = useState([])

  useEffect(() => {
    async function loadList() {
      const response = await api.get('/api/V1/categories/list')
      setMenuData(response.data.items)
    }

    loadList()
  }, [])

  return (
    <Container selected={props.selected}>
      <Nav>
        <ul>
          <li>
            <Link href="/">
              <a>PÁGINA INICIAL</a>
            </Link>
          </li>

          {menuData.map(data => (
            <li key={data.id}>
              <Link href={'/' + data.path}>{data.name}</Link>
            </li>
          ))}

          <li>
            <Link href="#">
              <a>CONTATO</a>
            </Link>
          </li>
        </ul>
      </Nav>
    </Container>
  )
}

export default Navbar
