import preact from 'preact'
import Header from './header'
import Main from './main'
import Footer from './footer'

const Page = ({title, children}) => (
  <div>
    <Header>{title}</Header>
    <Main>{children}</Main>
    <Footer>Footer</Footer>
  </div>
)

export default Page
