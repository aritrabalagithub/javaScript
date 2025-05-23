function User(email,password){
    this._email=email;
    this._password=password;
    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this._email=value
        }
    })
    Object.defineProperty(this,'password',{
        get:function(){
            return`${this._password.toUpperCase()}pass`;
        },
        set:function(value){
            this._password=value
        }
    })

}
const newUser=new User("newuser@htmail","18732");
// console.log(newUser);
console.log(newUser.email)
console.log(newUser.password)
newUser.email='kenichi';
newUser.password="ken@123"
 console.log(newUser.email)
 console.log(newUser.password)