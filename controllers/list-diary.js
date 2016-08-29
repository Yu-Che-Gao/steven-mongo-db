const express=require('express');
const bodyParser=require('body-parser');
const router=expres.Router();
const listDiaryModel=require('../models/list-diary.js');

router.post('/list-diary', listDiaryModel.listDiary);
module.exports=router;