const user={
    username:"hitesh",
    loginCount:8,
    signedIn:true,
    
    getUserDetails:function(){
        //console.log(`username:${this.username}`);
        console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);
function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    this.greeting=function(){
        if(this.isLoggedIn===true){
            console.log(`welcome ${this.username}`)
        }else{
            console.log(`sorry ${this.username} you are not logged in`);
        }
    }
    //return this;
}
const userNameOne=new User("name",12,false);
const userNameTwo=new User("name2",12,true);
//  console.log(userNameOne.greeting());
//  console.log(userNameTwo.greeting());
// console.log(userNameOne);
//  console.log(userNameTwo.constructor)
// console.log(userNameOne instanceof User)
// console.log(userNameTwo instanceof User)
console.log(userNameOne instanceof Object)
console.log(userNameTwo instanceof Object)