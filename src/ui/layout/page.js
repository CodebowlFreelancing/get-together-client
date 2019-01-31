import preact from 'preact'
import Header from './header'
import Main from './main'
import Footer from './footer'
import {css} from 'astroturf'

const styles = css`
  .layoutPage {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`

const Page = ({title, children}) => (
  <div className={styles.layoutPage}>
    <Header>{title}</Header>
    <Main>{children}</Main>
    <Footer>Footer</Footer>
  </div>
)

export default Page
