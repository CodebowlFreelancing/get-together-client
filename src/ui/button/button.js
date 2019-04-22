import {h} from 'preact'
import {css} from 'astroturf'
import classnames from 'classnames'

const styles = css`
  .button {
  }
`

const Button = ({children, className, ...props}) => (
  <button className={classnames(styles.button, className)} {...props}>
    {children}
  </button>
)

export default Button
