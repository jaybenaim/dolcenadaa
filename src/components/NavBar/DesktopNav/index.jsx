import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";
import { toggleNavbar } from "../../../redux/actions/navbarActions";
import "../../../assets/stylesheets/navbar.css";
import "../../../assets/stylesheets/desktopNav.css";

const navLinkStyle = {
  width: "140px",
  borderRadius: "3px",
  letterSpacing: "1.5px"
};
const DesktopNav = props => {
  const {
    auth: {
      user: { name },
      isAuthenticated
    },
    logoutUser: handleLogoutUser
  } = props;
  const onLogoutClick = e => {
    e.preventDefault();
    handleLogoutUser();
  };
  const [displayDesktopNav, toggleDesktopNav] = useState(false);
  const navClass = displayDesktopNav
    ? "desktop-nav desktop-nav-show"
    : "desktop-nav desktop-nav-hide";
  return (
    <div
      className="desktop-nav-container "
      onMouseLeave={() => props.toggleNavbar({ content: "", nav: "" })}
    >
      <div
        className="desktop-nav--hidden-nav-trigger"
        onMouseEnter={() =>
          props.toggleNavbar({ content: "slideDown", nav: "dropDown" })
        }
      ></div>
      <div
        className="welcome-container"
        onMouseEnter={() => {
          toggleDesktopNav(!displayDesktopNav);
        }}
        onMouseLeave={() => {
          toggleDesktopNav(!displayDesktopNav);
        }}
      >
        {" "}
        <div className="seconday-font">
          {isAuthenticated ? "Hi, " + name : "Login"}
        </div>
        {!isAuthenticated ? (
          <div className={navClass}>
            <a
              href="/dolcenadaa/login"
              id="login"
              style={navLinkStyle}
              className="btn btn-large  waves-effect waves-light hoverable "
            >
              Log In
            </a>
            <a
              href="/dolcenadaa/register"
              id="register"
              style={navLinkStyle}
              className="btn btn-large waves-effect waves-light hoverable accent-3"
            >
              Register
            </a>
          </div>
        ) : (
          <div className={navClass}>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={e => onLogoutClick(e)}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        )}
      </div>
      <Link
        className="center white-text desktop-nav--home-link"
        to="/"
        style={navLinkStyle}
      >
        Home
      </Link>
      <Link
        className="center white-text desktop-nav--products-link"
        to="/products"
        style={navLinkStyle}
      >
        Products
      </Link>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default withRouter(
  connect(mapStateToProps, { logoutUser, toggleNavbar })(DesktopNav)
);
