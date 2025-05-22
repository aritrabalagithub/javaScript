class User{
constructor(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}
// encryptPassword(){
//     return `${this.password}abc`
// }
//  Changeusername(){
//     return`${this.username.toUpperCase()}`
//  }
}
User.prototype.Changeusername=function(){
    return`${this.username.toUpperCase()}`;
}
User.prototype.encryptPassword=function(){
    return `${this.password}abc&`;
}
const chai=new User("user1","user1@chai",17829);

console.log(chai.encryptPassword());
console.log(chai.Changeusername())
