let mydate=new Date(2025,6,7);
console.log(mydate.toDateString());
let newdate=new Date("04-04-25");
console.log(newdate.toDateString());
let mytime=Date.now();
console.log(mytime);

// internationalization
let intdate=new Date();
intdate.toLocaleString('default',{
    weekday:"long",

})
console.log(intdate);