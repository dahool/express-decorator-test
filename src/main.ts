import { AppRouter } from 'decorators-express';
import express from "express";
import { ApiController } from "./api.router";

/*jshint unused: true */
const views = [ApiController]; // required to register controllers

const app = express();

app.use(express.json());
app.use(AppRouter.getInstance());


app.listen(3000, () => {
    console.log("Up!");
})
