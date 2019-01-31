import preact from 'preact'
import {css} from 'astroturf'

const styles = css`
  .buttonClickable {
    padding: 0;
    border: 0;
    background: transparent;
    cursor: hand;
  }
`

const Clickable = ({children, ...props}) => (
  <button className={styles.buttonClickable} {...props}>
    {children}
  </button>
)

export default Clickable
