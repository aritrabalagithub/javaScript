 const coding=["js","ruby","java","python","cpp"]
// const values=coding.forEach((item)=>{
//     console.log(item);
//     //return item
    
// })
 const myNums=[1,2,4,7,9,12,34]
// const newNums =myNums.filter((num)=>num>4)
// for(const nums in newNums){
//     console.log(`${newNums[nums]}`);
// }
const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
//console.log(newNums);
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
const userBooks=books.filter((bk)=>bk.genre="History")
//console.log(userBooks);
const usBooks=books.filter((bk) =>{ 
    return bk.publish >= 2000 && bk.genre==="History"})
console.log(usBooks);
