import React, { Fragment } from "react";

const Footer = () => (
  <Fragment>
    <div className="uk-background-secondary">
      <div className="uk-container">
        <hr className="horizon-line uk-margin-remove" />
      </div>
    </div>
    <footer className="uk-background-secondary">
      <div className="uk-container">
        <div uk-grid="">
          <div className="uk-width-auto@s">
            <div className="uk-panel uk-padding">
              <small>
                © Copyright - Horizon by{" "}
                <a
                  href="https://github.com/Niurmiguel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uk-link-reset"
                >
                  Niurmiguel Gonzalez
                </a>
              </small>
            </div>
          </div>
          <div className="uk-width-expand@s">
            <div className="uk-panel uk-padding uk-text-right">
              <small>
                Data by{" "}
                <a
                  href="https://newsapi.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uk-link-reset"
                >
                  News API
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </Fragment>
);

export { Footer };
