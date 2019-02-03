import preact from 'preact'

const Label = ({className, text, children}) => (
  <label className={className}>
    <span>{text}</span>
    {children}
  </label>
)

export default Label
