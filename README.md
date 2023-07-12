# Book Recommendations API in Nest.js

This project is a book recommendation system that allows users to add the pages of books that they read and the system could recommend the most trending books based on the most read books.

This API is still under development, but it is built on role-based authorization which makes it scalable for building admin panels.

## Steps to run
### Environment Variables
First create a .env file and add the needed environment variables to it.
<br>
There's a sample version .env file which contains all the required environment variables including:
<ul>
<li> PostgreSQL database variables
<li> JWT secret
<li> Password encryption salt 
</ul>

### Docker
I've created a docker compose file to run PostgreSQL and it takes environment variables from .env file.
You can use a hosted database version of PostgreSQL by modifying the .env file and ignoring this Docker compose file.
The following command can be used to create a Docker Container.
``` 
docker-compose up -d 
```

### Database
It is recommended to import the database dump found.
The one that worked for me was the tar dump (dump-book-recommendation-202307112137.tar).
This dump has some roles and claims so that the application becomes easier to be tested.

users credentials:
readers:
  email: reader
  pass: notok

  email: ok7
  pass: notok

admin_books:
  email: books-admin
  pass: notok

### NPM commands
This project was built using TypeScript enforces us to build the project before running (for production version)
To build the project.
```
npm run build
```

To start the built project.
```
npm run start:prod
```

To Run the project in development mode.
```
npm run start:dev
```

To lint the project.
```
npm run lint
```

To format the project.
```
npm run format
```

## APIs
All APIs are found in the insomnia package called book-recommendation-api-package.json provided in the root folder
### auth/signup
This endpoint has no authorization and any user can register himself

### auth/login
User must login to generate a bearer access token in order to do actions that require authorization

### books-readings
User can submit a reading (book id, first page, last page)
User ID is not not sent through the API, instead we get it from the access token so that each user can only submit his readings

### books-recommendations
User can get a list of books recommended for reading based on most unique pages read by each user in the system.
This endpoint has pagination which can be passed through query parameters (limit and page).
The default pagination value is: limit = 5, page = 1

## Future work
### Technical
<ul>
<li> Unit tests.
<li> Validating requests body middleware.
<li> Decoupling of system layers.
<li> Create migrations instead of Typeorm sync.
</ul>

### Business
<ul>
<li> Add pagination and filteration to endpoints.
<li> More functionality based on authors and categories modules.
<li> Complete incomplete modules.
<li> Administrator user profile.
</ul>


