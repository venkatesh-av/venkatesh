import {Link} from 'react-router-dom'
import {useState} from 'react'
import DragAndDrop from '../dragAndDrop'
import LabelComponent from '../LabelsComponent'
import CheckList from '../CheckList'
import DateTime from '../DateTime'
import Section from '../Section'

import LabelWithLogo from '../LabelWithLogo'
import './index.css'

const SecondPage = () => {
  // Define the handleDrag function

  const [isTrigger, setIsTriggerVisible] = useState(false)
  const [isRequired, setIsRequired] = useState(false)
  const [isChecklistClick, setChecklist] = useState(false)
  const [isImageClick, setImages] = useState(false)
  const [section, setSection] = useState(false)
  const [dateTime, setDate] = useState(false)

  const onImageClick = () => {
    setImages(true)
  }

  const dateTimeClick = () => {
    setDate(true)
  }

  const handleChange = event => {
    setIsTriggerVisible(event.target.checked)
  }

  const isClick = val => {
    if (val) {
      setImages(false)
      setChecklist(true)
    }
  }

  const clickSec = () => {
    setSection(true)
  }
  const secFun = () => {
    setSection(true)
  }

  const isImage = value => {
    if (value) {
      setChecklist(false)
      setImages(true)
    }
  }

  const isRequiredFun = () => {
    setIsRequired(true)
  }

  return (
    <div className="secondpage-main-container">
      <div className="second-top-section">
        <div className="second-top-section">
          <div className="backButton">
            <img
              src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691745748/Group_jv55yc.svg"
              alt="backin"
            />
          </div>
          <div className="second-top-item2">
            <img
              src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691746151/Group_bimakb.svg"
              alt="sheets"
            />
            <div className="second-top-item2-text">Sheets</div>
          </div>
          <div className="second-top-item3">
            <div className="second-top-item3-text">
              First Piece CTQ : Tube Press Up
            </div>
          </div>
        </div>
        <div className="second-top-section">
          <div className="second-top-item4">
            <div className="second-top-item4-text">Authoring</div>
          </div>
          <div className="second-top-item5">
            <div className="second-top-item5-text">Preview</div>
          </div>
          <div className="startAuthB">
            <button className="button-outer" type="button">
              <Link to="/">
                <div className="button-start">Finish Authoring</div>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="workspace">
        <div>
          <div className="edition-section">
            <img
              src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691683160/Group_iyw0zw.svg"
              alt="tool"
              className="canva-img"
            />
            <div className="editing-text">Fields</div>
          </div>
          <LabelComponent textContent="Basic Fields" />
          <LabelWithLogo
            textContent="Text"
            altValue="text"
            imgUrl="https://res.cloudinary.com/dgurkbuce/image/upload/v1691759951/icon_1_hbotej.svg"
          />
          <LabelComponent textContent="Selection Fields" />

          <div
            className="label-with-logo-container"
            onClick={onImageClick}
            role="button"
            tabIndex={0}
          >
            <img
              src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691760304/circle-checked_n4qeyh.svg"
              alt="checklist"
            />
            <div className="label-with-logo-text">Checklist</div>
          </div>

          <div
            className="label-with-logo-container"
            onClick={dateTimeClick}
            role="button"
            tabIndex={0}
          >
            <img
              src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691760318/calendar-dates_x7mu9f.svg"
              alt="date"
            />
            <div className="label-with-logo-text">Select Date & Time</div>
          </div>
          <LabelComponent textContent="Attachment Fields" />
          <LabelWithLogo
            textContent="Upload Image"
            altValue="uploadImage"
            imgUrl="https://res.cloudinary.com/dgurkbuce/image/upload/v1691760351/Vector_1_q179ft.svg"
          />
          <LabelComponent textContent="Layout" />

          <div
            className="label-with-logo-container"
            onClick={clickSec}
            role="button"
            tabIndex={0}
          >
            <img
              src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691760330/Group_merqo3.svg"
              alt="section"
            />
            <div className="label-with-logo-text">Section</div>
          </div>
        </div>
        <hr className="hr-edit" />
        <div className="canvas-div1">
          <div className="canvas-div">
            <img
              src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691750234/Group_q76pmi.svg"
              alt="edit-sapce"
              className="canva-img"
            />
            <div className="canvas">Canvas</div>
          </div>
          <DragAndDrop
            textContent="Drag and drop fields to the canvas"
            dateTime={dateTime}
            section={section}
            isImageClick={isImageClick}
          />
          <Section section={section} />
          <div className>
            <CheckList
              isTrigger={isTrigger}
              isRequired={isRequired}
              isClick={isClick}
              isImageClick={isImageClick}
            />
            <DateTime dateTime={dateTime} />
          </div>
        </div>
        <hr className="hr-edit" />
        <div className="control-section">
          <div className="controls">
            <img
              src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691755923/Group_ejypuo.svg"
              alt="control"
              className="canva-img"
            />
            <div className="controls-text">Controls</div>
          </div>
          {isChecklistClick && (
            <>
              {' '}
              <div className="controls-1st">
                <div>
                  <span className="field-control">Field:</span>
                  <span>Check List</span>
                </div>
              </div>
              <div className="controls-2nd">
                <div className="controls-2nd-text">
                  2. Select product expiry date
                </div>
              </div>
              <div className="controls-3rd">
                <div className="flex-items1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onClick={isRequiredFun}
                  />
                  <div className="required-text">Required </div>
                </div>
                <div className="flex-items1">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="triggerd-text">Trigger: </div>
                </div>
              </div>
            </>
          )}
          {isImageClick && (
            <>
              {' '}
              <div className="controls-1st">
                <div>
                  <span className="field-control">Field:</span>
                  <span>Check List</span>
                </div>
              </div>
              <div className="controls-2nd">
                <div className="controls-2nd-text">
                  2. Select product expiry date
                </div>
              </div>
              <div className="controls-3rd">
                <div className="flex-items1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onClick={isRequiredFun}
                  />
                  <div className="required-text">Required </div>
                </div>
                <div className="flex-items1">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="triggerd-text">Trigger: </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default SecondPage
