# Book Recommendations API

This project is a book recommendation system that allows users to add the pages of books that they read and the system could recommend the most trending books based on the most read books.
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

## Future work
### Technical
<ul>
<li> Unit tests.
<li> Validating requests body middleware.
<li> Decoupling of system layers.
<li> Administrator user profile.
<li> Complete incomplete modules.
</ul>

### Business
<ul>
<li> Add pagination and filteration to endpoints.
<li> Better recommendation system based on the percentage of book read and how many people read it.
<li> More functionality based on authors and categories modules.
</ul>


