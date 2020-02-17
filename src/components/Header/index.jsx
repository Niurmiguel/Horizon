import React from "react";
import { Link } from "react-router-dom";
import NavbarDropdown from "./NavbarDropdown";

const Header = ({ title, news }) => {
  return (
    <header>
      <div className="horizon-header-mobile horizon-header-overlay uk-hidden@m">
        <div className="uk-navbar-container uk-navbar-transparent">
          <nav uk-navbar="">
            <div className="uk-navbar-left">
              <Link to="/" className="uk-navbar-item uk-logo">
                {title}
              </Link>
            </div>
            <div className="uk-navbar-right">
              <a href="#menu" className="uk-navbar-toggle" uk-toggle="">
                <span uk-navbar-toggle-icon=""></span>
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div
        className="horizon-header horizon-header-overlay uk-visible@m"
        uk-header=""
      >
        <div
          uk-sticky=""
          media="@m"
          show-on-up=""
          animation="uk-animation-slide-top"
          cls-active="uk-navbar-sticky"
          sel-target=".uk-navbar-container"
        >
          <div className="uk-navbar-container uk-navbar-transparent">
            <div className="uk-container">
              <nav uk-navbar="{align:left, boundary:!.uk-navbar-container}">
                <div className="uk-navbar-left">
                  <Link to="/" className="uk-navbar-item uk-logo">
                    {title}
                  </Link>
                </div>
                <div className="uk-navbar-center">
                  <ul className="uk-navbar-nav">
                    <li>
                      <Link
                        to={{
                          pathname: "/sports",
                          state: {
                            category: "sports"
                          }
                        }}
                        className="uk-text-capitalize"
                      >
                        Sports
                      </Link>
                      {news.sports && news.sports.length > 0 ? (
                        <NavbarDropdown news={news.sports} />
                      ) : null}
                    </li>
                    <li>
                      <Link
                        to={{
                          pathname: "/business",
                          state: {
                            category: "business"
                          }
                        }}
                        className="uk-text-capitalize"
                      >
                        Business
                      </Link>
                      {news.business && news.business.length > 0 ? (
                        <NavbarDropdown news={news.business} />
                      ) : null}
                    </li>
                    <li>
                      <Link
                        to={{
                          pathname: "/entertainment",
                          state: {
                            category: "entertainment"
                          }
                        }}
                        className="uk-text-capitalize"
                      >
                        Entertainment
                      </Link>
                      {news.entertainment && news.entertainment.length > 0 ? (
                        <NavbarDropdown news={news.entertainment} />
                      ) : null}
                    </li>
                    <li>
                      <Link
                        to={{
                          pathname: "/technology",
                          state: {
                            category: "technology"
                          }
                        }}
                        className="uk-text-capitalize"
                      >
                        Technology
                      </Link>
                      {news.technology && news.technology.length > 0 ? (
                        <NavbarDropdown news={news.technology} />
                      ) : null}
                    </li>
                    <li>
                      <Link
                        to={{
                          pathname: "/science",
                          state: {
                            category: "science"
                          }
                        }}
                        className="uk-text-capitalize"
                      >
                        Science
                      </Link>
                      {news.science && news.science.length > 0 ? (
                        <NavbarDropdown news={news.science} />
                      ) : null}
                    </li>
                    <li>
                      <Link
                        to={{
                          pathname: "/health",
                          state: {
                            category: "health"
                          }
                        }}
                        className="uk-text-capitalize"
                      >
                        Health
                      </Link>
                      {news.health && news.health.length > 0 ? (
                        <NavbarDropdown news={news.health} />
                      ) : null}
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div id="menu" className="uk-modal-full" uk-modal="">
        <div className="uk-modal-dialog uk-modal-body uk-text-center uk-flex uk-height-viewport">
          <button className="uk-modal-close-full" uk-close=""></button>
          <div className="uk-margin-auto-vertical uk-width-1-1">
            <div className="uk-child-width-1-1" uk-grid="">
              <div>
                <div className="uk-panel">
                  <ul className="uk-nav uk-nav-primary uk-nav-center">
                    <li>
                      <Link
                        to={{
                          pathname: "/sports",
                          state: {
                            category: "sports"
                          }
                        }}
                        onClick={ () => require('uikit').modal('#menu').hide()}
                        className="uk-text-capitalize"
                      >
                        Sports
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={{
                          pathname: "/business",
                          state: {
                            category: "business"
                          }
                        }}
                        onClick={ () => require('uikit').modal('#menu').hide()}
                        className="uk-text-capitalize"
                      >
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={{
                          pathname: "/entertainment",
                          state: {
                            category: "entertainment"
                          }
                        }}
                        onClick={ () => require('uikit').modal('#menu').hide()}
                        className="uk-text-capitalize"
                      >
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={{
                          pathname: "/technology",
                          state: {
                            category: "technology"
                          }
                        }}
                        onClick={ () => require('uikit').modal('#menu').hide()}
                        className="uk-text-capitalize"
                      >
                        Technology
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={{
                          pathname: "/science",
                          state: {
                            category: "science"
                          }
                        }}
                        onClick={ () => require('uikit').modal('#menu').hide()}
                        className="uk-text-capitalize"
                      >
                        Science
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={{
                          pathname: "/health",
                          state: {
                            category: "health"
                          }
                        }}
                        onClick={ () => require('uikit').modal('#menu').hide()}
                        className="uk-text-capitalize"
                      >
                        Health
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
