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

//  Array.prototype.user=function(){
//     console.log("present in all array");
//  }
Object.prototype.user=function(){
     console.log('aritra says hi');
 }

 heroPower.user();
myHeros.user();
//inheritance
const User={
    name:"chai",
    email:"cjai@goolge.com"
}
const Teacher={
    make:true
}
const teachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:'js Assignment',
    fullTime:true,
    __proto__:teachingSupport,
}
Teacher.__proto__=User
Object.setPrototypeOf(teachingSupport,Teacher);
let anotherUsername= "ChaiAurCode"
String.prototype.trueLength=function(){
    console.log(`${this}`)
    console.log(`${this.name}`);
    console.log(`True length is:${this.trim().length}`);

    }
anotherUsername.trueLength()
"hitesh".trueLength();
"iceTea".trueLength();