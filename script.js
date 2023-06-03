// Написать функцию, которая принимает массив строк и возвращает новую строку, состоящую из всех элементов этого массива, объединенных в одну строку, с использованием метода reduce().

// const arrayOfStrings = (arr) => {
//     newArr = arr.reduce((acc, el)=>{
//        acc = acc + el
//        return acc
//     },'');
//     return newArr
// }
// console.log(arrayOfStrings(["Привет", "Мир", "Пример", "Массив", "Строк"]));


// Написать функцию, которая принимает массив строк и возвращает количество символов во всех строках с использованием метода reduce().

// const arrayOfLength = (arr) => {
//     newArr = arr.reduce((acc, el)=>{
//        acc += el.length
//        return acc
//     },'');
//     return newArr
// }
// console.log(arrayOfLength(["Привет", "Мир", "Пример", "Массив", "Строк"]));

// Написать функцию, которая принимает массив чисел и возвращает новый массив, состоящий только из элементов, которые больше заданного значения, с использованием метода reduce(), (Без использования метода push()) 
 
// const arrayOfNum = (arr) => {
//     newArr = arr.reduce((acc, el)=>{
//         if (el > 5){
//             acc += el
//         }
//        return acc
//     },[]);
//     return newArr
// }
// console.log(arrayOfNum([4, 9, 8, 9, 4, 2, 3,]));