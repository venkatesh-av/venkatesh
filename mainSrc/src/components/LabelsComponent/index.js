import './index.css'

const LableComponent = props => {
  const {textContent} = props

  return (
    <div className="label-container">
      <div className="label-text">{textContent}</div>
    </div>
  )
}

export default LableComponent
