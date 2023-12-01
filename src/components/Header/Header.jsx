import "./Header.css";
import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logout from "../../images/logout.svg";
import logoutDark from "../../images/logout-dark.svg";

const Header = ({ onSignInModal, onMenuModal, currentPage, onSignOut }) => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <header
      className={
        currentPage === "Home" ? "header" : "header header__saved-news"
      }
      style={{ backgroundImage: "../../topBackground.svg" }}
    >
      {currentPage === "Home" ? (
        <div>
          <Link className={`header__logo header__home`} to="/">
            <p>NewsExplorer</p>
          </Link>
        </div>
      ) : (
        <div>
          <Link className={`header__logo`} to="/">
            <p>NewsExplorer</p>
          </Link>
        </div>
      )}
      {currentPage === "Home" ? (
        <button
          onClick={onMenuModal}
          className="header__menu-mobile-view-button"
        >
          <div className="header__menu-mobile-view-button-design"></div>
          <div className="header__menu-mobile-view-button-design"></div>
        </button>
      ) : (
        <button
          onClick={onMenuModal}
          className="header__menu-mobile-view-button"
        >
          <div className="header__menu-mobile-view-button-design-saved-news"></div>
          <div className="header__menu-mobile-view-button-design-saved-news"></div>
        </button>
      )}
      <div className="header__buttons">
        {currentPage === "Home" ? (
          <div className="header__button-container">
            <button
              className={`header__button header__button-home header__home`}
            >
              <Link to="/" className="header__home-link">
                Home
              </Link>
            </button>
            <div className="header__button-home-highliter"></div>
          </div>
        ) : (
          <div className="header__button-container">
            <button className={`header__button header__button-home`}>
              <Link to="/" className="header__link-saved-news">
                Home
              </Link>
            </button>
            <div className="header__button-home-highliter"></div>
          </div>
        )}

        {currentUser?.email && currentPage === "Home" ? (
          <div className="header__button-container">
            <button
              className={`header__button header__button-home header__home-saved-news`}
            >
              <Link className="header__link" to="/savednews">
                Saved articles
              </Link>
            </button>
            <div className=""></div>
          </div>
        ) : (
          currentUser.email && (
            <div className="header__button-container">
              <button className={`header__button header__button-home`}>
                <Link
                  className="header__link header__link-saved-news"
                  to="/savednews"
                >
                  Saved articles
                </Link>
              </button>
              <div className="header__button-home-highliter header__button-saved-news-highliter"></div>
            </div>
          )
        )}

        {!currentUser.email && currentPage === "Home" ? (
          <button
            className="header__button header__signin header__home"
            onClick={onSignInModal}
          >
            Sign-in
          </button>
        ) : (
          !currentUser.email && (
            <button
              className="header__button header__signin"
              onClick={onSignInModal}
            >
              Sign-in
            </button>
          )
        )}

        {currentUser.email && currentPage === "Home" ? (
          <button
            onClick={onSignOut}
            className="header__button header__signin header__home"
          >
            <div className="header__button-logout">
              {currentUser.email.slice(0, 3).toUpperCase()}
              <img src={logout} alt="logout" />
            </div>
          </button>
        ) : (
          currentUser.email && (
            <button
              onClick={onSignOut}
              className="header__button header__signin"
            >
              <div className="header__button-logout">
                {currentUser.email.slice(0, 3).toUpperCase()}
                <img src={logoutDark} alt="logout" />
              </div>
            </button>
          )
        )}
      </div>
    </header>
  );
};

export default Header;