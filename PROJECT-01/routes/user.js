const express = require('express');
const {handleGetAllUsers,
       handleUpdateUserById,
       handledeleteUserById,
       handleCreateNewUser,
       handleGetUserById
       } = require('../controllers/user')
const router = express.Router();

// REST API 
router.route('/')
.get(handleGetAllUsers)
.post(handleCreateNewUser)

router
.route('/:id')
.get(handleGetAllUsers) 
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handledeleteUserById)


module.exports = router;