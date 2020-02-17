import React, { Fragment, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Header, Footer } from "../components";
import { Home, Page } from "../views";
import { getNews } from "../services";

const categories = [
  "default",
  "sports",
  "business",
  "entertainment",
  "technology",
  "science",
  "health"
];

const App = () => {
  const [news, setNews] = useState({});

  useEffect(() => {
    let newsLS = JSON.parse(localStorage.getItem("news"));
    let req = true;

    if (req) {
      categories.forEach(cat => {
        if (cat === "default") {
          getNews().then(res => {
            if (!newsLS) {
              newsLS = news;
            }
            if (Array.isArray(res)) {
              newsLS.default = res;
              localStorage.setItem("news", JSON.stringify(newsLS));
            }
            setNews(newsLS);
          });
        } else {
          getNews(cat).then(res => {
            if (!newsLS) {
              newsLS = news;
            }
            if (Array.isArray(res)) {
              newsLS[cat] = res;
              localStorage.setItem("news", JSON.stringify(newsLS));
            }
            setNews(newsLS);
          });
        }
      });
    } else {
      setNews(JSON.parse(localStorage.getItem("news")));
    }
  }, []);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Horizon</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header title="Horizon" news={news} />
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Home {...props} news={news} />}
        />
        <Route
          path="/:category"
          render={props => (
            <Page {...props} news={news[props.match.params.category]} />
          )}
        />
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default App;
