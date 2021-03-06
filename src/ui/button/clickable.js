import {h} from 'preact'
import {css} from 'astroturf'

const styles = css`
  .buttonClickable {
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }
`

const Clickable = ({children, ...props}) => (
  <button className={styles.buttonClickable} {...props}>
    {children}
  </button>
)

export default Clickable
