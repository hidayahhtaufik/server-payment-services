# Readme
## How to run the project
Here is the step to run the project.

- Get the source from Git repository ```git clone https://github.com/hidayahhtaufik/server-payment-services.git```
- Enter to directory ```cd server-payment-services ```
- Install dependencies ```npm install```
- Run Docker build ```docker build -t .```
- Run Docker compose ``` docker-compose up -d```
- Open new terminal with same working directory, then you can run this NodeJS project using development mode ```npm run start```
- We must create data seed to database, press CTR+C to stop current Nodejs running process, after that run ```npx sequelize-cli db:seed:all``` This will fill tables with some dumy datas Organization and Member
- When table Organizations and Members have dumy data then we can run Test Driven Development of this project using ```npm run test```

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