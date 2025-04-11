//const tinderUser=new Object();
const tinderUser={};
tinderUser.id="123"
tinderUser.name="sammy";
//console.log(tinderUser);
const regularUser={
    email:"jdhs@gmail",
    fullname:{
        userfullname:{
            firstname:"name",
        lastname:"surname",
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);
const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};
const obj3={5:"a",6:"b"};
const obj4=Object.assign({},obj1,obj2,obj3);
const users=[{
    id:1,
    email:"cdiid@bala"
},
{
    id:2,
    email:"efuhhkdfhkhgi@bala"
}]
    

//console.log(obj4);
//users[1].email
//console.log(tinderUser);
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));
//console.log(tinderUser.hasOwnProperty('isLoggedIn'));