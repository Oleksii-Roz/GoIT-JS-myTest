// const playlist = {
//   name: "My play musics",
//   rating: 5,
//   tracks: ["pesny1", "pesny2", "pesny3"],
//   trackCount: 3,
//   getName(a, b, c) {
//     console.log("Aga eto getName :", a, c, b);
//   },
// };

// console.log(playlist);

// playlist.getName(5, 12, 7);

// В объекте playlist надо изменить значение в name: "My play musics" на другое название name: 'Novoe imy':
// Для этого создаем функцию в объекте changeName(newName) и в ней используем this
// const playlist = {
//   name: "My play musics",
//   rating: 5,
//   tracks: ["pesny1", "pesny2", "pesny3"],
//   trackCount: 3,
//   changeName(newName) {
//     console.log("this vnytri changeName: ", this);

//     this.name = newName;
//   },
// };

// playlist.changeName("Novoe imy");

// console.log(playlist);

// В объекте playlist надо добавить к значению tracks: ["pesny1", "pesny2", "pesny3"] новый трек в массив треков tracks: ['pesny1', 'pesny2', 'pesny3', 'новый трек 1']:
// Для этого создаем функцию в объекте addTrack(track) и в ней используем this и что бы добавить .push(track)
// const playlist = {
//   name: "My play musics",
//   rating: 5,
//   tracks: ["pesny1", "pesny2", "pesny3"],
//   trackCount: 3,
//   changeName(newName) {
//     console.log("this vnytri changeName: ", this);

//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//   },
// };

// playlist.changeName("Novoe imy");
// console.log(playlist);

// playlist.addTrack("новый трек 1");
// console.log(playlist);

// Метод 1. В объекте playlist надо добавить к значению tracks: ["pesny1", "pesny2", "pesny3"] новый трек в массив треков tracks: ['pesny1', 'pesny2', 'pesny3', 'новый трек 1']. Плюс свойство trackCount должно автоматически обновляться с добавление или удаление треков в объекте playlist.
// Для этого создаем функцию в объекте addTrack(track) и в ней используем this и что бы добавить .push(track) После тут же в функции addTrack(track) дописываем строку с привязкой количества треков для обновления значения trackCount в объекте playlist
// const playlist = {
//   name: "My play musics",
//   rating: 5,
//   tracks: ["pesny1", "pesny2", "pesny3"],
//   trackCount: 3,
//   changeName(newName) {
//     console.log("this vnytri changeName: ", this);
//     this.name = newName;
//   },

//   addTrack(track) {
//     this.tracks.push(track);
//     this.trackCount = this.tracks.length; // привязка обновления значения trackCount,автоматически обновляется trackCount с добавление или удаление общего кол-во треков tracks в объекте playlist
//   },

//   updateRating(newRating) {
//     this.rating = newRating;
//   },
// };

// playlist.changeName("Novoe imy");
// console.log(playlist);

// playlist.addTrack("новый трек 1");
// console.log(playlist);

// playlist.addTrack("новый трек 2");
// console.log(playlist);

// playlist.addTrack("новый трек 3");
// console.log(playlist);

// playlist.updateRating(4);
// console.log(playlist);

// Метод 2. В объекте playlist надо добавить к значению tracks: ["pesny1", "pesny2", "pesny3"] новый трек в массив треков tracks: ['pesny1', 'pesny2', 'pesny3', 'новый трек 1']. Плюс свойство trackCount должно автоматически обновляться с добавление или удаление треков в объекте playlist.
// const playlist = {
//   name: "My play musics",
//   rating: 5,
//   tracks: ["pesny1", "pesny2", "pesny3"],
//   changeName(newName) {
//     console.log("this vnytri changeName: ", this);
//     this.name = newName;
//   },

//   addTrack(track) {
//     this.tracks.push(track);
//   },

//   updateRating(newRating) {
//     this.rating = newRating;
//   },

//   getTrackCount() {
//     return this.tracks.length;
//   },
// };
// console.log(playlist.getTrackCount());

// playlist.changeName("Novoe imy");
// console.log(playlist);

// playlist.addTrack("новый трек 1");
// console.log(playlist);
// console.log(playlist.getTrackCount());

// playlist.addTrack("новый трек 2");
// console.log(playlist);
// console.log(playlist.getTrackCount());

// playlist.addTrack("новый трек 3");
// console.log(playlist);
// console.log(playlist.getTrackCount());

// playlist.updateRating(4);
// console.log(playlist);

//Метод forEach
// Единственным случаем, когда стоит использовать циклы for или for...of для перебора массива, это задачи с прерыванием выполнения цикла. Прервать выполнение метода forEach нельзя, он всегда перебирает массив до конца.

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// console.log("Пример через метод forEach перебирающий:");
// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// ==============================Стрелочная функция=========================
//---------- Обычная функция add ----------
// function add(...args) {
//   console.log(args);
// }
// add(1, 2, 3); // [1, 2, 3]

// ------------- Стрелочная функция add с {} ----------
// const add = (...args) => {
//   console.log(args);
// };
// add(1, 2, 3); // [1, 2, 3]

//---------- Стрелочная функция add без {} ----------
// const add = (...arg) => console.log(arg);
// add(1, 2, 3); // [1, 2, 3]
// ==========================================================================

//------------------------------------------------------------------------
// "Apple" - вывести слово наоборот
// const a = "Apple";
// const b = a.split("").reverse().join("");
// console.log(b);

// function sortFunction(a, b) {
//   if (a < b) return 1;
//   if (a > b) return -1;
//   return 0;
// }

// var arr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// console.log(arr.sort(sortFunction));

// let newString = "";
// let str = "";
// function reverseString(str) {
//   //   var newString = "";

//   for (var i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }

//   console.log(newString);
//   return newString;
// }
// reverseString("apple");

// function reverseWord(old, revOld) {
//   if (old !== revOld) {
//     console.log(`Увы, "${old} не палиндром!!!`);
//   } else {
//     console.log(`О да, "${old}" палиндром!!!`);
//   }
// }
// reverseWord("Bla", "Bla");
// reverseWord("Bla", "Blaaaaaaaa");
// reverseWord(newString, str);

// console.log(newString, newString, reverseString);
//---------------------------------------------------------

// function palindromeChecker(str) {
//   str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, "");
//   const lastIndex = str.length - 1;
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[lastIndex - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// function palindromeChecker2(str) {
//   str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, "");
//   const halfOfLength = Math.floor(str.length / 2);
//   return (
//     str.substr(0, Math.floor(halfOfLength)) ===
//     str
//       .substr(Math.floor(str.length % 2 ? halfOfLength + 1 : halfOfLength))
//       .split("")
//       .reverse()
//       .join("")
//   );
// }

// const fn1 = (s) =>
//   s
//     .split("")
//     .reduce(
//       (f, o, i) => (i < s.length / 2 ? s[i] === s[s.length - i - 1] && f : f),
//       true
//     );

// или;

// const fn2 = (s) => s.split("").reverse().join("") == s;

//--------------------------------------------------------------------------

//---------------------------------------------------------------------------
// Задача. Сделать слово перевертыш, проверить палиндром ли оно.
//Вариант 1-------------------------------------------------------------
// function reverseString(str, callback) {
//   callback(str);
//   let newString = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }

//   console.log(`Для "${str}" будет перевертыш:`, newString);
//   return newString;
// }
// reverseString("JavaScript", function palindromeChecker(str) {
//   str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, "");
//   const lastIndex = str.length - 1;
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[lastIndex - i]) {
//       return console.log(
//         `Увы, "${
//           str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase()
//         }" не палиндром, спобуй ще!!!😁😁😁😎😎😎 `
//       );
//     }
//   }
//   return console.log(
//     `О да, "${
//       str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase()
//     }" палиндром!!!😀😀😀😉😉😉`
//   );
// });
// reverseString("Ava", function palindromeChecker(str) {
//   str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, "");
//   const lastIndex = str.length - 1;
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[lastIndex - i]) {
//       return console.log(
//         `Увы, "${
//           str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase()
//         }" не палиндром, спобуй ще!!!😁😁😁😎😎😎 `
//       );
//     }
//   }
//   return console.log(
//     `О да, "${
//       str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase()
//     }" палиндром!!!😀😀😀😉😉😉`
//   );
// });

//---------------------------------------------------------------------------------
//Вариант 2-------------------------------------------------------------

// function reverseString(str) {
//   let newString = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }

//   console.log(`Для "${str}" будет перевертыш:`, newString);
//   return newString;
// }

// function palindromeChecker(str) {
//   // str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, "");
//   str = str.toLowerCase().replace();
//   const lastIndex = str.length - 1;
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[lastIndex - i]) {
//       return console.log(
//         `Увы, "${
//           str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase()
//         }" не палиндром, спобуй ще!!!😁😁😁😎😎😎 `
//       );
//     }
//   }
//   return console.log(
//     `О да, "${
//       str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase()
//     }" палиндром!!!😀😀😀😉😉😉`
//   );
// }

// function makeMessage(str, callback) {
//   return callback(str);
// }

// makeMessage("JavaScript", reverseString);
// makeMessage("JavaScript", palindromeChecker);

// makeMessage("Ava", reverseString);
// makeMessage("Ava", palindromeChecker);

// makeMessage("Фуф", reverseString);
// makeMessage("Фуф", palindromeChecker);

// makeMessage("JS мне труден", reverseString);
// makeMessage("JS мне труден", palindromeChecker);

// makeMessage("123321", reverseString);
// makeMessage("123321", palindromeChecker);

// makeMessage("1234567890", reverseString);
// makeMessage("1234567890", palindromeChecker);
//------------------------------------------------------------------------------

// // function calculateTotalPrice(quantity, pricePerItem) {
// //   return quantity * pricePerItem;
// // }

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// ЗАДАЧА /48------------------------------------------------------------------------

// ЗАДАЧА 6/48------------------------------------------------------------------------
const students = [
  { name: "Манго", score: 83 },
  { name: "Поли", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Киви", score: 94 },
  { name: "Хьюстон", score: 64 },
];

// Название аккумулятора может быть произвольным, это просто параметр функции
const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);
console.log(totalScore); // 337 score всех студентов

const averageScore = totalScore / students.length;
console.log(averageScore); // 67.4
