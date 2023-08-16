import './index.css'

const LabelWithLogo = props => {
  const {imgUrl, altValue, textContent} = props
  return (
    <div className="label-with-logo-container">
      <img src={imgUrl} alt={altValue} />
      <div className="label-with-logo-text">{textContent}</div>
    </div>
  )
}

export default LabelWithLogo
