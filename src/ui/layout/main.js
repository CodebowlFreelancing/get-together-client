import preact from 'preact'
import {css} from 'astroturf'

const styles = css`
  .layoutMain {
    display: grid;
    grid-row-gap: 1em;
    margin: 1em 15vw;
  }
`

const Main = ({children}) => <main className={styles.layoutMain}>{children}</main>

export default Main
