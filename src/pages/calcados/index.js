import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../../components/Header'
import Card from '../../components/Card'
import Link from 'next/link'
import { api } from '../../services/api'
import Footer from '../../components/Footer'

import {
  Container,
  Route,
  ContainerCards,
  Filter,
  BoxCards,
  Collor,
  ContainerCollor,
  OrderList,
  ContainerMain,
  Grid,
  IconGrid,
  IconList,
  ContainerIcon,
  ContainerOrder
} from './styles'

function Sapatos() {
  const [menuData, setMenuData] = useState([])
  const [produtcsData, setProductsData] = useState([])

  useEffect(() => {
    async function loadList() {
      const response = await api.get('/api/V1/categories/list')
      setMenuData(response.data.items)
    }
    loadList()
  }, [])

  useEffect(() => {
    async function loadProdutcs() {
      const response = await api.get('/api/V1/categories/shoes')
      setProductsData(response.data.items)
    }
    loadProdutcs()
  }, [])

  return (
    <>
      <Head>
        <title>Webjump - Calçados</title>
      </Head>
      <Header />
      <Container>
        <Route>
          <Link href="/">Página Inicial </Link>
          &gt;
          <Link href="/calcados"> Calçados</Link>
        </Route>
        <ContainerMain>
          <Filter>
            <h2>FILTRE POR</h2>
            <h3>CATEGORIAS</h3>
            <ul>
              {menuData.map(data => (
                <li key={data.id}>
                  <Link href={'/' + data.path}>{data.name}</Link>
                </li>
              ))}
            </ul>
            <h3>CORES</h3>
            <ContainerCollor>
              <Collor collor="#cc0d1f" />
              <Collor collor="#f36324" />
              <Collor collor="#28a3aa" />
            </ContainerCollor>

            <h3>TIPO</h3>
            <ul>
              <li>
                <Link href="#">Corrida</Link>
              </li>
              <li>
                <Link href="#">Caminhada</Link>
              </li>
              <li>
                <Link href="#">Casual</Link>
              </li>
              <li>
                <Link href="#">Social</Link>
              </li>
            </ul>
          </Filter>

          <ContainerCards>
            <BoxCards>
              <h1>Calçados</h1>

              <OrderList>
                <ContainerIcon>
                  <IconGrid />
                  <IconList />
                </ContainerIcon>

                <ContainerOrder>
                  <span>ORDENAR POR</span>
                  <select defaultValue="preco">
                    <option value="preco">Preço</option>
                  </select>
                </ContainerOrder>
              </OrderList>
            </BoxCards>

            <Grid>
              {produtcsData.map(data => (
                <Card
                  key={data.id}
                  name={data.name}
                  image={data.image}
                  price={data.price}
                />
              ))}
            </Grid>
          </ContainerCards>
        </ContainerMain>
      </Container>
      <Footer />
    </>
  )
}

export default Sapatos
