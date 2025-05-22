function multipleBy5(num){
    return num*5;
}
multipleBy5.power=2;
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);
console.log(multipleBy5(5));
function createUser(username,score){
    this.username=username;
    this.score=score;
}