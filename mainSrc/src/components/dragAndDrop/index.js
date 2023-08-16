import './index.css'

const DragAndDrop = props => {
  const {textContent, dateTime, section, isImageClick} = props
  const value = !dateTime && !section && !isImageClick

  return (
    value && (
      <div className="drag-drop-container">
        <img
          src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691686350/Vector_en1dew.svg"
          alt="darg"
          className="drag-mg"
        />
        <div className="drap-drop-text">{textContent}</div>
      </div>
    )
  )
}

export default DragAndDrop
