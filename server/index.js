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

// app.get('/', async (req, res) => {
//     const account = await usersModel.find();
//     return res.json({users: account});

// })

app.post("/supper-car-k/authen/register", async (req, res)=>{
    // let user = new usersModel(req.body);
    // let result = await user.save();
    // res.send(result);
    try {
        const { email, password } = req.body;
    
        // Kiểm tra xem email đã tồn tại chưa
        const existingUser = await usersModel.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: 'Email already exists' });
        }
    
        // Nếu email chưa tồn tại, tạo người dùng mới
        const newUser = new usersModel({ email, password });
        await newUser.save();
    
        return res.status(201).json({ message: 'User registered successfully', user: newUser });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
})


app.listen(8080, () => {
    console.log("app is running")
})