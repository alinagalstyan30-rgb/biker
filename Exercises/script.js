1
// let num = prompt("write a number")
// let result;

// if(num > 0){
//   result=1;
// } else if(num < 0){
//    result=-1;
// } else {
//    result=0
// }

//alert(result);

2
// let result;

// if (a + b < 4) {
//   result = 'malo';
// } else {
//    result = 'mnogo';
// }

// let a=2
// let b=1
// let result=(a + b < 4) ? 'malo': 'mnogo';

//console.log(result);

3
// for(let i=0; i<=40; i+=2){
//    console.log(i);
// }

4
// let number=1;
// for(let i=1; i<=30; i++){
//   number*=i;
// }
// console.log(number);

5
// let result=0;
// let i=1;
// while(i<=40){
//   if(i%2==0){
//     result+=i;
//  }
//  i++
// }
// console.log(result);

6
// let i=1
// while(i<=40){
//   if(i%7===0){
//       console.log(i);
//   }
//    i++
// }

7
// let number=1;
// for(let i=1; i<=60; i++){
//    if(i%6==0){
//       number*=i; 
//    }
// } console.log(number); 

//28․09․2025
1
// let person={
//     name:'Alina',
//     age: 18,
//     city: 'Yerevan'
// }
// person.isStudent = true;

// delete person.city;

// alert(person.name);
// alert(person.age);
// alert(person.city)

// if('age' in person){
//     console.log("has age");
// } else {
//     console.log("doesn't have age");
// }
// console.log(person);

2
// function removeUndefined(obj){
//     for(let key in obj){
//         if(obj[key] === undefined){
//             delete obj[key];
//         }
//     }
//     return obj;
// }

// let obj={
//     key1:'hello',
//     key2:undefined,
//     key3: 123,
//     key4: undefined
// };

// removeUndefined(obj);
// console.log(obj);

//exercises
1
// function checkZuygTeKent(num){
//     if (num %2===0){
//         console.log(num+"zuyg")
//     } else {
//         console.log(num+"kent")
//     }
// }
// checkZuygTeKent(51,24)

2
// function findMinimum(a,b){
//     if(a<b){
//         return a;
//     } else {
//         return b
//     }
// }
// let min=findMinimum(45,87)
// console.log(min)

6
// function findMaximum(a,b,c){
//     if(a>b && a>c){
//         return a;
//     } else if(b>a && b>c){
//         return b;
//     } else{
//         return c
//     }
// }
// let max=findMaximum(62,78,24)
// console.log(max)

3
// function calculateProduct(n){
//     if(n<=1){
//         return 1;
//     }
//     let product=1
//     for(let i=1; i<n; i++){
//         product*=i
//     } return product;
// }
// console.log(calculateProduct(8))

4
function calculateProduct(n){
    if(n<=1){
        return 1;
    }
    let product=1
    for(let i=1; i<n; i++){
        product+=i
    } return product;
}
console.log(calculateProduct(10))