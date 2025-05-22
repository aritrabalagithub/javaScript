function setUserName(username){
    this.username=username;
    console.log("called");
    
}
function createUser(username,email,password){
    // setUserName(username) //wrong statement
    // setUserName(this,username) //wrong
    setUserName.call(this,username)
    this.email=email;
    this.password=password;
}
const userOne=new createUser("user1","rail@gmail",78312);
console.log(userOne);
