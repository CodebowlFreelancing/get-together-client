import {h} from 'preact'
import {css} from 'astroturf'
import {Icon} from '../icon'

const styles = css`
  .statusContainer {
    position: relative;
  }

  .status {
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.85);
    z-index: 9001;
  }

  @keyframes bouncingLoader {
    to {
      opacity: 0.1;
      transform: translate3d(0, -1rem, 0);
    }
  }

  .bouncingLoader {
    display: flex;
    justify-content: center;
  }

  .bouncingLoader > div {
    width: 1rem;
    height: 1rem;
    margin: 3rem 0.2rem;
    background: #8385aa;
    border-radius: 50%;
    animation: bouncingLoader 0.6s infinite alternate;
  }

  .bouncingLoader > div:nth-child(2) {
    animation-delay: 0.2s;
  }

  .bouncingLoader > div:nth-child(3) {
    animation-delay: 0.4s;
  }
`

const Loading = () => (
  <div className={styles.bouncingLoader}>
    <div />
    <div />
    <div />
  </div>
)

const Status = ({isBusy, error, children}) => (
  <div className={styles.statusContainer}>
    {(error || isBusy) && (
      <div className={styles.status}>
        {error ? <Icon glyph="error" /> : isBusy ? <Loading /> : null}
        {error && <div>{error.message}</div>}
      </div>
    )}
    {children}
  </div>
)

export default Status
