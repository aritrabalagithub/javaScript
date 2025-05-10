// Immediately Invoked Fuction Expressions(IIFE)
(function chai(){
    console.log(`DB connected`)
})();
(function chai(){
    console.log(`server starting`);
})();
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('name')