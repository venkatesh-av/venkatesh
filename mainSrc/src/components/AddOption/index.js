import {useState} from 'react'
import './index.css'

const AddOption = props => {
  const {textContent, removeOption, id} = props
  const [isItem2, setIsItem2] = useState(false)

  const toggleItemClass = () => {
    setIsItem2(!isItem2)
  }

  return (
    <div
      className="checklist-container"
      onClick={toggleItemClass}
      role="button"
      tabIndex={0}
    >
      <input
        className="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
      />

      <div className="checklist-item">
        <div className={isItem2 ? 'checklist-text2' : 'checklist-text'}>
          {textContent}
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691779062/Group_ycxfc0.svg"
        alt="minus"
        onClick={() => removeOption(id)}
      />
    </div>
  )
}

export default AddOption
