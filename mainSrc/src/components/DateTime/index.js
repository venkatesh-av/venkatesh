import {useState} from 'react'
import './index.css'

const DateTime = props => {
  const {isImage, dateTime} = props
  const [isFieldTitleVisible, setFieldTitleVisibility] = useState(true)
  const [isDeleteButtonVisible, setDeleteButtonVisibility] = useState(false)

  const toggleDeleteButton = () => {
    setDeleteButtonVisibility(!isDeleteButtonVisible)
  }

  const clsName = dateTime ? 'display-flex-box' : 'display-flex-box dis-1'
  const toggleFieldVisibility = () => {
    setFieldTitleVisibility(false)
  }

  return (
    <div className={clsName}>
      <div>
        <div
          className="section-1-div2"
          onClick={toggleFieldVisibility}
          role="button"
          tabIndex={0}
        >
          {isFieldTitleVisible ? (
            <div className="field-title">Field Title</div>
          ) : (
            <div className="field-auto-des">2. Select product expiry date</div>
          )}
          <div
            role="button"
            tabIndex={0}
            onClick={toggleDeleteButton}
            onKeyPress={toggleDeleteButton} // Handle Enter key press
            className="delete-button-container"
          >
            <img
              src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691773458/Group_qsuosy.svg"
              alt="dots"
              className="delete-button-img"
            />
          </div>
          {isDeleteButtonVisible && (
            <button className="delete-div" type="button">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                alt="delete"
                className="delete-item"
              />
              <div>Delete Field</div>
            </button>
          )}
        </div>
      </div>
      <div className="expand-div" role="button" tabIndex={0}>
        <div className="box-checklist">
          <div className="image-text">integrate date picker (dd/mm/yyyy)</div>
        </div>
      </div>
    </div>
  )
}

export default DateTime
