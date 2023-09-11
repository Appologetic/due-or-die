// ----- External Dependencies -----
const express = require("express");

// ----- Instantiate Express App ------
const app = express();

// ----- Route Handling -----
app.get("/", (req, res) =>{
    console.log(req.method, " request received at ",req.url)
    res.send("Welcome to Due or Die")
})
//if (mockURL == "https://dueordie.com") {
//    console.log("Welcome to the homepage of the website")
//}

app.get("/sign-up", (req, res) =>{
    console.log(req.method, " request received at ",req.url)
    res.send("This is the sign up page")
})
//else if(mockURL == "https://dueordie.com/sign-up"){
//    console.log("This is the sign up page")
//}

app.use((req, res) =>{
    res.status(404).send("404: That URL does not exist")
})
//else{
//    console.log("404: that URL does not exist")
//}


// ----- Start Express App -----
app.listen(5050, () => console.log("Listening for requests on port 5050"))