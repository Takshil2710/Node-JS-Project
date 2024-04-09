1) Using NodeJS to create javascript server side applications
2) Using Express JS to create different routes for our API
3) Using Postman to fetch some requests from the API
4) Running npm init -y t create an empty package.json and later creating index.js file
5) Running npm install --save express to install express
6) Installing Nodemon a package of NodeJS (npm install --save-dev nodemon) and changing script by adding a start nodemon script
7) After GET method to select users now doing POST method to add users
8) Later using Postman to add POST method
9) Adding uuid package by (npm install uuid)
10) Using uuid package to create unique id for every user making it unique to identify
11) We can directly search for a specific user by writing http://localhost:5000/users/unique-id for any user on our browser and can fetch it
12) Adding delete route for deleting a specific user from their id by using filter function
13) Adding a controller folder to 

!! What our API will do ? It will handle some requests from users
-> We will make 5 different routes
 1)GET (finds all users)
 2)POST (creates a user) by using /:id params
 3)GET (find user details) by using /:id params
 4)DELETE (deletes a user) by using /:id params
 5)PATCH (updates a user)

!! How we can delete it 
-> by entering http://localhost:5000/user/unique-id and selecting delete method in Postman
