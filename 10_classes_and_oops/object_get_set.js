const User={
    _email:"sam@htmail",
    _password:"abc",
    get email(){ 
        return `${this._email}`;
        },
    set email(val){
    this._email=val
    },

    get password(){ 
        return `${this._password}encrypt`;
        },
    set password(val){
    this._password=val
    }
}
const userOne=Object.create(User)
//console.log(userOne.email);
userOne.email="newEmail@123"
userOne.password='neewpass'
console.log(userOne.email)
console.log(userOne.password)

