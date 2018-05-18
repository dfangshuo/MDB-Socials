# REST API (MDB Socials)

*by Fang Shuo*

This REST API handles the database calls that [MDB Socials](https://github.com/dfangshuo/mdbSocialRestAPI), an internal social media app, needs to make. It is used for data upload, update and retrieval through HTTP POST, PATCH and GET requests.

## Features
- **Security:** Keeps business logic server-side
- **Portability:** MDB Socials currently exists as an iOS App, but this REST API lays the groundwork for expansion and the creation of a product line across multiple platforms that can all make calls to this same REST API.

## Implementation

**Languages: **: Node.js, JavaScript     
**Frameworks:** Heroku

The REST API is implemented using Node.js, with extensive help from *Krishnan*. Using the scaffold that he provided, I wrote the different routes and functions, before unit testing them using the Postman. Once working, the REST API was hosted on Heroku.

This was an individual project.