
const express = require('express')
const app = express()
const port = 3000

let dbUsers = [

  {
      username: "wany",
      password: "wany183",
      name:"nur syazwany",
      email:"syazwany183@gmail.com"
  
  },
  {
      username: "mal",
      password:"kemal193",
      name:"kemal",
      email:"kemal193@gmail.com"
  }
  ]

app.use(express.json());        //enable json body parsing

app.post('/login', (req,res) => {
  let data = req.body 
  res.send(
       login(data.username, data.password)
  );
});

app.post('/register', (req,res) => {     //post route to register a new user
  let data = req.body
  res.send(
    register(
      data.username,
      data.password,
      data.name,
      data.email
    )
  );
});

//start the server
app.listen(port, () => {
    console.log('Example app listening on ${port}')
})

/*app.post('/login',(req,res)=> {
  //get the username and password from the request body
const {username,password} =req.body;

   //find the user in the database
   const user =dbUsers.find(user => user.username === username && user.password === password);
   app.post ('/register',(req,res)=> {
       let data = req.body
       res.send(
          register(
            dbUser.username,
            dbUser.password,
            dbUser.name,
            dbUser.email
          )
       )
          })
   //if user is found, return the user object
   if (user) {
    res.send(user);
   }else{
    //if user is not found,return an error message
    res.send({error: "user not found"})
   }

  })*/

 
function login (username, password){     //what it needs to be wrote down
    console.log("someone try to login with", username,password)
         //let matched = dbUsers.find(element =>   //find element inside array
         let matched =dbUsers.find(element =>
            element.username ==username          //find someone data or want to find something from database
            )
                  
    
    if (matched){
            if (matched.password == password){
                return matched
            
            }else {
                return "Password not matched"
            }
         } else {
            return"username not found"
         }   
         //console.log(matched)                  
    
    } 
    
    function register(newusername, newpassword, newname, newemail){

      dbUsers.find(element=>{
        console.log(element)             //find element in array  
    })
    //to do: to check if username is exist or not

    dbUsers.push({
      username: newusername,
      password: newpassword,
      name: newname,
      email:newemail,
    })

    return "success"

  }
 /*app.get('/',(req,res) => {
  res.send('hello world!')
 })

 app.post('/',(req,res) => {
  let data=req.body
  res.send('post request'+JSON.stringidy(data))

 })*/





    

    
