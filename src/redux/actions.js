import Types from './types';

const getNews = (query, page, category) => dispatch => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  let searchCategory = category ? category : 'general';
  let url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    `page=${page}&` +
    `category=${searchCategory}&` +
    `apiKey=${API_KEY}`
  if (query) {
    url = 'https://newsapi.org/v2/everything?' +
      `q=${query}& ` +
      `page=${page}&` +
      'sortBy=popularity&' +
      `apiKey=${API_KEY}`
  }
  fetch(url)
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: Types.GET_NEWS,
        payload: res,
      });
    })
    .catch(err => {
      console.log(err);
    });
}

export default {
  getNews,
  Types
};
