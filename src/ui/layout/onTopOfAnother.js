import preact from 'preact'
import {css} from 'astroturf'

const styles = css`
  .layoutOnTopOfAnother {
    display: flex;
    flex-direction: column;
    :not(:last-child) {
      margin-top: 1em;
    }
  }
`

const OnTopOfAnother = ({children}) => <div className={styles.layoutOnTopOfAnother}>{children}</div>

export default OnTopOfAnother
