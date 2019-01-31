import preact from 'preact'

const Label = ({text, children}) => (
  <label>
    <span>{text}</span>
    {children}
  </label>
)

export default Label
