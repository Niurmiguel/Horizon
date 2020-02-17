import React from "react";
import { CardGrid } from "../Cards";

const NavbarDropdown = ({ news }) => (
  <div
    className="horizon-drop-news uk-navbar-dropdown"
    uk-drop="boundary:!.uk-navbar; boundary-align: true; pos: bottom-justify"
  >
    <div
      className="uk-position-relative uk-visible-toggle"
      tabIndex="-1"
      uk-slider="sets: true; finite: true"
    >
      <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-4@m uk-grid">
        {news.map((n, idx) =>
          idx < 4 ? (
            <li key={n.url}>
              <CardGrid
                title={n.title}
                img={n.urlToImage}
                url={n.url}
                date={n.publishedAt}
              />
            </li>
          ) : null
        )}
      </ul>

    </div>
  </div>
);

export default NavbarDropdown;
