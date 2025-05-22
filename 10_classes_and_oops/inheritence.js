class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,eamil,password){
        super(username)
        this.eamil=eamil;
        this.password=password;
    }
     addCourse(){
         console.log(`new course launched by${this.username}`);
      }
   
}
 
 const teacherOne=new Teacher('teacher1','sam@udemy',4525);
 teacherOne.addCourse()
 const userTwo=new User('user2');
 teacherOne.logMe()
 userTwo.logMe()