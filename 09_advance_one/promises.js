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
// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true
//         if(!error){
//             resolve({username:"user4",email:"mail4@gamil"})
//         }
//         else{
//             reject("ERROR:something went wrong");
//         }
//     },1000)
// })
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((username)=>{
// console.log(username);
// }).catch(function(error){
//     console.log(error)//reject message
// }).finally(()=>console.log('the promise is either resolved or rejected'));
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:'javaScript',password:"123"})
        }else{
            reject('ERROR:js went wrong');
        }
    },1000)
})
async function consumePromiseFive(){
   try {
     const response=await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
    
   }
    }

consumePromiseFive();

// async function getallusers(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users');
//     const data=response.json();
//     //console.log(data);
//     console.log(response);
//     } catch (error) {
//         console.log('E:',error)
//     }
// }
// getallusers()
fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error));