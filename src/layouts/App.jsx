import React, { Fragment, Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Header, Footer } from "../components";
import { Home, Page } from "../views";

const categories = [
  "general",
  "sports",
  "business",
  "entertainment",
  "technology",
  "science",
  "health"
];

class App extends Component {
  state = {
    news: {}
  }

  UNSAFE_componentWillMount() {
    const newsLS = JSON.parse(localStorage.getItem('news'))

    if ( newsLS ) {
      this.setState({ news: newsLS })
    }
  }

  componentDidMount() {
    const self = this

    async function fetchNews(category) {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=10&apiKey=329632789732429d8a59abefaf89e88a`
        );
    
        const { articles, status, message } = await response.json();
        
        if (status === "ok") {
          self.setState({ news: {
            ...self.state.news,
            [category] : articles
          }}, () => {
            localStorage.setItem("news", JSON.stringify(self.state.news));
          })
        } else {
         console.log(message)
        }
      } catch (error) {
        console.log(error)
      }
    };

    categories.map( cat => fetchNews(cat) )
  }

  render() {
    const { news } = this.state

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
  }
}

export default App;
