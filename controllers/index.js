const express=require('express');
const router=express.Router();

router.use('/list-diary', require('./list-diary'));
router.get('/', (req, res) => { 
    res.send('you have no right to access this page.') 
});

module.exports=router;