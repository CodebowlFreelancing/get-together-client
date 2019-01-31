import preact from 'preact'
import {css} from 'astroturf'

const styles = css`
  .layoutFooter {
    color: white;
    background-color: black;
    height: 50px;
    margin-top: auto;
  }
`

const Footer = () => <footer className={styles.layoutFooter} />

export default Footer
