import React from "react";
import moment from "moment";

const CardGrid = ({ title, img, date, url, cat }) => {
  return (
    <div className="uk-card uk-card-grid uk-card-secondary">
      <div className="uk-card-media-top">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="uk-link-reset"
        >
          <img src={img} alt="" className="uk-width-1-1" />
        </a>
      </div>
      <div className="uk-card-body uk-padding-small uk-padding-remove-horizontal">
        <h3 className="uk-card-title uk-text-bold">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="uk-link-reset"
          >
            {title}
          </a>
        </h3>
        <div className="uk-flex uk-flex-middle">
          {cat ? (
            <div className="uk-label uk-text-capitalize">
              {cat.includes(".")
                ? `source - ${cat.split(".")[0]}`
                : `source - ${cat}`}
            </div>
          ) : null}
          <p className="uk-text-small uk-text-muted uk-margin-small-left uk-margin-remove-vertical">
            {moment(new Date(date)).fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
};

const CardList = ({ title, img, date, description, url, cat }) => {
  return (
    <div
      className="uk-card uk-card-secondary uk-card-list uk-grid-collapse uk-margin"
      uk-grid=""
    >
      <div className="uk-card-media-left uk-cover-container uk-width-1-3@s">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="uk-link-reset"
        >
          <img src={img} alt="" uk-cover="" />
        </a>
      </div>
      <div className="uk-width-2-3@s">
        <div className="uk-card-body uk-padding-remove-vertical">
          <h3 className="uk-card-title uk-text-bold">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="uk-link-reset"
            >
              {title}
            </a>
          </h3>
          <div className="uk-flex uk-flex-middle">
            {cat ? (
              <div className="uk-label uk-text-capitalize">
                {cat.includes(".")
                  ? `source - ${cat.split(".")[0]}`
                  : `source - ${cat}`}
              </div>
            ) : null}
            <p className="uk-text-small uk-text-muted uk-margin-small-left uk-margin-remove-vertical">
              {moment(new Date(date)).fromNow()}
            </p>
          </div>
          {description ? (
            <div className="uk-margin-top uk-text-left">
              <p>{description}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const CardListMini = ({ title, img, date, url }) => (
  <div
    className="uk-card uk-card-secondary uk-card-list uk-card-list-m uk-grid-collapse uk-margin"
    uk-grid=""
  >
    {img ? (
      <div className="uk-card-media-right uk-cover-container uk-width-1-3@s uk-flex-last@s">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="uk-link-reset"
        >
          <img src={img} alt="" uk-cover="" />
        </a>
      </div>
    ) : null}
    <div className="uk-width-expand@s">
      <div className="uk-card-body uk-padding-small uk-padding-remove-left uk-padding-remove-vertical">
        <h3 className="uk-card-title uk-text-bold uk-margin-small-bottom">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="uk-link-reset"
          >
            {title}
          </a>
        </h3>
        <p className="uk-text-small uk-text-muted uk-margin-remove-vertical">
          {moment(new Date(date)).fromNow()}
        </p>
      </div>
    </div>
  </div>
);

export { CardGrid, CardList, CardListMini };
