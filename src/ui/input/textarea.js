import {h} from 'preact'
import {css} from 'astroturf'

const styles = css`
  .inputTextarea {
    font-size: 1rem;
    width: 100%;
    padding: 0.5em;
  }
`

const Textarea = props => <textarea className={styles.inputTextarea} {...props} />

export default Textarea
