const express=require('express');
const router=express.Router();
const {getTasks}=require('../controllers')

router.get('/tasks',getTasks)

module.exports=router;