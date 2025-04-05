const marvel_heros=["thor","ant-man","iron-man"];
const dc_heros=["super-man","bat-man","aqua-man"];
let combinedarr=marvel_heros.concat(dc_heros);
//console.log(combinedarr); 
console.log(Array.isArray(combinedarr));
// spread method
//const all_new_heros=[...marvel_heros,...dc_heros]
//console.log(all_new_heros)
// const arr=[1,3,4,5,[5,6,9],[9,8[4,12]]];
// const real_another_arr=arr.flat(Infinity);
// console.log(real_another_arr);
// let score1=100;
// let score2=200;
// console.log(Array.from("name"));
// console.log(Array.from({name:"name"}));//
let a=15;
let b=12;
let c=5;
console.log(Array.of(a,b,c).sort((x,y)=>x-y));// lexographically fine but in numbers have to pass a compare function



