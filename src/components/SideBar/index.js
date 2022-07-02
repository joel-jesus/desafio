import { useState, useEffect } from 'react'
import Link from 'next/link'
import { api } from '../../services/api.js'
import { Container } from './styles'

function SideBar() {
  const [menuData, setMenuData] = useState([])

  useEffect(() => {
    async function loadList() {
      const response = await api.get('/api/V1/categories/list')
      setMenuData(response.data.items)
    }

    loadList()
  }, [])
  return (
    <Container>
      <ul>
        <li>
          <Link href="/">
            <a>Página Inicial</a>
          </Link>
        </li>
        {menuData.map(data => (
          <li key={data.id}>
            <Link href={'/' + data.path}>{data.name}</Link>
          </li>
        ))}

        <li>
          <Link href="/">
            <a>Contato</a>
          </Link>
        </li>
      </ul>
    </Container>
  )
}

export default SideBar
