let baseURL = "https://dueordie.com"
let urlExtension = "/sign-up"
let mockURL = baseURL+urlExtension

console.log(mockURL)

if (mockURL == "https://dueordie.com") {
    console.log("Welcome to the homepage of the website")
}
else if(mockURL == "https://dueordie.com/sign-up"){
    console.log("This is the sign in page")
}
else{
    console.log("404: that URL does not exist")
}