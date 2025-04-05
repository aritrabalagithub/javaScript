// singleton


//object literals
const mysym=Symbol("key 1");
const juser={
    name:"ari",
    "full name":"aritra",
    age:21,
    email:"abc@gmail",
    mysym:"symbol"
};
//Object.freeze(juser)
juser.email="micro@hotmail"
//console.log(juser.age);
console.log(juser["email"])
// console.log(juser["full name"]);
//console.log( juser[mysym]);
//Object.freeze(juser)
//console.log(juser)
juser.greeting= function() {
    console.log("hello js user");
}
console.log(juser.greeting());
juser.greeting2= function() {
    console.log(`hello js user,${this.name}`)
}
console.log(juser.greeting2())
