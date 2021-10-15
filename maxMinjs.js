
// const arr = [-5, 0, 6, 1, 5, 9, -7]


//

// console.log(maxMin(arr))



// array = [-7, -3, 0, 1, 5, 6, 8]
//
// const maxMin = (array) => {
//   let obj = array.map(n => ({value : n}))
//   obj.sort((a,b) => a.value-b.value)
//   return [obj[0] , obj[obj.length - 1]]
// }
//
// console.log(maxMin())



let array = [-7,-8,-5,0,6,1,5,4]
function maxMin(arr){
  let max = 0
  let min = 0
  for(let item = 0; item < arr.length; item++){
    if(arr[item] >= max) max = arr[item]
    if(arr[item] <= min) min = arr[item]
  }
  return {min , max}
}
console.log(maxMin(array))





let arr = [2,3,4,5,5,5,2,2,3,3,1,1,1]
let duplicateNum = arr.reduce(function (obj, num) {
  if (num in obj) {
    obj[num]++
  } else {
    obj[num] = 1
  }
  return obj
}, {})
console.log(duplicateNum)








// let arr1 = [{a:2}, {a:3},{a:5 , b:3},7,5,7,6,7]
// let arr2 = [{b:4} , {c:6} , 10 , "hello" , [21,12]]
// let arr3 = [0,1,2]


// let arrfilter = arr2.filter(value => value %2 === 0)




// const items = arr.map(item => {
//     let obj = { value: item }
//     return  obj
// })

// const items = arr
//     .filter(n => n > 0)
//     .map(n => ({value: n}))
//     .filter(obj => obj.value > 1)
//     .sort((a, b) => a.value - b.value)











