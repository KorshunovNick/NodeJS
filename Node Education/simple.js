const arr = []

for (let i = 0 ; i < 100000000; i++){
  arr.push(i)
}

const start = Date.now()

// const average = function(salary) {
//     let max = salary[0]
//     let min = salary[0]
//     let sum = 0 

//     salary.forEach(e => {
//         if (e > max) max = e 
//         if (e < min) min = e
//         sum += e
//     })
    
//     return ( sum - max - min ) / (salary.length - 2)
// };
const average = function(salary) {
    salary.sort( (a ,b)=> a - b)
    return salary.slice(1,-1).reduce((ac,e) => ac + e, 0) / ( salary.length - 2  )  
};

console.log(average(arr))
console.log(Date.now() - start )