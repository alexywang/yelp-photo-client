# Yelp Image Helper

The Yelp Business API only gives you a maximum of 3 photos. This client scrapes the Yelp business page to provide more photos.

# Requirements
The only info this package needs to work is the Yelp Business ID that you wish to obtain photos for. 

Business ID's can be found through the Yelp API, such as their Business Search endpoint. The Yelp API requires an API key, but this package does not.

# Usage

```
npm install yelp-photo-client
```

```javascript
const client = require('yelp-photo-client')();

client.getPhotos(some_business_id)
  .then(console.log)

/*
[
  {
    thumbnail: 'https://s3-media0.fl.yelpcdn.com/bphoto/DJncdGT734WCDQ7V0Txfvg/300s.jpg',
    original: 'https://s3-media0.fl.yelpcdn.com/bphoto/DJncdGT734WCDQ7V0Txfvg/o.jpg'
  },
  {
    thumbnail: 'https://s3-media0.fl.yelpcdn.com/bphoto/bBEW89GQ7LwYWyyvvuV2KA/300s.jpg',
    original: 'https://s3-media0.fl.yelpcdn.com/bphoto/bBEW89GQ7LwYWyyvvuV2KA/o.jpg'
  },
  ...
]
*/
```

## Query Params
Query Params can be optionally passed to the `getPhotos` method to be appended to the requests. 
Known useful query parameters are: 

- `start`: The index offset of the first image returned. Useful for pagination since scraping can only return a subset of all results with a single request.
- `tab`: The Yelp tab to scrape from (i.e. `food`, `inside`, `outside`, `drink`, `menu`)