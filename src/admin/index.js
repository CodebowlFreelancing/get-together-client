import preact from 'preact'
import {css} from 'astroturf'

const style = css`
  .foo {
    color: blue;
  }
`

preact.render(
  <div id="app">
    <span className={style.foo}>Hello, world!</span>
    <button onClick={() => alert('hi!')}>Click Me</button>
  </div>,
  document.body
)
