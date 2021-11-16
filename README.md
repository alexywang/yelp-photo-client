# Yelp Image Helper

The Yelp Business API only gives you a maximum of 3 photos. This client scrapes the Yelp pages by business ID to provide more photos.

# Requirements
The only info this package needs to work is the ID of the business that you wish to obtain photos for. 
This package doesn't require an API key, but you will need one if you plan to find ID's using the Yelp API. 

# Usage

```
npm install yelp-photo-client
```

```javascript
getPhotos = require('yelp-photo-client');

getPhotos(some_business_id)
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
Query params can be optionally passed to the `getPhotos` method to be appended to the requests. 
Known useful parameters are: 

- `start`: A number offset for the first image returned. Useful for pagination since scraping can only return a subset of all results with a single request.
- `tab`: A string representing the Yelp tab to scrape from (i.e. `food`, `inside`, `outside`, `drink`, `menu`)

```javascript
getPhotos(some_business_id, {
  start: 30,
  tab: 'food'
})
```
