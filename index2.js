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

const add = (a, b) => a + b;
console.log(add(5, 10));

const planets = ["Земля", "Марс", "Венера", "Юпитер"];

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']
console.log(planets); //['Земля', 'Марс', 'Венера', 'Юпитер']

//=========================================
const studentsMy = [
	{ name: "Манго", courses: ["математика", "физика"] },
	{ name: "Поли", courses: ["информатика", "математика"] },
	{ name: "Киви", courses: ["физика", "биология"] },
];

const allCourses = studentsMy.flatMap(student => student.courses);
// ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

const uniqueCourses = allCourses.filter((course, index, array) => array.indexOf(course) === index); // ['математика', 'физика', 'информатика', 'биология']
console.log(uniqueCourses);
console.log(allCourses);

//=========================================
const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
	{ name: "Манго", score: 83 },
	{ name: "Поли", score: 59 },
	{ name: "Аякс", score: 37 },
	{ name: "Киви", score: 94 },
	{ name: "Хьюстон", score: 64 },
];

const best = students.filter(student => student.score >= HIGH_SCORE);
console.table(best); // Массив объектов с именами Манго и Киви

const worst = students.filter(student => student.score < LOW_SCORE);
console.table(worst); // Массив с одним объектом Аякс

// В коллбек-функции удобно деструктуризировать свойства объекта
const average = students.filter(({ score }) => score >= LOW_SCORE && score < HIGH_SCORE);
console.table(average); // Массив объектов с именами Поли и Хьюстон

//============================================
const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
	return previousValue + number;
}, 0);

console.log("сума всех чисел равна:", total); // 32
// # Вначале метод reduce() создаёт внутреннюю переменную-аккумулятор и
// # присваивает ей значение параметра initialValue или первого элемента
// # перебираемого массива, если initialValue не задан.
// previousValue = 0

// # Далее коллбек-функция вызывается для каждого элемента массива. Текущее значение
// # параметра previousValue это то, что вернула коллбек-функция на прошлой итерации.
// Итерация 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
// Итерация 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
// Итерация 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
// Итерация 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
// Итерация 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

// # После того как весь массив перебран, метод reduce() возвращает значение аккумулятора.
// Результат - 32

//============================================

// const oldStudents = [
// 	{ name: "Манго", score: 83 },
// 	{ name: "Поли", score: 59 },
// 	{ name: "Аякс", score: 37 },
// 	{ name: "Киви", score: 94 },
// 	{ name: "Хьюстон", score: 64 },
// ];

// // Название аккумулятора может быть произвольным, это просто параметр функции
// const totalScore = oldStudents.reduce((total, student) => {
// 	return total + student.score;
// }, 0);
// console.log("oldStudents сумма значения score:", totalScore); // 337 score всех студентов

// const averageScore = totalScore / oldStudents.length;
// console.log("oldStudents среднее значение score:", averageScore); // 67.4 среднее значение score

//============================================

//============================================
//массив
// возвращает массив NamesSortedByFriendCount
// const NamesSortedByFriendCount = users.flatMap(user => user.friends);
// console.log(NamesSortedByFriendCount);  // возвращает массив NamesSortedByFriendCount

//функция с деструктуризацией
// возвращает функцию массива NamesSortedByFriendCount с деструктуризацией
// const FriendCount = users => users.flatMap(user => user.friends);
// console.log(FriendCount(users)); // возвращает функцию массива NamesSortedByFriendCount

//функция без деструктуризации
// возвращает функцию массива NamesSortedByFriendCount без деструктуризацией
// const TestFriendCount = users => {
// 	return users.flatMap(user => user.friends);
// };
// console.log(TestFriendCount(users));
//============================================

//====================================================================================
//====================================================================================
// function foo() {
// 	console.log(this);
// }

// foo(); // window без "use strict" и undefined с "use strict"
//====================================================================================
//====================================================================================

//====================================================================================
//====================================================================================
// "use strict"; // - это установка, которая заставляет код обрабатываться в строгом режиме.

// const counter = {
// 	value: 0,
// 	increment(value) {
// 		console.log("increment ->", this);
// 		this.value += value;
// 	},
// 	decrement(value) {
// 		console.log("decrement ->", this);
// 		this.value -= value;
// 	},
// };
// const updateCounter = function (value, operation) {
// 	operation(value);
// };

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);

// fix undefined ниже исправления:

// const counter = {
// 	value: 0,
// 	increment(value) {
// 		console.log("increment ->", this);
// 		this.value += value;
// 	},
// 	decrement(value) {
// 		console.log("decrement ->", this);
// 		this.value -= value;
// 	},
// };
// const updateCounter = function (value, operation) {
// 	operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));
//====================================================================================
//====================================================================================

//====================================================================================
////===Пример наследование прототипов prototype =======================================================
class Hero {
	constructor({ name = "hero", xp = 0 } = {}) {
		this.name = name;
		this.xp = xp;
	}

	gainXp(amount) {
		console.log(`${this.name} получает ${amount} опыта`);
		this.xp += amount;
	}
}

class Warrior extends Hero {
	constructor({ weapon, ...restProps } = {}) {
		super(restProps);
		this.weapon = weapon;
	}

	attack() {
		console.log(`${this.name} атакует используя ${this.weapon}`);
	}
}

class Berserk extends Warrior {
	constructor({ warcry, ...restProps } = {}) {
		super(restProps);
		this.warcry = warcry;
	}
	babyRage() {
		console.log(`${this.name} использует ${this.warcry}`);
	}
}

class Mage extends Hero {
	constructor({ spells, ...restProps } = {}) {
		super(restProps);
		this.spells = spells;
	}
	cast() {
		console.log();
		console.log(`${this.name} что-то там кастует :))))`);
	}
}

const mango = new Warrior({ name: "mango", xp: 1000, weapon: "алебарда" });
console.log(mango); // Warrior {name: 'mango', xp: 1000, weapon: 'алебарда'}

const poly = new Mage({ name: "poly", xp: 500, spells: ["фаербол"] });

const ajax = new Berserk({ name: "ajax", xp: 500, weapon: "топор", warcry: "waywaywaywawaaaaaaaaaah" });

console.log("mango.__proto__ === Warrior.prototype", mango.__proto__ === Warrior.prototype); //true (строка 5140 тот же самый запрос как в 5139)
console.log("Object.getPrototypeOf(mango) === Warrior.prototype", Object.getPrototypeOf(mango) === Warrior.prototype); //true (строка 5139 тот же самый запрос как в 5140, только этот более правельней)

console.log("Warrior.prototype", Warrior.prototype); // Warrior.prototype Hero {constructor: ƒ}
console.log("Warrior.prototype.__proto__ === Hero.prototype", Warrior.prototype.__proto__ === Hero.prototype); //true

console.log("Hero.prototype", Hero.prototype); //Hero.prototype {constructor: ƒ, gainXp: ƒ}
console.log("Hero.prototype.__proto__", Hero.prototype.__proto__ === Object.prototype); //true

mango.attack();
mango.gainXp(1000); //mango получает 1000 опыта

console.log(poly); //Mage {name: 'poly', xp: 500, spells: Array(1)}
poly.cast(); //poly что-то там кастует :))))
poly.gainXp(200); //poly получает 200 опыта

console.log(ajax); //Berserk {name: 'ajax', xp: 500, weapon: 'exe', warcry: 'waywaywaywawaaaaaaaaaah'}
ajax.babyRage(); //ajax использует waywaywaywawaaaaaaaaaah
ajax.gainXp(100); //ajax получает 600 опыта
ajax.attack(); //ajax атакует используя
ajax.gainXp(400); //ajax получает 600 опыта
////===Пример наследование прототипов prototype =======================================================
//====================================================================================
