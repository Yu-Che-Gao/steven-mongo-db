const express=require('express');
const router=express.Router();

router.use('/list-diary', require('./list-diary'));