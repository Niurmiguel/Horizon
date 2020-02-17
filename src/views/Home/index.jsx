import React, { Fragment, useState, useEffect } from "react";
import { CardGrid, CardList, CardListMini } from "../../components/Cards";
import { Helmet } from "react-helmet";

const Home = ({ news }) => {
  const [coverNews, setCoverNews] = useState({});
  const [general, setGeneral] = useState([]);
  const [sports, setSports] = useState([]);
  const [business, setBusiness] = useState([]);
  const [entertainment, setEntertainment] = useState([]);
  const [technology, setTechnology] = useState([]);
  const [science, setScience] = useState([]);

  useEffect(() => {
    if (news) {
      if (news.default) {
        let cover = news.default.find(n => n.urlToImage);
        setCoverNews(cover);

        let d = news.default;
        d.shift();

        setGeneral(d);
      }

      if (news.business) {
        setBusiness(news.business);
      }

      if (news.sports) {
        setSports(news.sports);
      }

      if (news.technology) {
        setTechnology(news.technology);
      }

      if (news.entertainment) {
        setEntertainment(news.entertainment);
      }

      if (news.science) {
        setScience(news.science);
      }
    }
  }, [news]);

  return (
    <Fragment>
      <Helmet>
        <title>Home | Horizon</title>
        <meta
          name="description"
          content="View the latest news and breaking news today for U.S., technology,  science, sports, entertainment, business and health at Horizon."
        />
      </Helmet>
      {coverNews.urlToImage ? (
        <section className="uk-section-secondary uk-preserve-color uk-position-relative">
          <div className="hero-cover uk-overlay-primary uk-position-cover"></div>
          <div
            data-src={coverNews.urlToImage}
            className="uk-background-norepeat uk-background-cover uk-background-center-center uk-background-image uk-section uk-flex uk-flex-bottom"
            uk-height-viewport="offset-top: true; offset-bottom: 0;"
            uk-img=""
            uk-parallax="bgy: 70,0;media: @m"
          >
            <div className="uk-width-1-1 uk-position-z-index">
              <div className="uk-container">
                <div className="uk-margin-large uk-container uk-container-expand">
                  <h1
                    className="uk-heading-small uk-margin-small uk-width-xxlarge uk-text-left"
                    uk-parallax="y: 0,-50; media: @s;"
                  >
                    {coverNews.title}
                  </h1>
                  <div className="uk-flex uk-flex-middle">
                    <div className="uk-label uk-text-capitalize">
                      {coverNews.source.name.includes(".")
                        ? `source - ${coverNews.source.name.split(".")[0]}`
                        : `source - ${coverNews.source.name}`}
                    </div>
                    <p className="uk-text-small uk-text-muted uk-margin-small-left uk-margin-remove-vertical">
                      {/* {new Date(coverNews.publishedAt)} */}
                    </p>
                  </div>
                  {coverNews.description ? (
                    <div className="uk-margin-top uk-width-xxlarge uk-text-left">
                      <p>{coverNews.description}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {general.length > 0 ? (
        <Fragment>
          <div className="uk-background-secondary">
            <div className="uk-container">
              <hr className="horizon-line uk-margin-remove" />
            </div>
          </div>

          <section className="uk-section uk-section-secondary uk-preserve-color">
            <div className="uk-container">
              <div uk-grid="">
                <div className="uk-width-2-3@m">
                  <div className="uk-width-1-1">
                    <div className="uk-panel">
                      {general.map((g, idx) =>
                        idx < 3 ? (
                          <CardList
                            key={g.url}
                            title={g.title}
                            img={g.urlToImage}
                            url={g.url}
                            date={g.publishedAt}
                            description={g.description}
                            cat={g.source.name}
                          />
                        ) : null
                      )}
                    </div>
                  </div>
                </div>
                <div className="uk-width-1-3@m">
                  {business.length > 0 ? (
                    <Fragment>
                      <div uk-grid="">
                        <div className="uk-width-1-1">
                          <h3 className="uk-h3 uk-text-capitalize uk-text-bold uk-text-left horizon-title">
                            Business
                          </h3>
                        </div>
                      </div>
                      <div className="uk-child-width-1-1" uk-grid="">
                        {business.map((b, idx) =>
                          idx < 6 ? (
                            <Fragment key={b.url}>
                              <div className="uk-visible@m">
                                <CardListMini
                                  title={b.title}
                                  img={b.urlToImage}
                                  date={b.publishedAt}
                                  url={b.url}
                                  cat={b.source.name}
                                />
                              </div>
                              <div className="uk-hidden@m">
                                <CardList
                                  title={b.title}
                                  img={b.urlToImage}
                                  url={b.url}
                                  date={b.publishedAt}
                                  description={b.description}
                                  cat={b.source.name}
                                />
                              </div>
                            </Fragment>
                          ) : null
                        )}
                      </div>
                    </Fragment>
                  ) : null}
                </div>
              </div>
            </div>
          </section>
        </Fragment>
      ) : null}

      {entertainment.length > 0 ? (
        <Fragment>
          <div className="uk-background-secondary">
            <div className="uk-container">
              <hr className="horizon-line uk-margin-remove" />
            </div>
          </div>

          <section className="uk-section uk-section-secondary uk-preserve-color">
            <div className="uk-container">
              <div uk-grid="">
                <div className="uk-width-1-1">
                  <h2 className="uk-h3 uk-text-left uk-text-capitalize uk-text-bold horizon-title">
                    Entertainment
                  </h2>
                </div>
              </div>
              <div
                className="uk-child-width-1-3@m uk-child-width-1-2@s"
                uk-grid=""
              >
                {entertainment.map((e, idx) =>
                  idx < 3 ? (
                    <div key={e.url}>
                      <CardGrid
                        title={e.title}
                        img={e.urlToImage}
                        url={e.url}
                        date={e.publishedAt}
                        cat={e.source.name}
                      />
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </section>
        </Fragment>
      ) : null}

      {technology.length > 0 ? (
        <Fragment>
          <div className="uk-background-secondary">
            <div className="uk-container">
              <hr className="horizon-line uk-margin-remove" />
            </div>
          </div>
          <section className="uk-section uk-section-secondary uk-preserve-color">
            <div className="uk-container">
              <div uk-grid="">
                <div className="uk-width-1-1">
                  <h2 className="uk-h3 uk-text-left uk-text-capitalize uk-text-bold horizon-title">
                    Technology
                  </h2>
                </div>
                <div className="uk-width-2-3@m">
                  <div className="uk-width-1-1">
                    <div className="uk-panel">
                      {technology.map((t, idx) =>
                        idx < 3 ? (
                          <CardList
                            key={t.url}
                            title={t.title}
                            img={t.urlToImage}
                            url={t.url}
                            date={t.publishedAt}
                            description={t.description}
                            cat={t.source.name}
                          />
                        ) : null
                      )}
                    </div>
                  </div>
                </div>
                <div className="uk-width-1-3@m">
                  <div uk-grid="">
                    <div className="uk-width-1-1">
                      <h3 className="uk-h3 uk-text-capitalize uk-text-bold uk-text-left horizon-title">
                        Sports
                      </h3>
                    </div>
                  </div>
                  <div className="uk-child-width-1-1" uk-grid="">
                    {sports.map((sport, idx) =>
                      idx < 6 ? (
                        <Fragment key={sport.url}>
                          <div className="uk-visible@m">
                            <CardListMini
                              title={sport.title}
                              img={sport.urlToImage}
                              date={sport.publishedAt}
                              url={sport.url}
                              cat={sport.source.name}
                            />
                          </div>
                          <div className="uk-hidden@m">
                            <CardList
                              title={sport.title}
                              img={sport.urlToImage}
                              url={sport.url}
                              date={sport.publishedAt}
                              description={sport.description}
                              cat={sport.source.name.replace(".com", "")}
                            />
                          </div>
                        </Fragment>
                      ) : null
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fragment>
      ) : null}

      {science.length > 0 ? (
        <Fragment>
          <div className="uk-background-secondary">
            <div className="uk-container">
              <hr className="horizon-line uk-margin-remove" />
            </div>
          </div>

          <section className="uk-section uk-section-secondary uk-preserve-color">
            <div className="uk-container">
              <div uk-grid="">
                <div className="uk-width-1-1">
                  <h2 className="uk-h3 uk-text-left uk-text-capitalize uk-text-bold horizon-title">
                    Science
                  </h2>
                </div>
              </div>
              <div
                className="uk-child-width-1-3@m uk-child-width-1-2@s"
                uk-grid=""
              >
                {science.map((s, idx) =>
                  idx < 3 ? (
                    <div key={s.url}>
                      <CardGrid
                        title={s.title}
                        img={s.urlToImage}
                        url={s.url}
                        date={s.publishedAt}
                        cat={s.source.name}
                      />
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </section>
        </Fragment>
      ) : null}

      {general.length > 3 ? (
        <Fragment>
          <div className="uk-background-secondary">
            <div className="uk-container">
              <hr className="horizon-line uk-margin-remove" />
            </div>
          </div>

          <section className="uk-section uk-section-secondary uk-preserve-color">
            <div className="uk-container">
              <div uk-grid="">
                <div className="uk-width-1-1">
                  <h2 className="uk-h3 uk-text-left uk-text-capitalize uk-text-bold horizon-title">
                    Latest articles
                  </h2>
                </div>
              </div>
              <div uk-grid="">
                <div className="uk-width-1-1@m">
                  <div className="uk-width-1-1">
                    <div className="uk-child-width-1-2@s" uk-grid="">
                      {general.map((g, idx) =>
                        idx > 3 ? (
                          <div key={g.url}>
                            <CardGrid
                              title={g.title}
                              img={g.urlToImage}
                              url={g.url}
                              date={g.publishedAt}
                              cat={g.source.name}
                            />
                          </div>
                        ) : null
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export { Home };
