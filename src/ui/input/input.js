import {h} from 'preact'
import {css} from 'astroturf'
import classnames from 'classnames'

const styles = css`
  .inputInput {
    width: 100%;
  }
`

const Input = ({className, ...props}) => <input {...props} className={classnames(styles.inputInput, className)} />

export default Input
