<h1 align="center">
<img alt="gobarber-logo" title="gobarber-logo" src="https://res.cloudinary.com/matheuscastroweb/image/upload/v1593749057/gobarber/gobarber-logo_rkoeqd.svg" width="250px" />
</h1>

<h4 align="center">
Completed api using typescript
(documentation in development)
</h4>

<p align="center">
  <img alt="travis" src="https://travis-ci.org/matheuscastroweb/gobarber-api.svg?branch=master" />
  <img alt="shields.io" src="https://img.shields.io/github/issues/matheuscastroweb/gobarber-api" />
   <img alt="shields.io" src="https://img.shields.io/github/license/matheuscastroweb/gobarber-api" />
</p>

<div align="center">

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Gobarber%20API&uri=https%3A%2F%2Fres.cloudinary.com%2Fmatheuscastroweb%2Fraw%2Fupload%2Fv1593748649%2Fgobarber%2Finsomnia-api_sqiqrq.json)

</div>

## Technologies

This project was developed with the following technologies:

- [aws-sdk](https://aws.amazon.com/pt/tools/)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [celebrate](https://github.com/arb/celebrate)
- [class-transformer]()
- [cors]()
- [date-fns]()
- [dotenv]()
- [express]()
- [express-async-errors]()
- [handlebars]()
- [ioredis]()
- [jsonwebtoken]()
- [mime]()
- [mongodb]()
- [multer]()
- [mysql]()
- [nodemailer]()
- [rate-limiter-flexible]()
- [redis]()
- [reflect-metadata]()
- [tsyringe]()
- [typeorm]()
- [uuidv4]()
- [jest](https://jestjs.io/)
- [prettier](https://prettier.io/)
- [ts-node-dev]()
- [tsconfig-paths]()
- [typescript](https://www.typescriptlang.org/)
- [VS Code][vc] with [EditorConfig][vceditconfig], [ESLint][vceslint]

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher and [Docker](https://www.docker.com/) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/matheuscastroweb/gobarber-api gobarber-api

# Go into the repository
$ cd gobarber-api

# Install dependencies
$ yarn
```

```bash
# Active containers in docker

# mysql
$ docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root  -d -t mysql --default-authentication-plugin=mysql_native_password

# redis
$ docker run --name redis -p 6379:6379 -d -t redis:alpine

# mongodb
$ docker run --name mongodb -p 27017:27017 -d -t mongo

# run containers
$ docker start mysql redis mongodb
```

```bash
# Create database gostack

# Run migrations
$ yarn typeorm migration:run
```

```bash
# Run server
$ yarn dev:server
```

## Routes

<div align="center">

</div>

The _token_ necessary to carry out most requests is generated from the route **`POST / sessions`** and must be sent via _Bearer_ on those routes. In Insomnia, after performing the authentication, _token_ is automatically shared with the other routes.

### User

- **`POST / users`**: The route must receive the fields`name`, `email` and`password` in the body of the request in order to register a new user.

- **`GET / profile`**: The route must receive the _token_ of the authenticated user and returns that user's information.

- **`PATCH / users / avatar`**: The route must receive the _token_ of the authenticated user and an image file in order to update the user's avatar.

- **`PUT / profile`**: The route must receive the _token_ of the authenticated user and can receive the fields`name`, `email`,`old_password`, `password` and`password_confirmation` in the body of the request so that update the data of the user in question.

## Sessions

- **`POST / sessions`**: The route must receive the `email` and `password` fields in the request body so that the user can be authenticated.

### Password

- **`POST / password / forgot`**: The route must receive the `email` field in the request body. This will cause an email to be sent for password recovery.

- **`POST / password / reset`**: The route must receive the fields `password`, `password_confirmation` and `token` in the body of the request in order to change the user password.

### Appointments

- **`POST / appointments`**: The route must receive the _token_ of the authenticated user and the fields`provider_id` and `date` in the request body in order to register a new schedule.

- **`POST / appointments / me`**: The route must receive the _token_ of the authenticated user and returns the schedules that were marked with it.

### Providers

- **`GET / providers`**: The route must receive the _token_ of the authenticated user and returns the providers registered in the system.

- **`POST / providers /: provider_id / month-availability`**: The route must receive the _token_ of the authenticated user, the`provider_id` field as a route parameter and the `month` and`year` fields as query of the requisition and returns the available days in the given month.

- **`POST / providers /: provider_id / day-availability`**: The route must receive the _token_ of the authenticated user, the`provider_id` field as a route parameter and the `day`,`month` and `fields year` as the request query and returns the available times on the informed day.

---

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
