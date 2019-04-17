import {h} from 'preact'
import {css} from 'astroturf'

const styles = css`
  .layoutInline {
    display: flex;
    :not(:last-child) {
      margin-right: 1em;
    }
  }
`

const Inline = ({children}) => <div className={styles.layoutInline}>{children}</div>

export default Inline
