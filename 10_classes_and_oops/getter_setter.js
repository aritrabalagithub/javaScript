class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(val){
       this._email=val.toUpperCase();
    }
    get password(){
      return `${this._password}ari`;
    }
    set password(val){
        this._password=val.toUpperCase();
    }

}
const user=new User("sam","123sam");
//console.log(user);
// console.log(user.password)
// console.log(user.email)
user.password='pass';
user.email="userEmail@123";
console.log(user.password)
console.log(user.email)


