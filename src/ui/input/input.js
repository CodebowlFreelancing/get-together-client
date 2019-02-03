import preact from 'preact'
import {css} from 'astroturf'
import classnames from 'classnames'

const styles = css`
  .inputInput {
    font-size: 1rem;
    width: 100%;
    padding: 0.5em;
  }
`

const Input = ({className, ...props}) => <input {...props} className={classnames(styles.inputInput, className)} />

export default Input
