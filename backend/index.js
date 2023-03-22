import express from "express";
import mysql from "mysql2"
const app = express();

const db= mysql.createConnection( {
    host: "localhost",
    user: "root",
    password: "password",
    database: "Table"
})





app.listen(7777, () => {
    console.log("Connected to the backend");
})
