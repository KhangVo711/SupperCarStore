import express from 'express';
// const express = require('express');
import usersModel from './models/users.js';

import connectDB from './db.js';
// const connectDB = require('./db.js');
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.get('/', async (req, res) => {
    const account = await usersModel.find();
    return res.json({users: account});

})
app.listen(8080, () => {
    console.log("app is running")
})