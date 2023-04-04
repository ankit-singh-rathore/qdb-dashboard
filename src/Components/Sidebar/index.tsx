
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

var profile = require("../../img/logo/profile.png");

const Sidebar:React.FC = () => {
  
  const [user, setUser] = useState([]);
  
  let API = `${process.env.REACT_APP_BASE_API_URI}/users/2`;
  const fetchUserData = async (url: string) => {
    try {
      const res = await fetch(url);
      const userData = await res.json();
      console.log(userData);
      setUser(userData.name);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUserData(API);
  }, []);
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-start">
          <div className="sidebar-head">
            <a href="/" className="logo-wrapper" title="Home">
              <span className="sr-only">Home</span>
              <span className="icon logo" aria-hidden="true"></span>
            </a>
            <button
              className="sidebar-toggle transparent-btn"
              title="Menu"
              type="button"
            >
              <span className="sr-only">Toggle menu</span>
              <span className="icon menu-toggle" aria-hidden="true"></span>
            </button>
          </div>
          <div className="sidebar-footer">
            <span className="sidebar-user-img">
              <img src={profile} />
            </span>
            <div className="sidebar-user-info">
              <span className="sidebar-user__subtitle">Hello</span>
              <span className="sidebar-user__title">{user}</span>
            </div>
          </div>
          <div className="sidebar-body">
            <ul className="sidebar-body-menu">
              <li>
                <Link className="show-cat-btn" to={'/'}>
                  <span className="icon home" aria-hidden="true"></span>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link className="show-cat-btn" to={'./blogs'}>
                  <span className="icon document" aria-hidden="true"></span>
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;

