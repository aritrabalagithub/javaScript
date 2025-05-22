class User{
constructor(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}
encryptPassword(){
    return `${this.password}abc`
}
 Changeusername(){
    return`${this.username.toUpperCase()}`
 }
}
const chai=new User("user1","user1@chai",17829);
console.log(chai.encryptPassword());
console.log(chai.Changeusername())
