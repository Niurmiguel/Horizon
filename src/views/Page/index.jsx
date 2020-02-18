import React, { Fragment, useState, useEffect } from "react";
import { CardGrid, CardListMini, CardList } from "../../components/Cards";
import { Helmet } from "react-helmet";

const Page = props => {
  const {
    match: {
      params: { category }
    },
    news
  } = props;
  const [cover, setCover] = useState();
  const [general, setGeneral] = useState([]);

  useEffect(() => {
    if (news && news.length > 0) {
      let cover = news.find(n => n.urlToImage);
      setCover(cover);

      let d = news;
      d.shift();

      setGeneral(d);
    }
  }, [news]);

  return (
    <Fragment>
      <Helmet>
        <title>{category} | Horizon</title>
        <meta
          name="description"
          content="View the latest news and breaking news today for U.S., technology,  science, sports, entertainment, business and health at Horizon."
        />
      </Helmet>
      <section className="uk-section uk-section-secondary horizon-page">
        <div className="uk-container uk-margin-large-top">
          <div uk-grid="">
            <div className="uk-width-1-1">
              <h2 className="uk-h2 uk-text-bold uk-text-capitalize">
                {category}
              </h2>
            </div>
          </div>
          <div uk-grid="">
            <div className="uk-width-2-3@m horizon-cover">
              {cover ? (
                <div>
                  <CardGrid
                    title={cover.title}
                    img={cover.urlToImage}
                    url={cover.url}
                    date={cover.publishedAt}
                    cat={cover.source.name.replace(".com", "")}
                  />
                  <hr className="horizon-line uk-margin-remove" />
                </div>
              ) : null}

              {general.length > 0 ? (
                <div>
                  <div
                    className="uk-child-width-1-1 uk-margin-medium-top"
                    uk-grid=""
                  >
                    {general.map((g, idx) =>
                      idx < 3 ? (
                        <div key={g.url}>
                          <CardList
                            title={g.title}
                            img={g.urlToImage}
                            url={g.url}
                            date={g.publishedAt}
                            description={g.description}
                            cat={g.source.name}
                          />
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              ) : null}
            </div>
            <div className="uk-width-1-3@m">
              <div uk-grid="">
                <div className="uk-width-1-1">
                  <h3 className="uk-h3 uk-text-capitalize uk-text-bold uk-text-left">
                    Latest articles
                  </h3>
                </div>
              </div>
              <div className="uk-child-width-1-1" uk-grid="">
                {general.map((g, idx) =>
                  idx >= 3 ? (
                    <Fragment key={g.url}>
                      <div className="uk-visible@m">
                        <CardListMini
                          title={g.title}
                          img={g.urlToImage}
                          url={g.url}
                          date={g.publishedAt}
                        />
                      </div>
                      <div className="uk-hidden@m">
                        <CardList
                          title={g.title}
                          img={g.urlToImage}
                          url={g.url}
                          date={g.publishedAt}
                          description={g.description}
                          cat={g.source.name}
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
  );
};

export { Page };
