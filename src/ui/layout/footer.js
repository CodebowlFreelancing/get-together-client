import {h} from 'preact'
import {css} from 'astroturf'

const styles = css`
  .layoutFooter {
    margin-top: auto;
  }
`

const Footer = () => <footer className={styles.layoutFooter} />

export default Footer
