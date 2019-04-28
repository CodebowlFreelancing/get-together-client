import {h} from 'preact'
import {css} from 'astroturf'

const styles = css`
  .required {
    color: red;
  }
`

const Label = ({className, text, required = false, children}) => (
  <label className={className}>
    <span>
      <span>{text}</span>
      <span className={styles.required}>{required && ' *'}</span>
    </span>
    {children}
  </label>
)

export default Label
