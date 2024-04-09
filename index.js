import express from 'express';
import bodyParser from 'body-parser'; // takes incoming post request bodies
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000; //port for our backend

app.use(bodyParser.json()); //Initiates that we will use JSON data in our application

app.use('/users',usersRoutes);

app.get('/',(req,res) => {
    res.send('Hello'); // sending a message at our client side      
}); // Setting a route using get method

app.listen(PORT,() => console.log(`Server Running on port: http://localhost:${PORT}`)); //Application will listen on the following PORT when working succesfully