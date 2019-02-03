import preact from 'preact'
import {css} from 'astroturf'
import Label from './label'

const styles = css`
  .inputCheckbox {
    margin-right: 0.5em;
  }

  .inputCheckboxLabel {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: baseline;

    :last-child {
      margin-top: 0;
    }
  }
`

const CheckboxInput = ({label, ...props}) => (
  <Label className={styles.inputCheckboxLabel} text={label}>
    <input type="checkbox" className={styles.inputCheckbox} {...props} />
  </Label>
)

export default CheckboxInput
