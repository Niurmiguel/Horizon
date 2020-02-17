const getNews = async ( category = 'general', size = 10 ) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${size}&apiKey=329632789732429d8a59abefaf89e88a`

  const response = await fetch(url);
  const { articles, status, message } = await response.json();

  if (status === "ok") {
    return articles;
  } else {
    return message;
  }
}


export {
    getNews
}