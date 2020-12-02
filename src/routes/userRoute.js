const { Router } = require('express')
const router = Router()
const{
    createUser,
    getUsers,
    updateUser,
    deleteUser } = require('../controllers/userController')

// create=post
router.post('/api/user/new', createUser)

// read=get
router.get('/api/user/find', getUsers)

// update = put
router.put('/api/user/update', updateUser)

// delete
router.delete('/api/user/remove', deleteUser)

module.exports = router