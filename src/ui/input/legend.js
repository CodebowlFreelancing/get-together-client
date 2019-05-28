import {h} from 'preact'
import {css} from 'astroturf'

const styles = css`
  .required {
    color: red;
  }
`

const Legend = ({required = false, children}) => (
  <legend>
    <span>{children}</span>
    <span className={styles.required}>{required && ' *'}</span>
  </legend>
)

export default Legend
