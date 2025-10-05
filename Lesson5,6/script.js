1
// let arr=[78,58,14,1,3,7]
// arr.push(22)
// alert(arr)
// arr.unshift(47,8)
// alert(arr)
// arr.pop()
// alert(arr)
// arr.shift()
// alert(arr)

2
// const numbers=[3,7,10,15,20,25];
// let bigThan10=numbers.find(number => number > 10)
// alert(bigThan10)
// let firstDividableBy5 = numbers.find(number => number %2 ===0);
// alert(firstDividableBy5)

3
// const numbers = [5,12,8,130,44];
// let biggerThan10=numbers.filter(number => number >10)
// alert(biggerThan10)
// let evenNumbers=numbers.filter(number => number %2 ===0)
// alert(evenNumbers)

4
// const words=["spray", "limit", "elite", "exuberant", "destruction", "present"];
// let longWords=words.filter(word => word.length > 6);
// alert(longWords)

5
// const numbers=[1,2,3,4,5]
// let plusNumber=numbers.map(number => number + 2)
// alert(plusNumber)
// let plusTen=numbers.map(number => number + 10)
// alert(plusTen)

6
// const people=[
//     {name: "Anna", age: 17},
//     {name: "Karen", age: 22},
//     {name: "Aram", age: 15},
//     {name: "Mery", age: 19}
// ];
// let firstAdult=people.find(person => person.age > 18);
// console.log(firstAdult)
// let adults=people.filter(person => person.age > 18);
// console.log(adults)
// let names=people.map(person => person.name);
// console.log(names)

//05.10.2025
1
// let arr=[7,5,9,2,6,7];
//  arr.splice(2, 1);
// console.log(arr);

2
// let arr=[4,5,6,7,8,9,10];
// arr.splice(0, 3, "tandz", "xndzor", "mandarin");
// console.log(arr);

3
// function mergeAndReverse(arr1, arr2){
//    let a=arr1.concat(arr2);
//    let b=a.reverse();
//  return b;
// }
// let a=[4,5,6];
// let b=[2,2,1];
// let result=(mergeAndReverse(a,b));
// console.log(result);

4
// let fruits="apple,banana,kiwi,pear"
// let arr=fruits.split(",");
// console.log(arr)

5
// let arr=["I", "STUDY", "JS"]
// let str=arr.join(';');
// console.log(str);

6
// let arr=["html", "css", "js"];
//  if (arr.includes("js")) {
//     console.log("yes");
// } else {
//     console.log("no");
// }

7
// function  containsString(arr,str){
//     if(arr.includes(str)){
//         return true;
//     } else{
//         return false;
//     }
// }
// let arr=["html", "css", "js"];
// console.log(containsString(arr, "css"));
// console.log(containsString(arr, "c++"))

8
// let arr=[10,20,30,40,50]
// arr.splice(0,3);
// console.log(arr)

9
//  let arr=["red", "green", "blue", "yellow"]
//  arr.splice(2,1, "purpule")
// console.log(arr)

10
// let str="privet kak dela";
// let reversedWords= str.split(" ").reverse().join(" ");
// console.log(reversedWords)

11
// let arr=["cat","dog","hamster", "parrot"]
// let wordWithR=arr.filter(word=>word.includes("r"));
// console.log(wordWithR)