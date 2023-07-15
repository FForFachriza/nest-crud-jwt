<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## API Reference

#### Get All Todo

```http
  GET /todo?showuser={value}&showcategories={value}
```

| Query | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `showcategories` | `boolean` | **Optional**. To Show Categories Inside Todos |
| `showuser` | `boolean` | **Optional**. To Show User Inside Todos |

#### Get Single Todo
```http
  GET /todo/:uuid?showuser={value}&showcategories={value}
```

| Query | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `showcategories` | `boolean` | **Optional**. To Show Categories Inside Todos |
| `showuser` | `boolean` | **Optional**. To Show User Inside Todos |

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `uuid` | `string` | **Required**. The Todo specific uuid |

#### Make A Todo
```http
  POST /todo
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**. The Todo title |
| `categoriesId` | `string` | **Required**. The Todo categoriesId to attach about |


#### Edit A Todo
```http
  PATCH /todo/:uuid
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `uuid` | `string` | **Required**. The Todo specific uuid |

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**. The Todo edited title |
| `categoriesId` | `string` | **Required**. The Todo edited categoriesId |

#### Delete Todo
```http
  DELETE /todo/:uuid
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `uuid` | `string` | **Required**. The Todo specific uuid |


###

#### Get All Categories

```http
  GET /categories?showtodo={value}
```

| Query | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `showtodo` | `boolean` | **Optional**. To Show Todo Inside Categories |


#### Get Single Categories
```http
  GET /categories/:uuid?showtodo={value}
```

| Query | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `showtodo` | `boolean` | **Optional**. To Show Todo Inside Categories |

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `uuid` | `string` | **Required**. The Categories specific uuid |


#### Make A Categories
```http
  POST /categories
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**. The Categories title |


#### Edit A Todo
```http
  PATCH /categories/:uuid
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `uuid` | `string` | **Required**. The Categories specific uuid |

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**. The Categories title |

#### Delete Categories
```http
  DELETE /categories/:uuid
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `uuid` | `string` | **Required**. The Categories specific uuid |

###
#### Register
```http
  POST /auth/register
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. User email |
| `password` | `string` | **Required**. User password |
| `name` | `string` | **Required**. User Name |

#### Login
```http
  POST /auth/login
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. User email |
| `password` | `string` | **Required**. User password |

#### Get User Info 
```http
  GET /auth/user-info
```

Returning user uuid and email from jwt

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
