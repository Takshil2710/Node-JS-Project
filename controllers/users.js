import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req,res) => {
    res.send(users);
}    

export const createUser = (req,res) => {
    const user = req.body; // Request data from the client and shows onto to the console req.body()
    
    users.push({ ...user, id: uuidv4() }); //to push unique id into server

    res.send(`User with name ${user.firstName} ${user.lastName} having age ${user.age} added to database`);
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id); // To find that user having unique ID

    if (!foundUser) {
        return res.status(404).send("User not found");
    }

    const { firstName, lastName, age, id: userId } = foundUser;
    res.send({ firstName, lastName, age, id: userId });
}

export const deleteUser = (req,res) => { 
    const {id} = req.params;
    const {firstName} = req.body;

    users = users.filter((user) => user.id !== id) // using filter function to return the specific array here condition is false so it will remove it from the array

    res.send(`User with id ${id} deleted having name ${firstName} from the database`);
}

export const updateUser = (req,res) => { 
    const {id} = req.params;
    const {firstName,lastName,age} = req.body;  // requests the body for a given id 

    const user = users.find((user) => user.id === id);
    
    //To update any feature of user
    if(firstName) user.firstName = firstName;

    if(lastName) user.lastName = lastName;

    if(age) user.age = age;

    res.send(`User with id ${id} has been updated`);
}
