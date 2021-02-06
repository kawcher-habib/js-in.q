// const numbers = [3,4,5,6,8,9];
// const output = []
// for (let i = 0; i<numbers.length; i++){
//     const element = numbers[i];      //just for exm.
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);


// const numbers = [3,4,5,6,8,9];
// numbers.map(function(element,index,array){
//     console.log(element,index,array)
// })
// const numbers = [3,4,5,6,8,9];
// const result = numbers.map(function(element){
//     return element * element;
// })
// console.log(result);
// const  result = numbers.map(x => x * x);
// console.log(result)
// const  bigger = numbers.filter(x => x > 5);
// console.log(bigger)
// const  find = numbers.find(x => x > 5);
// console.log(find)


const students = [
    {id: 20, Name: 'kawcher'},
    {id: 21, Name: 'habib'},
    {id: 23, Name: 'Rafi'},
    {id: 25, Name: 'Rohim'}
]
const studentsNew = []
// for(i=0; i<students.length; i++){
//         const StudentCount = students[i];
//         const passValue = StudentCount.Name;
//         studentsNew.push(passValue);

// }
// console.log(studentsNew)

const Students = students.map(n => n.Name);
const bigger = students.filter(s => s.id>20)
const biggerOne = students.find(x => x.id<23)
console.log(biggerOne)