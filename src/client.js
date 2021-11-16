const { parseBizPhotosPageHtml } = require('./parser');
const axios = require('axios').default.create();

const getPhotos = async (businessId, queryParams = null) => {
  const res = await axios.get(photosUrl(businessId, queryParams).toString());
  return parseBizPhotosPageHtml(res.data);
};

const photosUrl = (businessId, queryParams) => {
  const url = new URL(`https://yelp.com/biz_photos/${businessId}`);

  Object.keys(queryParams).forEach((key) => {
    url.searchParams.append(key, queryParams[key]);
  });

  return url;
};

module.exports = getPhotos;
