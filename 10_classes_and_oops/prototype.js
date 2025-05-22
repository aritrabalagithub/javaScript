// let myName="user";

// console.log(myName.length)
// console.log(myName.truelength)
let myHeros=["thor","spiderMan"];
let heroPower={thor:"hammer",
    spiderMan:"web",
    getSpidyPower:function(){
        console.log(`Spider Power is ${this.spiderMan}`)
    }
}
// heroPower.prototype.user=function(){
//     console.log(`user is present in all objects`);
// }
// Array.prototype.user=function(){
//     console.log("present in all array");
// }
// Object.prototype.user=function(){
//     console.log('aritra says hi');
// }
myHeros.prototype.user=function(){
    console.log("present in myHeroes");
}
 //heroPower.user();
myHeros.user();