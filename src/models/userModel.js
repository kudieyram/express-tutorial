const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema ({

    username: {  
        type: String, 
        minlength: [5, 'minimum username length is 5'], 
        maxlength: [16, 'maximum username length is 16'],
        required: [true, 'please enter a username'], 
        lowercase: true,
    },
      
    email: { 
        type: String, 
        unique: true, 
        required: [true, 'the email field is required'],
        lowercase: true
    },

    password: {  
        type: String, 
        minlength: 8, 
        required: [true, 'you must enter a password'],
    },
       
})



const User = mongoose.model('user', userSchema)

module.exports = User