# Server Payment Services

## Prerequisites
1. Node v16.14.2

## How to Run in local
1. Install [Nodejs](https://nodejs.org/en/)
2. Clone this project
3. Inside home folder (`/server-payment-services`), make a new file `.env`
4. Copy-and-paste all values from `.example.env` into `.env`
    * Make sure to adjust all values with your own local setting (e.g. port number)
5. Open terminal, and go to `/server-payment-services` location
6. Install dependencies ```npm install```
7. Run Docker build ```docker build -t .```
8. Run Docker compose ``` docker-compose up -d```
9. Run the project by executing
    ```
    npm run start
    ```
10. We must create data seed to database, press CTR+C to stop current Nodejs running process, after that run ```npx sequelize-cli db:seed:all``` This will fill tables with some dumy datas Organization and Member
11. When table Organizations and Members have dumy data then we can run Test Driven Development of this project using ```npm run test```

## Stack of this project

- ExpressJS, as web framework
- Sequelize, as database ORM
- Chai, as TDD library
- PostgreSQL, as database management system
- Docker, as containerization

## Endpoints

This projct contains Restul API following endpoints:

| Name | Method | URL | body parameters 
| ------ | ------ | ------ | ------ |
| Post comment | POST | /org/:orgname/comments | { "comment": "Hi, how are you?", "user": 1 }
| List comment | GET | /org/:orgname/comments | 
| Delete comment | DELETE | /org/:orgname/comments | 
| List organization members | GET | /org/:orgname/members | 