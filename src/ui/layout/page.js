import {h} from 'preact'
import Header from './header'
import Main from './main'
import Footer from './footer'
import {css} from 'astroturf'

const styles = css`
  .layoutPage {
    display: flex;
    flex-direction: column;
  }
`

const Page = ({title, children}) => (
  <div className={styles.layoutPage}>
    <Header>
      <h1>{title}</h1>
    </Header>
    <Main>{children}</Main>
    <Footer />
  </div>
)

export default Page
