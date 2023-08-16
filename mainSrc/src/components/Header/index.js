import './index.css'

const Topsection = () => (
  <div className="main-top-section">
    <div className="flex-container">
      <div className="logo-1-section">
        <img
          src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691669920/Group_427318123_cm8vfx.svg"
          alt="company-logo"
        />
      </div>
      <div className="workroom-text">Workroom </div>
      <div className="hr-line">|</div>
      <div className="cqt-system-text">CTQ System</div>
    </div>
    <div className="flex-container">
      <div>
        <div className="bell-icon-div">
          <img
            className="bell-icon"
            src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691670823/bell_fdn4w0.svg"
            alt="bell"
          />
          <div className="bell-icon-noti-div">
            <img
              className="bell-red-icon"
              src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691671188/Ellipse_1_hiib2l.svg"
              alt="bell-noti"
            />
          </div>
        </div>
      </div>
      <div className="icon-profile-div">
        <img
          src="https://res.cloudinary.com/dgurkbuce/image/upload/v1691672123/Avatars_fhpl9e.svg"
          alt="profile-icon"
        />
      </div>
      <div className="flex-container1">
        <div className="profile-text">Venkatesh</div>
        <div className="admin-text">Admin</div>
      </div>
    </div>
  </div>
)

export default Topsection
