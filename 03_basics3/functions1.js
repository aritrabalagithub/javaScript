// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
// const result=addTwoNumbers(3,6)
// console.log(result)
function addTwoNumbers(number1,number2){
    // let result=number1+number2;
    // return result;
    return number1+number2;
}
//console.log(addTwoNumbers(9,12));

function loginUser(username="sam"){
    if(!username){
        console.log("please enter a user name");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUser('kaka'));
 function calculateCartPrice(val1,val2,...num1){
     return num1;
 }
// console.log(calculateCartPrice(200,400,500,700))
const user={
    username:"hitesh",
    prices:199
}
function handleObject(anyObject){
    console.log(`username:${anyObject.username} and price${anyObject.prices}`);
    }
//handleObject(user)
handleObject({
    username:"abc",
    prices:16
})
const myNewArray=[120,222,78];

function returnSecondVal(getArray){
   return getArray[1]; 

}
console.log(returnSecondVal([45,67,89]))