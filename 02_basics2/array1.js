const myarr=[0,1,2,3,4];
console.log(myarr);
const newarray=myarr.join();
console.log(newarray);
//splice and slice
const arrsli=myarr.slice(1,3);
console.log(arrsli);
console.log("after slice",myarr);
const arrspli=myarr.splice(1,3);
console.log(arrspli);
console.log("after splice",myarr);
