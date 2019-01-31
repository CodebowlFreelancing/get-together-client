import preact from 'preact'
import {css} from 'astroturf'

const styles = css`
  .layoutHeader {
    color: white;
    background-color: black;
    height: 50px;
  }
`

const Header = ({children}) => <header className={styles.layoutHeader}>{children}</header>

export default Header
