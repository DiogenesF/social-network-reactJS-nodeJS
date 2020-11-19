# A simple social network
A simple social network using the MERN stack.
This application allows developers to create a profile so other developers can see their information. They can also create posts and comments to interact with each other inside the application.

Using Redux for state management and JWT for authentication

### You can check the application here: https://socialmedia-mern.herokuapp.com/

To run the project in your machine, you can do the following:
  ### In config/default.json:
  ```js
  {
    "mongoURI": "",
    "jwtSecret": "mysecrettoken",
    "githubToken": ""
  }
  ```
 ### Create a cluster in MongoDB and insert your key in 'mongoURI'. Here is where you do it:
  https://www.mongodb.com/cloud/atlas/lp/try2
  
 ### Create a github personal access token and use it in 'githubToken'. Here is how you do it:
  https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token
  
 After that you'll have to run:
 ```js
 $ npm install
 ```
 
 <p> on the root folder and then go into the /client folder and run it again to install all necessary dependencies.
 Then go to the root folder and just run</p>
 
 ```js
 $ npm run dev
 ```
 
 <p>and it will start the application.</p>
 
