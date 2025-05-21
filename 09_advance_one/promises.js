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