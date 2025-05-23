const desc= Object.getOwnPropertyDescriptor(Math,'PI');
//console.log(desc);
// factory function
const myNewObj={
    name:'user',
    email:"user@123",
    isAvailable:true,

    order:function(){
        console.log("executed");
        
    }
}
//console.log(Object.getOwnPropertyDescriptor(myNewObj,'isAvailable'));
//console.log(Object.getOwnPropertyDescriptor(myNewObj,'email'));
 Object.defineProperty(myNewObj,'email',{
   writable: false,
  enumerable: false, })
Object.defineProperty(myNewObj,'name',{
   writable: false,
  enumerable: false, })

// console.log(Object.getOwnPropertyDescriptor(myNewObj,'email'));
for(let [key,value] of Object.entries(myNewObj)){
    if(typeof value!='function'){
        console.log(`${key} : ${value}`);
    }
}