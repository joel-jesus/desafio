import Head from 'next/head'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'

import { Page, Container, TopBox, Welcome } from './styles'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Webjump - Store</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Header />
      <Page>
        <SideBar />
        <Container>
          <TopBox />
          <Welcome>
            <h3>Seja bem-vindo!</h3>
            <p>
              Lorem ipsum dolor sit amet. Vel aliquam nemo aut velit sunt quo
              repudiandae magnam qui voluptas sapiente? Nam numquam galisum ea
              aliquam velit et cupiditate libero. Ut reiciendis aliquam aut
              commodi quaerat est possimus quia ut cupiditate aspernatur! At
              atque eius et enim ducimus et ipsa corporis. Qui laudantium est
              natus quia et rerum ipsum qui ducimus labore! Et corrupti
              exercitationem sit eveniet officiis aut quia impedit aut
              doloremque voluptate nam architecto dolorem sed similique ducimus
              eos minima ipsum. Est quia laborum aut incidunt eius aut dolorem
              culpa aut minus sunt et possimus explicabo. Et molestiae delectus
              sit dolorum provident cum officia culpa. Aut rerum similique et
              neque repudiandae et dolor eveniet quo dicta doloremque et
              blanditiis error. Id rerum nesciunt magni dignissimos est maxime
              libero qui eius voluptas. Aut exercitationem fuga ut adipisci
              aperiam 33 delectus vitae ut fuga explicabo ab dolor error et
              accusantium atque.
            </p>
          </Welcome>
        </Container>
      </Page>
      <Footer />
    </div>
  )
}
