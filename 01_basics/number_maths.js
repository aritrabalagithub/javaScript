const score=400;
console.log(typeof(score))
const balance=new Number(100);
console.log(balance);
console.log(balance.toString());
console.log(typeof(balance));
const other=23.456;
// toprecision(before decimal)
const othernum=123.456;
console.log(other.toPrecision(3));
console.log(othernum.toPrecision(3));
const hundreds=10000000
//in indian format
console.log(hundreds.toLocaleString('en-IN'));
// Math library in default
console.log(Math.round(Math.random()*10)+1);



