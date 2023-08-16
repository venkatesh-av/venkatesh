import {useState} from 'react'
import './index.css'
import AddOption from '../AddOption'

const CheckList = props => {
  const {isTrigger, isRequired, isClick, isImageClick} = props
  const [isBoxChecklist2, setBoxChecklist2] = useState(false)
  console.log(isRequired)

  const setClick = () => {
    isClick(true)
  }

  const clsName = isImageClick ? 'display-flex-box' : 'display-flex-box dis-1'
  const toggleBoxChecklist = () => {
    setBoxChecklist2(!isBoxChecklist2) // Toggle the state
  }
  const [isFieldTitleVisible, setFieldTitleVisibility] = useState(true)
  const [addOptions, setAddOptions] = useState([
    {id: 1, textContent: 'Check for dents'},
    {id: 2, textContent: 'Check for scratches'},
  ])
  const [isDeleteButtonVisible, setDeleteButtonVisibility] = useState(false)

  const toggleDeleteButton = () => {
    setDeleteButtonVisibility(!isDeleteButtonVisible)
  }

  const toggleFieldTitle = () => {
    setFieldTitleVisibility(!isFieldTitleVisible)
  }

  const addNewOption = () => {
    const newId = addOptions.length + 1
    setAddOptions([...addOptions, {id: newId, textContent: 'default text'}])
  }

  const removeOption = id => {
    const updatedOptions = addOptions.filter(option => option.id !== id)
    setAddOptions(updatedOptions)
  }

  return (
    <div className={clsName}>
      <div>
        <div className={isBoxChecklist2 ? 'section-1-div1' : 'section-1-div2'}>
          {isFieldTitleVisible ? (
            <div
              className="field-title"
              onClick={toggleFieldTitle}
              role="button"
              tabIndex={0}
            >
              Field Title
            </div>
          ) : (
            <>
              <div className="auto-fill-field-title">
                Component Physical Verification
                {isRequired && <span className="bluestar">*</span>}
              </div>
            </>
          )}
          {isTrigger && (
            <div className="flex-items3">
              <span className="trigger">Trigger:</span>
              <span>
                <img
                  src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691838645/Vector_3_tsbbdj.svg"
                  alt="tick"
                />
              </span>
            </div>
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
        <div className={isBoxChecklist2 ? 'box-checklist2' : 'box-checklist'}>
          {addOptions.map(option => (
            <AddOption
              key={option.id}
              textContent={option.textContent}
              removeOption={removeOption}
              id={option.id}
            />
          ))}
          <div
            className="plus-add"
            onClick={addNewOption}
            role="button"
            tabIndex={0}
          >
            <img
              src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691774608/Group_v9xdyv.svg"
              alt="plus"
            />
            <div className="add-an-option">Add an Option</div>
          </div>
        </div>
        <div>
          <div onClick={toggleBoxChecklist} role="button" tabIndex={0}>
            <img
              src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691808361/Group_427320912_daobvr.svg"
              alt="expand"
              className="arrow-container"
            />
            <img
              src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691811324/Group_qo4azs.svg"
              alt="arrow-out"
              className="arrow-out"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckList
