// function multipleBy5(num){
//     return num*5;
// }
// multipleBy5.power=2;
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);
// console.log(multipleBy5(5));
function createUser(username,score){
    this.username=username;//current context
    this.score=score;
}
createUser.prototype.increment=function(){
    this.score++;
}
createUser.prototype.printMe=function(){
    console.log(`Score is${this.score}`);

}
const userOne=new createUser('user1',12);
const userTwo=new createUser('user2',18);
userOne.increment();
userTwo.increment();
// console.log(userOne);
// console.log(userTwo);
console.log(userOne.score);
//console.log(userTwo.increment());



