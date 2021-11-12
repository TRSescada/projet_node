const User = require('../models/User');

const index =(req,res,next) => {
    User.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message : 'An error Occured!'
        })
    })
}
const show = (req, res , next) => {
    let UserId = req.body.userId
    User.findById(userId)
    .then(response => {
        res.json({
            response})
    })
    .catch(error =>{
        res.json({
            message : 'An error occurred'
        })
    })
}
const store = (req , res, next) => {
    let user = new user ({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    })
    user.save()
    .then(response => {
        res.json({
            message :'User added Successfully'
        })
    })
    .catch(error =>{
        res.json({
            message : 'An error occured'
        })
    })
}

/* -------------------
hadhiya partie update User :
------------------------
const update = (req , res , next) => {
    let userId = req.body.userId
    let updateData = {
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    }
    User.findByIdAndUpdate(userId, {$set : updateData})
    .then(()=>{
        res.json({
            message : 'User updated successfully!'
        })
    })
    .catch(error =>{
        res.json({
            message:'An error Occured'})
    })
}*/

module.exports = {
    index,show,store
}