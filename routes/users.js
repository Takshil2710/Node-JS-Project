// Route for users
import express, { Router } from 'express';
import { getUsers, createUser, getUser, deleteUser, updateUser} from '../controllers/users.js';


const router = express.Router(); // Initailizing our router

//all routes will start from /users
router.get('/', getUsers); // fetching a user request

router.post('/', createUser); // to add a new user into the database

router.get('/:id', getUser); // here :id is the generated unique id to get or fetch for a particular user

router.delete('/:id', deleteUser); // here we will use the id to specific remove that id from our server

router.patch('/:id', updateUser); // To update any feature of user

export default router;