const {Sequelize,Op}=require('sequelize');
var db = require('../models/index')
var Users = db.users;
var data_table= async(req,res)=>{
  const data = await Users.findAll({});//select * from....

  res.status(200).json({data:data});
}
module.exports = { data_table };