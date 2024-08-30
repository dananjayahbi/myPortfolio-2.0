const router = require('express').Router();
const { protect } = require('../middleware/authorization');

const {
    createUser,
    login,
    getUserById,
    getAllUsers,
    updateUserById,
    deleteUserById,
} = require('../controllers/user.controller');

// Create a new User
// router.post('/createUser', protect, createUser);
router.post('/createUser', createUser);

// Login
router.post('/login', login);

// Retrieve a single User with id
// router.get('getUserById/:id', protect, getUserById);
router.get('/getUserById/:id', getUserById);

// Retrieve all Users
// router.get('/getAllUsers', protect, getAllUsers);
router.get('/getAllUsers', getAllUsers);

// Update a User with id
// router.put('/updateUserById', protect, updateUserById);
router.put('/updateUserById/:id', updateUserById);

// Delete a User with id
// router.delete('/deleteUserById/:id', protect, deleteUserById);
router.delete('/deleteUserById/:id', deleteUserById);

module.exports = router;