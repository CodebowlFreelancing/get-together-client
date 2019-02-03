import preact from 'preact'
import {css} from 'astroturf'

const styles = css`
  .layoutHeader {
    color: white;
    background-color: black;
    height: 100px;
  }
`

const Header = ({children}) => <header className={styles.layoutHeader}>{children}</header>

export default Header
