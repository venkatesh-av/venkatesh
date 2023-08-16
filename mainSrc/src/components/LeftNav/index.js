import {Link} from 'react-router-dom'
import {useState} from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Modal} from 'react-bootstrap'

const LeftNav = () => {
  const [showModal1, setShowModal1] = useState(false)
  const [showModal2, setShowModal2] = useState(false)
  const [showAutoText, setShowAutoText] = useState(false)
  const [res, setRes] = useState(false)
  const [op1, setOp1] = useState(false)
  const [op2, setOp2] = useState(false)

  const onClickAutofill = () => {
    setShowAutoText(true)
  }

  const disOption2 = () => {
    setOp2(!op2)
  }
  const disOption1 = () => {
    setOp1(!op1)
  }

  const onClickCTAButton = () => {
    setShowModal1(true)
  }

  const handleCloseModal1 = () => {
    setShowModal1(false)
  }
  const finishWork = () => {
    setRes(true)
    console.log(res)
  }

  const onClickAuth = () => {
    setShowModal1(false)
    setShowModal2(true)
  }
  const handleCloseModal2 = () => {
    setShowModal2(false)
    setShowAutoText(false)
  }

  return (
    <div className="main-left-side-bg">
      <div className="flex-items1">
        <div className="side-bar-container">
          <div className="side-icon-bg">
            <img
              src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691675402/u_home-alt_jbz3zi.svg"
              alt="sidebar-home"
              className="home-img"
            />
          </div>
          <hr className="hr-line-home" />
          <img
            src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691676591/Group_427319310_jxhhci.svg"
            alt="sidebar-home"
            className="time-img"
          />
          <div className="side-icon-bg">
            <img
              src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691676509/fi_check-square_1_ll69yj.svg"
              alt="sidebar-home"
              className="home-img"
            />
          </div>
          <div className="flex-items">
            <div className="tool-image">
              <img
                src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691676946/Group_jfiyoc.svg"
                alt="tool-img"
                className="tool-image-edit"
              />
            </div>
            <div className="hr-tool-right">
              <>.</>
            </div>
          </div>
        </div>
        <div>
          <div className="body-first-main-container">
            <div className="sheets-firstpage">
              <img
                src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691682497/Group_b3ux84.svg"
                alt="tool-img"
                className="tool-img-sheet"
              />
              <div className="sheets-firstpage-text">Sheets</div>
            </div>
            <div className="search-div">
              <img
                src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691683182/Group_yn484d.svg"
                alt="search"
              />
              <div className="search-text">Search</div>
            </div>
          </div>

          <div className="flex-items2">
            <div className="flex-items1">
              <div>
                <div
                  className="option-div"
                  onClick={disOption1}
                  role="button"
                  tabIndex={0}
                >
                  <div className="option-text">Select asset</div>
                  <img
                    src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691684685/Group_b262fy.svg"
                    alt="drow-down"
                  />
                </div>
                {op1 && (
                  <div className="main-down">
                    <div className="option-down">
                      <div className="option-text1">Heavy Duty Line</div>
                    </div>
                    <div className="option-down">
                      <div className="option-text1">Light Duty Line</div>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <div
                  className="option-div"
                  onClick={disOption2}
                  role="button"
                  tabIndex={0}
                >
                  <div className="option-text">Select sub-asset</div>
                  <img
                    src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691684685/Group_b262fy.svg"
                    alt="drow-down"
                  />
                </div>
                {op2 && (
                  <div className="main-down">
                    <div className="option-down">
                      <div className="option-text1">Press Up Station</div>
                    </div>
                    <div className="option-down">
                      <div className="option-text1">Knockdown Station</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button
              type="button"
              className="cta-button option-div"
              onClick={onClickCTAButton}
              aria-label="Author New Sheet"
            >
              <img
                src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691685447/icon_poz3pd.svg"
                alt="plus-button"
              />
              <div className="author-button ">Author New Sheet</div>
            </button>
          </div>
          {!res && (
            <div className="no-sheets-here-div">
              <img
                src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691686350/Vector_en1dew.svg"
                alt="vector-img"
              />
              <div className="no-sheets-here">
                No sheets here. Start authoring!
              </div>
            </div>
          )}
          {res && (
            <div>
              <div className="container-result">
                <div className="sheetId-div">
                  <div className="sheetText">Sheet ID</div>
                </div>
                <div className="sheetId-div">
                  <div className="sheetText">Sheet Name</div>
                </div>
                <div className="sheetId-div">
                  <div className="sheetText">Linked Asset</div>
                </div>
                <div className="sheetId-div">
                  <div className="sheetText">Sub-Asset</div>
                </div>
                <div className="sheetId-div">
                  <div className="sheetText">Steps</div>
                </div>
                <div className="sheetId-div">
                  <div className="sheetText">Version</div>
                </div>
              </div>
              <div className="container-result">
                <div className="result-div">
                  <div className="result-text">CTQ01</div>
                </div>
                <div className="result-div">
                  <div className="result-text">
                    First Piece CTQ: Tube Press Up
                  </div>
                </div>
                <div className="result-div">
                  <div className="result-text">Light Duty Line</div>
                </div>
                <div className="result-div">
                  <div className="result-text">Tube Press Up Station</div>
                </div>
                <div className="result-div">
                  <div className="result-text">
                    02
                    <br />
                  </div>
                </div>
                <div className="result-div">
                  <div className="result-text">01</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Modal show={showModal1} onHide={handleCloseModal1} centered>
        <div className="how-do-you-text">How do you want to start?</div>
        <div className="card-container">
          <div className="popup-1">
            <button
              className="card-1-1-blue"
              onClick={onClickAuth}
              type="button"
            >
              <img
                src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691686350/Vector_en1dew.svg"
                alt="vector"
              />
            </button>
            <div className="card-1-1">Author from Scratch</div>
            <div className="card-1-1-text">
              Build a sheet by dragging & dropping using the authoring module,
              from scratch
            </div>
          </div>
          <div className="popup-1">
            <div className="card-1-1-blue">
              <img
                src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691686350/Vector_en1dew.svg"
                alt="vector"
              />
            </div>
            <div className="card-1-1">Author from Scratch</div>
            <div className="card-1-1-text">
              Build a sheet by dragging & dropping using the authoring module,
              from scratch
            </div>
          </div>
        </div>
      </Modal>
      <Modal show={showModal2} onHide={handleCloseModal2} centered>
        <div className="top-new-sheet-details">
          <img
            src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691742153/Group_ayutac.svg"
            alt="sheet-img"
          />
          <div className="text-top-new-details"> New Sheet Details</div>
        </div>
        <div className="sheet-name-label">Sheet Name</div>
        <button
          className="sheet-name-input"
          type="button"
          onClick={onClickAutofill}
        >
          {showAutoText && (
            <div className="auto-fill-hed">First Piece CTQ : Tube Press Up</div>
          )}
        </button>
        <div className="sheet-name-label">Sheet Description</div>
        <button className="sheet-name-input" type="button">
          {showAutoText && (
            <div className="auto-fill-des">
              Production Batch Inspection of Tube Press Up: First Piece
            </div>
          )}
        </button>
        <div className="sheet-name-label">Asset</div>
        <div className="flex-items3">
          <div className="option-div">
            <div className="option-text">Light Duty Line</div>
            <img
              src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691684685/Group_b262fy.svg"
              alt="drow-down"
            />
          </div>
          <div className="option-div">
            <div className="option-text">Press Up Station</div>
            <img
              src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691684685/Group_b262fy.svg"
              alt="drow-down"
            />
          </div>
        </div>
        <div className="startAuthB">
          <button className="button-outer" type="button">
            <Link to="/editing">
              <div className="button-start">Start Authoring</div>
            </Link>
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default LeftNav
