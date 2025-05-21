// const promiseOne=new Promise(function(resolve,reject){
// // do a async task,DB calls,network calls,cryptograpy
// setTimeout(function(){
//     console.log("task complete");
//     resolve();// connected with .then()
// },5000)
// });
// // consumption
// promiseOne.then(function(){
//     console.log("promise consumed");
// });//gets a callback
 
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()//connection with then
    },2000)
}).then(function(){
    console.log("promise 2 consumed");
    
})
 const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"example@gmail.com"});
    },1000)
});

    promiseThree.then(function(user){
        console.log(`${user.username}  ${user.email}`);
    });

//  const promise
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"user4",email:"mail4@gamil"})
        }
        else{
            reject("ERROR:something went wrong");
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
console.log(username);
}).catch(function(error){
    console.log(error)//reject message
})