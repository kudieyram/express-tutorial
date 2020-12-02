const User = require('../models/userModel')


function handleError(error){
    let err = {username: '', email: '', password:''}

    if(error.message === 'Incorrect username'){
        err.username= 'that username does not exit'
    }

    if(error.message === 'Incorrect email'){
        err.email ='that email is invalid'
    }

    if(error.message === 'Incorrect Password'){
        err.password = 'the password is incorrect'
    }

    if(error.code === 11000){
        err.email = 'that email is registered already'
        
        return err
    }

    if(error.message.includes('user validation failed')){
        Object.values(error.errors).forEach(({ properties }) => {
            err[properties.path] = properties.message
        })
    }
    return err
}


const userControl = {}

// create user
userControl.createUser = async(req, res) =>{
    try{
        let newUser = new User(req.body)
        let result = await newUser.save()
        res.status(200).send({message:'Congratulations! Your account has been created successfully', result})
    }catch(error){
        const warnings = handleError(error)
        res.status(400).json({warnings})
    }
}

// getUsers
userControl.getUsers = async(req, res) =>{
    try{
        let person = await User.find({firstname: req.body.firstname})
    if(!person){
        res.status(404).send({message:'User not found'})
    }else{
        res.status(200).send({message: 'User found', person})
    }
    }catch(error){
        const warnings = handleError(error)
        res.status(400).json({warnings})
    }
}

// update
userControl.updateUser = async(req, res) => {
    try{
        let eyram = await User.findOneAndUpdate(
            {id:req.params.id},
            {$set: req.body},
            {firstname, lastname, email, phone, password, age} = req.body
        )
        if(eyram){
            res.status(200).send({message:'User updated successfully', eyram})
        }else{
            res.status(404).send({message:'Could not updqate user'})
        }
    }catch(error){
        const warnings = handleError(error)
        res.status(400).json({warnings})
    }
}

// delete
userControl.deleteUser = async(req, res) =>{
    try{
        let nora = await User.findOneAndDelete({id:req.params.id})
    if(nora){
        res.status(200).send({message:'User deleted successfully'})
    }else{
        res.status(404).send({message:'Could not delete user'})
    }
    }catch(error){
        const warnings = handleError(error)
        res.status(400).json({warnings})
    }
}

module.exports = userControl
