import {useState} from 'react'
import './index.css'

const Section = props => {
  const {section, isDelete} = props
  const [isDeleteButtonVisible, setDeleteButtonVisibility] = useState(false)

  const clName = section ? 'section-container' : 'section-container dis-1'
  const toggleDeleteButton = () => {
    setDeleteButtonVisibility(!isDeleteButtonVisible)
  }

  const deletes = () => {
    isDelete(false)
  }

  return (
    <div className={clName}>
      <div className="section-1-div">
        <div className="section-1">Section 01</div>
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
              onClick={deletes}
            />
            <div>Delete Field</div>
          </button>
        )}
      </div>
      <div className="section-name">Section Title</div>
      <div className="section-description">Section description</div>
    </div>
  )
}

export default Section
