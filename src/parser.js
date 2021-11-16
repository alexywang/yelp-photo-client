SRCSET_REGEX = /srcset=".*"/gm;
IMG_URL_REGEX =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
THUMBNAIL_REGEX = /https:\/\/.*yelpcdn.*\/300s\.\w*/;

const parseBizPhotosPageHtml = (html) => {
  const photos = [];
  const srcSets = html.match(SRCSET_REGEX);

  for (const srcSet of srcSets) {
    const urls = srcSet.match(IMG_URL_REGEX);
    const photo = getPhotosFromUrls(urls);
    if (photo) photos.push(photo);
  }

  return photos;
};

const getPhotosFromUrls = (urls) => {
  const thumbnail = urls.find((str) => str.match(THUMBNAIL_REGEX));
  if (!thumbnail) return null;

  const original = thumbnail.replace('/300s.', '/o.');

  return {
    thumbnail,
    original,
  };
};

module.exports = {
  parseBizPhotosPageHtml,
};
