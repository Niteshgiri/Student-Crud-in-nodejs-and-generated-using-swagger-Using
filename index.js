const express = require('express')
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const app = express()
const swaggerJSDocs = YAML.load("./api.yaml");
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs));


//app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs));

// middleware

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


const router = require('./router/Student.router')
app.use('/', router)


//server

app.listen(8080, () => {
    console.log(`server is running on port 8080`)
})