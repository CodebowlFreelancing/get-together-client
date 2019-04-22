import {h} from 'preact'
import {css} from 'astroturf'
import Label from './label'

const styles = css`
  .inputTextarea {
    width: 100%;
  }
`

const Textarea = ({label, ...textareaProps}) => (
  <Label text={label}>
    <textarea className={styles.inputTextarea} {...textareaProps} />
  </Label>
)

export default Textarea
