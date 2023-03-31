
var profile = require("../../img/logo/profile.png");

const Header = () => {
  return (
    <>
      <nav className="main-nav--bg">
          <div className="container main-nav">
            <div className="main-nav-start">
              <div className="search-wrapper">
                <i data-feather="search" aria-hidden="true"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-search"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input type="text" placeholder="Enter keywords ..." required />
              </div>
            </div>
            <div className="main-nav-end">
              <div className="lang-switcher-wrapper">
                <button className="lang-switcher transparent-btn" type="button">
                  + Add
                </button>
              </div>
              <div className="notification-wrapper">
                <button
                  className="gray-circle-btn dropdown-btn"
                  title="To messages"
                  type="button"
                >
                  <span className="sr-only">To messages</span>
                  <span
                    className="icon notification active"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
              <div className="nav-user-wrapper">
                <button
                  className="nav-user-btn dropdown-btn"
                  title="My profile"
                  type="button"
                >
                  <span className="nav-user-img">
                    <img src={profile} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Header
