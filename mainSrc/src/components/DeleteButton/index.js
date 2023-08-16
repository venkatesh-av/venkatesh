import React, {useState} from 'react'
import './index.css'

const DeleteButton = () => {
  const [isDeleteButtonVisible, setDeleteButtonVisibility] = useState(false)

  const toggleDeleteButton = () => {
    setDeleteButtonVisibility(!isDeleteButtonVisible)
  }

  return (
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
  )
}

export default DeleteButton
