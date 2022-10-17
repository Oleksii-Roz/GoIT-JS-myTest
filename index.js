// "use strict";

//
//
//
//
//
//
//
//
//
// null > 0; null < 0; -> false
// null == 0; -> false;
// null >= 0; null <= 0;
// null >= 0; null < 0 (false -> true);
// x >= 10; -> true
// 1) x > 10 -> false; x === 10 -> false;
// x < 10 -> false
// console.log(null >= 0);
// KAHOOT
// && -> зупиняється на першій брехні(false) або останній правді(true)
// || -> зупиняється на першій правді(true) або останній брехні(false)
// const color = "Yellow";
// switch (color) {
//   case "Black":
//   case "Green":
//     console.log("Color is dark");
//     break;
//   case "Yellow":
//   case "White":
//   case "Orange":
//     console.log("Color is light");
//     break;
// }
// console.log(0 || "Mango");
// const status_ = "Old"; // 'Young' || 'Old'
// const isYoung = status_ === "Young";
// const isOld = status_ === "Old";
// const isGood = isYoung || isOld;
// const age = isGood ? 18 : 22;
// console.log(age);
//
//
//
//
//
//
//
//
//
//
// Модуль 1. Занятие 2. Ветвления. Циклы
// Example 1 - Ввод пользователя и ветвления
// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать:
// "Какое официальное название JavaScript?".
// Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!",
// в противном случае - "Не знаете? ECMAScript!"
// const answer = prompt("Яка офійна назва JavaScript?");
// const message = answer === "ECMAScript" ? "Вірно!" : "Не знаєте? ECMAScript!";
// alert(message);
// Example 2 - Отображение времени (if...else)
// Напиши скрипт для отображения часов и минут в консоли браузера в виде
// строки формата "14 ч. 26 мин.". Если значение переменной minutes равно 0,
// то выводи строку "14 ч.", без минут.
// const hours = 15;
// const minutes = 20;
// let timeString = `${hours} год.`;
// if (minutes > 0) {
//   timeString += ` ${minutes} хв.`;
// }
// console.log(timeString);
//
// Example 3 - Ветвеления
// Напиши скрипт, который выводит в консоль строку "Это положительное число",
// если в prompt пользователь ввел число больше нуля. Если был введен ноль, выводи в консоль строку "Это ноль". Если передали отрицательное число, в консоли должна быть строка "Это отрицательное число".
// const number = Number(prompt("Введіть число: "));
// let message; // false || true
// switch (true) {
//   case number === 0:
//     console.log("Це число нуль");
//     break;
//   case number > 0:
//     console.log("Число більше нуля");
//     break;
//   case number < 0:
//     console.log("Число менше нуля");
//     break;
//   default:
//     console.log("Це не число");
//     break;
// }
// if (number > 0) {
//   console.log("Число більше нуля");
// } else if (number === 0) {
//   console.log("Це число нуль");
// } else {
//   console.log("Число менше нуля");
// }
// Example 4 - Вложенные ветвления
// Напиши скрипт, который сравнивает числа в переменных a и b.
// Если оба значения больше 100, то выведи в консоль максимальное из них.
// В противном случае в консоли должна быть сумма значения b и числа 512.
// const a = 100;
// const b = 180;
// let result = b + 512;
// if (a > 100 && b > 100) {
//   if (a === b) {
//     result = b;
//   } else {
//     result = a > b ? a : b;
//   }
// }
// console.log(result);
// Example 5 - Форматирование ссылки (endsWith)
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /.
// Если нет, добавь в конец значения link этот символ. Используй конструкцию if...else.
// let link = "https://my-site.com/about";
// const correctString = link.endsWith("/"); // -> true || false
// if (!correctString) {
//   link += "/";
// }
// console.log(link);
// Example 6 - Форматирование ссылки (includes и логическое «И»)
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /.
// Если нет, добавь в конец значения link этот символ, но только в том случае,
// если в link есть подстрока "my-site". Используй конструкцию if...else.
// let link = "https://somesite.com/about";
// const isStringCorrect = link.endsWith("/") && link.includes("my-site"); // -> true || false
// if (!isStringCorrect) {
//   link += "/";
// }
// console.log(link);
// Example 7 - Форматирование ссылки (тернарный оператор)
// Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.
//
//
//
//
//
//
//
//
//
//
//
// let link = 'https://somesite.com/about';
// if (link.includes('my-site') && !link.endsWith('/')) {
//   link += '/';
// }
// console.log(link);
// Example 8 - if...else и логические операторы
// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от значения переменной hours.
// Если значение переменной hours:
// меньше 17, выводи строку "Pending"
// больше либо равно 17 и меньше либо равно 24, выводи строку "Expires"
// больше 24 , выводи строку "Overdue"
// const hours = 30;
// if (hours < 17) {
//   console.log("Pending");
// } else if (hours >= 17 && hours <= 24) {
//   console.log("Expires");
// } else {
//   console.log("Overdue");
// }
// switch (true) {
//   case hours < 17:
//     console.log("Pending");
//     break;
//   case hours >= 17 && hours <= 24:
//     console.log("Expires");
//     break;
//   default:
//     console.log("Overdue");
//     break;
// }
// Example 9 - Дедлайн сдачи проекта (if...else)
// Напиши скрипт для отображения времени дедлайна сдачи проекта.
// Используй конструкцию if...else.
// Eсли до дедлайна 0 дней - выведи строку "Сегодня"
// Eсли до дедлайна 1 день - выведи строку "Завтра"
// Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
// Eсли до дедлайна 3+ дней - выведи строку "Дата в будущем"
// const daysUntilDeadline = -10;
// let message;
// if (daysUntilDeadline < 0) {
//   message = "You are bad developer";
// } else {
//   switch (daysUntilDeadline) {
//     case 0:
//       message = "Today";
//       break;
//     case 1:
//       message = "Tomorrow";
//       break;
//     case 2:
//       message = "After Tomorrow";
//       break;
//     default:
//       message = "Date in the future";
//       break;
//   }
// }
// console.log(message);
// Example 10 - Дедлайн сдачи проекта (switch)
// Выполни рефакторинг кода задачи номер 5 используя switch.
// const daysUntilDeadline = 5;
// if (daysUntilDeadline === 0) {
//   console.log('Сегодня');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Послезавтра');
// } else {
//   console.log('Дата в будущем');
// }
//
//
//
//
//
//
//
//           GOOD LUNK
//         IT IS FOR YOU
//
//
//
//
// Example 11 - Цикл for
// Напиши цикл for который выводит в консоль браузера числа по возрастанию от min до max,
// но только если число кратное 5.
// const max = 100;
// const min = 20;
// Example 12 - Ввод пользователя и ветвления
// Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.
// Если посетитель вводит "Админ", то prompt запрашивает пароль
// Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
// В противном случае вывести строку "Я вас не знаю"
// Пароль проверять так:
// Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
// Иначе выводить строку "Неверный пароль"
// -----------------------------------------------------------------------------
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   // const totalPrice = customerCredits - pricePerDroid * orderedQuantity;
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (customerCredits >= totalPrice) {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   } else {
//     message = "Insufficient funds!";
//   }
//   // Change code above this line
//   console.log(message);
//   return message;
// }
// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);

// ЗАДАЧА 19/36-------------------------------------------------------------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   if (password === null) {
//     // Change this line
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }
//   console.log(message);
//   return message;
// }
// checkPassword("mangohackzor");
// checkPassword(null);
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

// ЗАДАЧА 20/36-------------------------------------------------------------------------

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === available) {
//     message = "There are no products in the order!";
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }

//   // Change code above this line
//   console.log(message);
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// ---------------------------------------------------------------------------------------
// Пример: Условный (тернарный) оператор

// const num1 = 5;
// const num2 = 10;
// let biggerNumber;

// if (num1 > num2) {
//   biggerNumber = num1;
// } else {
//   biggerNumber = num2;
// }

// console.log(biggerNumber); // 10

// Код работает верно, получаем большее число из двух, но это решение кажется слишком громоздким, учитывая, насколько проста проблема. Используем тернарный оператор.

// const num1 = 5;
// const num2 = 10;
// const biggerNumber = num1 > num2 ? num1 : num2;

// console.log(biggerNumber); // 10
// ---------------------------------------------------------------------------------------

// ЗАДАЧА 21/36-------------------------------------------------------------------------

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line

//   console.log(isInRange);
//   return isInRange;
// }
// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);

// ЗАДАЧА 22/36-------------------------------------------------------------------------

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip"; // Change this line

//   console.log(canAccessContent);
//   return canAccessContent;
// }
// checkIfCanAccessContent("pro");
// checkIfCanAccessContent("starter");
// checkIfCanAccessContent("vip");
// checkIfCanAccessContent("free");

// ЗАДАЧА 23/36-------------------------------------------------------------------------

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   console.log(isNotInRange);
//   return isNotInRange;
// }

// isNumberNotInRange(10, 30, 17);
// isNumberNotInRange(10, 30, 5);
// isNumberNotInRange(20, 50, 24);
// isNumberNotInRange(20, 50, 76);

// ЗАДАЧА 24/36-------------------------------------------------------------------------

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent < 5000) {
//     discount = BASE_DISCOUNT;
//   }
//   // Change code above this line
//   console.log(discount);
//   return discount;
// }
// getDiscount(137000);
// getDiscount(46900);
// getDiscount(8250);
// getDiscount(1300);
// getDiscount(5000);
// getDiscount(20000);
// getDiscount(50000);

// ЗАДАЧА 25/36-------------------------------------------------------------------------

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   message =
//     ordered > available
//       ? "Not enough goods in stock!"
//       : "The order is accepted, our manager will contact you";

//   //   if (ordered > available) {
//   //     message = "Not enough goods in stock!";
//   //   } else {
//   //     message = "The order is accepted, our manager will contact you";
//   //   }

//   // Change code above this line
//   console.log(message);
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

// ЗАДАЧА 26/36-------------------------------------------------------------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   //
//   message =
//     password === ADMIN_PASSWORD
//       ? "Access is allowed"
//       : "Access denied, wrong password!";

//   // Change code below this line

//   //   if (password === ADMIN_PASSWORD) {
//   //     message = "Access is allowed";
//   //   } else {
//   //     message = "Access denied, wrong password!";
//   //   }

//   // Change code above this line
//   console.log(message);
//   return message;
// }
// checkPassword("jqueryismyjam");
// checkPassword("angul4r1sl1f3");
// checkPassword("r3actsux");

// ЗАДАЧА 27/36-------------------------------------------------------------------------

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (
//     type // Change this line
//   ) {
//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;

//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;
//   }

//   // Change code above this line
//   console.log(price);
//   return price;
// }
// getSubscriptionPrice("professional");
// getSubscriptionPrice("organization");
// getSubscriptionPrice("starter");

// ЗАДАЧА 28/36-------------------------------------------------------------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;

//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;

//     default:
//       message = "Access denied, wrong password!";
//       break;
//   }

//   //   if (password === null) {
//   //     message = "Canceled by user!";
//   //   } else if (password === ADMIN_PASSWORD) {
//   //     message = "Welcome!";
//   //   } else {
//   //     message = "Access denied, wrong password!";
//   //   }

//   // Change code above this line
//   console.log(message);
//   return message;
// }
// checkPassword("mangohackzor");
// checkPassword(null);
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

// ЗАДАЧА 29/36-------------------------------------------------------------------------

// function getShippingCost(country) {
//   let message;

//   // Change code below this line
//   switch (country) {
//     case "China":
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case "Chile":
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case "Australia":
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Jamaica":
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     default:
//       message = "Sorry, there is no delivery to your country";
//       break;
//   }
//   // Change code above this line
//   console.log(message);
//   return message;
// }
// getShippingCost("Australia");
// getShippingCost("Germany");
// getShippingCost("China");
// getShippingCost("Chile");
// getShippingCost("Jamaica");
// getShippingCost("Sweden");

// ЗАДАЧА 30/36-------------------------------------------------------------------------

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   console.log(message);
//   return message;
// }
// getNameLength("Poly");
// getNameLength("Harambe");
// getNameLength("Billy");
// getNameLength("Joe");

// ЗАДАЧА 31/36-------------------------------------------------------------------------

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // Change code above this line
// console.log(courseTopicLength, firstElement, lastElement);

// ЗАДАЧА 32/36-------------------------------------------------------------------------

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line  return substring;
//   console.log(substring);
//   return substring;
// }
// getSubstring("Hello world", 3);
// getSubstring("Hello world", 6);
// getSubstring("Hello world", 8);
// getSubstring("Hello world", 11);
// getSubstring("Hello world", 0);

// ЗАДАЧА 33/36-------------------------------------------------------------------------

// function formatMessage(message, maxLength) {
//   let result = message.slice(0, maxLength);
//   // Change code below this line
//   if (message > result) {
//     result = result + "...";
//   }
//   /// Change code above this line
//   console.log(result);
//   return result;
// }
// formatMessage("Curabitur ligula sapien", 16);
// formatMessage("Curabitur ligula sapien", 23);
// formatMessage("Vestibulum facilisis purus nec", 20);
// formatMessage("Vestibulum facilisis purus nec", 30);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);

// ЗАДАЧА 34/36-------------------------------------------------------------------------

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   console.log(normalizedInput);
//   return normalizedInput;
// }
// normalizeInput("Hello world");
// normalizeInput("This ISN'T SpaM");
// normalizeInput("Big SALE");

// ЗАДАЧА 35/36-------------------------------------------------------------------------

// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line

//   console.log(result);
//   return result;
// }
// checkForName("Egor Kolbasov", "Egor");
// checkForName("Egor Kolbasov", "egor");
// checkForName("Egor Kolbasov", "egOr");
// checkForName("Egor Kolbasov", "Zhenya");
// checkForName("Vadim Nekrasov", "Vadim");
// checkForName("Vadim Nekrasov", "vadim");
// checkForName("Vadim Nekrasov", "Dima");

// ЗАДАЧА 36/36-------------------------------------------------------------------------

// function checkForSpam(message) {
//   let result = message.toLowerCase();
//   // Change code below this line
//   if (result.includes("spam") || result.includes("sale")) {
//     result = true;
//   } else {
//     result = false;
//   }
//   // Change code above this line
//   console.log(result);
//   return result;
// }
// checkForSpam("Latest technology news");
// checkForSpam("JavaScript weekly newsletter");
// checkForSpam("Get best sale offers now!");
// checkForSpam("Amazing SalE, only tonight!");
// checkForSpam("Trust me, this is not a spam message");
// checkForSpam("Get rid of sPaM emails. Our book in on sale!");
// checkForSpam("[SPAM] How to earn fast money?");

// ============-------------------------------------------------------------------------

// Будем искать имя клиента в массиве имен, если нашли - прервем цикл, так как нет смысла искать дальше, имена у нас уникальные.
// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "`Poly`";
// let message;

// for (const client of clients) {
//   // На каждой итерации будем проверять совпадает ли элемент массива с
//   // именем клиента. Если совпадает то мы записываем в message сообщение
//   // об успехе и делаем break чтобы не искать дальше
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }

//   // Если они не совпадают то запишем в message сообщение об отсутствии имени
//   message = "Клиента с таким именем нету в базе данных!";
// }

// console.log(message); // "Клиент с таким именем есть в базе данных!"

// const clients1 = ["Mango", "Poly", "Ajax"];
// const clientNameToFind1 = "Poly";
// let message1 = `Клиента с именем ${clientNameToFind1} нету в базе данных!`;

// for (const client1 of clients1) {
//   if (client1 === clientNameToFind1) {
//     message1 = `Клиент с именем ${clientNameToFind1} есть в базе данных!`;
//     break;
//   }
//   // Если не совпадает, то на этой итерации ничего не делаем
// }

// console.log(message1); // Клиент с таким именем есть в базе данных!

// // Используем цикл для вывода только чисел больше определенного значения.
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// Метод split(delimiter) превращает строку в массив, «разбив» её по разделителю delimiter. Если разделитель это пустая строка, то получится массив отдельных символов. Разделителем может быть один или несколько символов.
// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript это интересно";
// console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]

// Метод массивов join(delimiter) соединяет элементы массива в строку. В строке элементы будут разделены символом или группой символов указанных в delimiter. То есть это операция обратная методу строк split(delimiter).
// const words = ["JavaScript", "это", "интересно"];
// console.log(words.join("")); // "JavaScriptэтоинтересно"
// console.log(words.join(" ")); // "JavaScript это интересно"
// console.log(words.join("-")); // "JavaScript-это-интересно"

// JS V2 block-2-----------------------------------------------------------------------
// ЗАДАЧА 1/32-------------------------------------------------------------------------
// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }
// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

// ЗАДАЧА 2/32-------------------------------------------------------------------------
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   let message;

//   if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//     return message;
//   }
//   message = "Access denied, wrong password!";
//   return message;
// }

// // Change code above this line

// checkPassword("mangohackzor");
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     console.log("Welcome!");
//     return "Welcome!";
//   }
//   console.log("Access denied, wrong password!");
//   return "Access denied, wrong password!";
//   // Change code above this line
// }
// checkPassword("mangohackzor");
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

// ЗАДАЧА 3/32-------------------------------------------------------------------------

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     // console.log("Your order is empty!");
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     // console.log("Your order is too large, not enough goods in stock!");
//     return "Your order is too large, not enough goods in stock!";
//   }
// //   console.log("The order is accepted, our manager will contact you");
//   return "The order is accepted, our manager will contact you";
//   // Change code above this line
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// ЗАДАЧА 4/32-------------------------------------------------------------------------
// // Change code below this line
// const fruits = ["apple", "plum", "pear", "orange"];

// console.log(fruits);

// console.table(fruits);
// console.log(fruits[fruits.length - 1]);

// ЗАДАЧА 5/32-------------------------------------------------------------------------
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.log(firstElement, secondElement, lastElement);
// // Change code below this line

// ЗАДАЧА 6/32-------------------------------------------------------------------------
// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits);

// ЗАДАЧА 7/32-------------------------------------------------------------------------
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

// ЗАДАЧА 8/32-------------------------------------------------------------------------
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElementIndex);
// console.log(lastElement);

// ЗАДАЧА 9/32-------------------------------------------------------------------------
// function getExtremeElements(array) {
//   // Change code below this line
//   const arrayElementFirstLast = [array[0], array[array.length - 1]];
//   console.log(arrayElementFirstLast);
//   return arrayElementFirstLast;

//   // Change code above this line
// }
// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["Earth", "Mars", "Venus"]);
// getExtremeElements(["apple", "peach", "pear", "banana"]);

// ЗАДАЧА 10/32-------------------------------------------------------------------------
// function splitMessage(message, delimiter) {
//   let words;

//   // Change code below this line
//   words = message.split(delimiter);
//   // Change code above this line

//   console.log(words);
//   return words;
// }
// splitMessage("Mango hurries to the train", " ");
// splitMessage("Mango", "");
// splitMessage("best_for_week", "_");

// ЗАДАЧА 11/32-------------------------------------------------------------------------
// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   console.log(message.split(" "));
//   const priceWord = message.split(" ").length * pricePerWord;
//   console.log(priceWord);
//   return priceWord;
//   // Change code above this line
// }
// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20);

// ЗАДАЧА 12/32-------------------------------------------------------------------------
// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line

//   string = array.join(delimiter);
//   console.log(string);

//   // Change code above this line
//   return string;
// }
// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
// makeStringFromArray(["M", "a", "n", "g", "o"], "");
// makeStringFromArray(["top", "picks", "for", "you"], "_");

// ЗАДАЧА 13/32-------------------------------------------------------------------------
// function slugify(title) {
//   // Change code below this line
//   // const lowTitle = title.toLowerCase().split(' ').join('-');
//   const slug = title.toLowerCase().split(" ").join("-");
//   console.log(slug);
//   return slug;

//   // Change code above this line
// }
// slugify("Arrays for begginers");
// slugify("English for developer");
// slugify("Ten secrets of JavaScript");
// slugify("How to become a JUNIOR developer in TWO WEEKS");

// ЗАДАЧА 14/32-------------------------------------------------------------------------
// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// ЗАДАЧА 15/32-------------------------------------------------------------------------
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients);

// ЗАДАЧА 16/32-------------------------------------------------------------------------
// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   //   const newArray = firstArray.concat(secondArray).length - maxLength;
//   const newArray = firstArray.concat(secondArray).slice(0, maxLength);
//   console.log(newArray);
//   return newArray;

//   // Change code above this line
// }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);

// ЗАДАЧА 17/32-------------------------------------------------------------------------
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

// ЗАДАЧА 18/32-------------------------------------------------------------------------
// function calculateTotal(number) {
//   // Change code below this line
//   let sumNumber = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sumNumber += i;
//   }
//   console.log(sumNumber);
//   return sumNumber;

//   // Change code above this line
// }
// calculateTotal(1);
// calculateTotal(3);
// calculateTotal(7);
// calculateTotal(18);
// calculateTotal(24);
// calculateTotal();

// ЗАДАЧА 19/32-------------------------------------------------------------------------
// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// // for (const fruit of fruits) {
// //   console.log(fruit);
// // }

// ЗАДАЧА 20/32-------------------------------------------------------------------------
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const orders of order) {
//     total += orders;
//   }

//   // Change code above this line
//   console.log(total);
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([]);

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (const orders of order) {
//     total += orders;
//     // Change code above this line
//   }
//   console.log(total);
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// // calculateTotalPrice();

// ЗАДАЧА 21/32-------------------------------------------------------------------------
// function findLongestWord(string) {
//   // return string.split(" ").reduce((a, b) => (b.length > a.length ? b : a));
//   const longestWord = string
//     .split(" ")
//     .reduce((a, b) => (b.length > a.length ? b : a));
//   console.log(longestWord);
//   return longestWord;
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");
// findLongestWord("");

// function findLongestWord(string) {
//   let words = string.split(" ");
//   //   console.log(words);
//   let longestWord = words[0];
//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   console.log(longestWord);
//   return longestWord;
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");
// findLongestWord("");

// function findLongestWord(string) {
//   let words = string.split(" ");
//   //   console.log(words);
//   //   let longestWord = words[0];
//   let longestWord = "";
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   console.log(longestWord);
//   return longestWord;
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");
// findLongestWord("");

// ЗАДАЧА 22/32-------------------------------------------------------------------------
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i++) numbers.push(i);
//   console.log(numbers);
//   return numbers;
// }
// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);
// createArrayOfNumbers();

// ЗАДАЧА 23/32-------------------------------------------------------------------------
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   console.log(filteredNumbers);
//   return filteredNumbers;
//   // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// ЗАДАЧА 24/32-------------------------------------------------------------------------
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   console.log(fruits.includes(fruit));
//   return fruits.includes(fruit); // Change this line
// }
// checkFruit("plum");
// checkFruit("mandarin");
// checkFruit("pear");
// checkFruit("Pear");
// checkFruit("apple");
// checkFruit();

// ЗАДАЧА 25/32-------------------------------------------------------------------------
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let newArray = [];
//   for (const array1s of array1) {
//     if (array2.includes(array1s)) {
//       newArray.push(array1s);
//     }
//   }
//   console.log(newArray);
//   return newArray;
//   // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);

// ЗАДАЧА 26/32-------------------------------------------------------------------------
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   // Change code above this line
//   console.log(total);
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([]);

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const orders of order) {
//     total += orders;
//   }

//   // Change code above this line
//   console.log(total);
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([]);

// ЗАДАЧА 27/32-------------------------------------------------------------------------
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// function filterArray(numbers, value) {
//   // Change code below this line

//   const filteredNumbers = [];
//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   console.log(filteredNumbers);
//   return filteredNumbers;
//   // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// ЗАДАЧА 28/32-------------------------------------------------------------------------
// Change code below this line
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// ЗАДАЧА 29/32-------------------------------------------------------------------------
// function getEvenNumbers(start, end) {
//   const newArray = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       newArray.push(i);
//     }
//   }
//   console.log(newArray);
//   return newArray;
// }

// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7);

// ЗАДАЧА 30/32-------------------------------------------------------------------------
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;

//     // console.log(number);
//     break;
//   }
// }

// ЗАДАЧА 31/32-------------------------------------------------------------------------
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;

//       console.log(number);
//       return number;
//     }
//   }
//   console.log(number);
//   return number;
//   // Change code above this line
// }
// findNumber(2, 6, 5);
// findNumber(8, 17, 3);
// findNumber(6, 9, 4);
// findNumber(16, 35, 7);

// ЗАДАЧА 32/32-------------------------------------------------------------------------
// function includes(array, value) {
// Change code below this line
//   for (const word of array) {
//     if (word === value) {
//       console.log(word);
//       return true;
//     }
//   }

//   return false;
//   // Change code above this line
// }
// includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
// includes(["apple", "plum", "pear", "orange"], "plum");
// includes(["apple", "plum", "pear", "orange"], "kiwi");

//   <условие> ? <выражение_если_условие_истинно> : <выражение_если_условие_ложно>
//    const type = word === value ? true : false;

// function includes(array, value) {
//   // Change code below this line
//   for (const word of array) {
//     if ((type = word === value ? true : false)) {
//       console.log(type);
//       return type;
//     }
//   }
//   return type;
// }
// includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
// includes(["apple", "plum", "pear", "orange"], "plum");
// includes(["apple", "plum", "pear", "orange"], "kiwi");

// -------------------------------------------------------------------------
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       break;
//     }
//   }

//   return number;
//   // Change code above this line
// }

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };
// console.log(user.location.city);
// console.log(user.stats, user.tag, user.stats.likes);
// console.log(user.name);
// console.log(user.hobbies);
// console.log(user.hobbies[user.hobbies.length - 1]);
// console.log(user.hobbies[0]);
// console.log(user["hobbies"]);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book["title"];
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book["genres"];
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // 'Bernard Cornwell'

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("драма");

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ['historical prose', 'adventures', 'драма']

// console.log(book);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations); // ['ua', 'ru']

// console.log(book);

// const name = "Генри Сибола";
// const age = 25;

// const user = {
//   name: name,
//   age: age,
// };

// console.log(user.name); // "Генри Сибола"
// console.log(user.age); // 25
// console.log(user); // name: 'Генри Сибола', age: 25

// const name = "Генри Сибола";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Генри Сибола"
// console.log(user.age); // 25
// console.log(user); // name: 'Генри Сибола', age: 25

// const propName = "name";
// const user = {
//   age: 25,
// };

// user[propName] = "Генри Сибола";
// console.log(user.name); // 'Генри Сибола'
// console.log(user.propName); // undefined
// console.log(user); // {age: 25, name: 'Генри Сибола'}

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// for (const iterator of object) {
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4
// console.log(animal); // 4
// // ❌ Возвращает true для всех свойств
// console.log("name" in dog); // true
// console.log("legs" in dog); // true
// // ✅ Возвращает true только для собственных свойств
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Если это собственное свойство - выполняем тело if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Если это не собственное свойство - ничего не делаем
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   console.log(book[key]);
// }

// // Допустим перед нами стоит задача посчитать общее количество продуктов в объекте формата имя-продукта: количество. Тогда подойдет метод Object.values() для того, чтобы получить массив всех значений и потом удобно их сложить.
// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods); // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log("Общее коль-во продуктов:", total); // 20

// Метод Object.entries()
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const entries = Object.entries(book);
// console.log(entries);
// // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

// Массив обьектов
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
// ];
// console.log(books);

// for (const book of books) {
// Объект книги
// console.log(book);
// // Название
// console.log(book.title);
// // Автор
// console.log(book.author);
// // Рейтинг
// console.log(book.rating);
// }
//Например, получим список названий всех книг в коллекции books.
// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames); // ["The Last Kingdom", "На берегу спокойных вод", "Сон смешного человека"]

// Узнаем средний рейтинг всей нашей коллекции. Для этого сложим все рейтинги, после чего разделим это значение на количество книг в коллекции.
// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating); // 8.2

// JS V2 block-3======================================================================
// ЗАДАЧА 1/41-------------------------------------------------------------------------
// const apartment = {
// 	imgUrl: "https://via.placeholder.com/640x480",
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// 	tags: ["premium", "promoted", "top"],
// };

// ЗАДАЧА 2/41-------------------------------------------------------------------------
// вариант 1
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// const owner = {
//   name: "Henry",
//   phone: "982-126-1588",
//   email: "henry.carter@aptmail.com",
// };
// apartment.owner = owner;
// console.log(apartment);

// вариант 2
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// apartment.owner = owner = {
//   name: "Henry",
//   phone: "982-126-1588",
//   email: "henry.carter@aptmail.com",
// };
// console.log(apartment);

// вариант 3 ТОЛЬКО ЭТОТ ПРАВИЛЬНЫЙ ДЛЯ АВТОПРОВЕРКИ
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// console.log(apartment);

// ЗАДАЧА 3/41-------------------------------------------------------------------------
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// console.log(aptRating);
// const aptDescr = apartment.descr;
// console.log(aptDescr);
// const aptPrice = apartment.price;
// console.log(aptPrice);
// const aptTags = apartment.tags;
// console.log(aptTags);
// // Change code above this line

// ЗАДАЧА 4/41-------------------------------------------------------------------------
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// console.log(ownerName);
// const ownerPhone = apartment.owner.phone;
// console.log(ownerPhone);
// const ownerEmail = apartment.owner.email;
// console.log(ownerEmail);
// const numberOfTags = apartment.tags.length;
// console.log(numberOfTags);
// const firstTag = apartment.tags[0];
// console.log(firstTag);
// const lastTag = apartment.tags[apartment.tags.length - 1];
// console.log(lastTag);
// // Change code above this line

// ЗАДАЧА 5/41-------------------------------------------------------------------------
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// console.log(aptRating);
// const aptDescr = apartment["descr"];
// console.log(aptDescr);
// const aptPrice = apartment["price"];
// console.log(aptPrice);
// const aptTags = apartment["tags"];
// console.log(aptTags);
// // Change code above this line

// ЗАДАЧА 6/41-------------------------------------------------------------------------
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// // apartment.tags[apartment.tags.length] = "trusted";
// apartment.tags.push("trusted");
// console.log(apartment);
// // Change code below this line

// ЗАДАЧА 7/41-------------------------------------------------------------------------
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// };
// console.log(apartment);

// ЗАДАЧА 8/41-------------------------------------------------------------------------
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };
// console.log(product);

// ЗАДАЧА 9/41-------------------------------------------------------------------------
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
//   // Change code above this line
// };
// console.log(credentials);

// ЗАДАЧА 10/41------------------------------------------------------------------------
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
//   // console.log(keys);
//   // console.log(values);
//   console.log(key);
//   console.log(apartment[key]);
// }

// ЗАДАЧА 11/41------------------------------------------------------------------------
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   // console.log(keys);
//   // console.log(values);
//   console.log(key);
//   console.log(apartment[key]);
//   // Change code above this line
// }

// ЗАДАЧА 12/41------------------------------------------------------------------------
// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   console.log(propCount);
//   return propCount;
// }
// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });
// countProps({
//   mail: "poly@mail.com",
//   score: 500,
//   score1: 500,
//   score2: 500,
//   score23: 500,
//   score1231: 500,
//   score211: 500,
// });

// ЗАДАЧА 13/41------------------------------------------------------------------------
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// // Change code below this line
// const keys = Object.keys(apartment);
// const values = [];

// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// console.log(keys);

// const values = Object.values(apartment);
// console.log(values);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   //  keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// ЗАДАЧА 14/41------------------------------------------------------------------------
// function countProps(object) {
//   // Change code below this line
//   const propCount = Object.keys(object).length;

//   console.log(propCount);
//   return propCount;
//   // Change code above this line
// }
// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);
//   propCount = keys.length;

//   console.log(propCount);
//   return propCount;
//   // Change code above this line
// }
// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (key of keys) {
//     propCount += 1;
//   }
//   console.log(propCount);
//   return propCount;
//   // Change code above this line
// }
// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// ЗАДАЧА 15/41------------------------------------------------------------------------
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

// ЗАДАЧА 16/41------------------------------------------------------------------------
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const keys = Object.keys(salaries);
//   // console.log(keys);

//   for (const key of keys) {
//     if (salaries.hasOwnProperty(key)) {
//       totalSalary += salaries[key];
//     }
//   }
//   // Change code above this line
//   console.log("Общая сумма зарплат сотрудников:", totalSalary);
//   return totalSalary;
// }
// countTotalSalary({});
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

// ЗАДАЧА 17/41------------------------------------------------------------------------
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// ЗАДАЧА 18/41------------------------------------------------------------------------
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   let result = null;

//   for (const product of products) {
//     // console.log(product);
//     if (productName === product.name) result = product.price;
//   }
//   console.log(`Продукт с именем ${productName} найден, его цена:`, result);
//   return result;
// }
// getProductPrice("Radar");
// getProductPrice("Grip");
// getProductPrice("Scanner");
// getProductPrice("Droid");
// getProductPrice("Engine");

// Деструктуризация объекта---------------------------------------------------
// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308
// -----------------------------------------------------------------------------

// ЗАДАЧА 19/41------------------------------------------------------------------------
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const propNameArray = [];

//   for (const product of products) {
//     // console.table(product);

//     for (const key in product) {
//       // console.log(key);

//       if (key === propName) {
//         propNameArray.push(product[key]);
//       }
//     }
//   }
//   console.log(propNameArray);
//   return propNameArray;
// }
// getAllPropValues("name");
// getAllPropValues("quantity");
// getAllPropValues("price");
// getAllPropValues("category");

// ЗАДАЧА 20/41------------------------------------------------------------------------
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (const product of products) {
//     console.log(product);
//     if (productName === product.name) {
//       totalPrice = product.price * product.quantity;
//     }
//   }

//   console.log(
//     `Цена за продукт ${productName} с учетом выбранного количества:`,
//     totalPrice
//   );
//   return totalPrice;
// }
// calculateTotalPrice("Blaster");
// calculateTotalPrice("Radar");
// calculateTotalPrice("Droid");
// calculateTotalPrice("Grip");
// calculateTotalPrice("Scanner");

// ЗАДАЧА 21/41------------------------------------------------------------------------
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log("Общий прогноз погоды за три дня:", meanTemperature);

// ЗАДАЧА 22/41------------------------------------------------------------------------
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures; // Деструктуризация объекта с добавлением нового значения
// console.log(highTemperatures.icon);
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log("Общий прогноз погоды за три дня:", meanTemperature);

// ЗАДАЧА 23/41------------------------------------------------------------------------
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures; // Деструктуризация объекта с добавлением нового значения

// console.log(highTemperatures.icon);
// console.log(highIcon);

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log("Общий прогноз погоды за три дня:", meanTemperature);

// ЗАДАЧА 24/41------------------------------------------------------------------------
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   //   const { hex, rgb } = color;
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// ЗАДАЧА 25/41------------------------------------------------------------------------
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// console.log(
//   highToday,
//   lowToday,
//   todayIcon,
//   highTomorrow,
//   lowTomorrow,
//   tomorrowIcon
// );

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// ЗАДАЧА 26/41------------------------------------------------------------------------
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;
//   const result = (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//   console.log(result);
//   return result;
// }
// calculateMeanTemperature({
//   today: { low: 28, high: 32 },
//   tomorrow: { low: 25, high: 29 },
// });
// calculateMeanTemperature({
//   today: { low: 37, high: 40 },
//   tomorrow: { low: 33, high: 38 },
// });

// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   const todayLow = forecast.today.low;
//   const todayHigh = forecast.today.high;
//   const tomorrowLow = forecast.tomorrow.low;
//   const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// ЗАДАЧА 27/41------------------------------------------------------------------------
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log("bestScore:", bestScore);
// console.log("worstScore:", worstScore);

// ЗАДАЧА 28/41------------------------------------------------------------------------
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log("allScores:", allScores);
// console.log("bestScore:", bestScore);
// console.log("worstScore:", worstScore);

// ЗАДАЧА 29/41------------------------------------------------------------------------
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

// ЗАДАЧА 30/41------------------------------------------------------------------------
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const newData = { category, priority, completed, ...data };

//   console.log(newData);
//   return newData;
// }
// makeTask({});
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });
// makeTask({ category: "Finance", text: "Take interest" });
// makeTask({ priority: "Low", text: "Choose shampoo" });
// makeTask({ text: "Buy bread" });

// ЗАДАЧА 31/41------------------------------------------------------------------------
// function add(...args) {
//   console.log(args);
//   let sum = 0;
//   for (const orders of args) {
//     sum += orders;
//     // Change code above this line
//   }
//   console.log("Общая сумма:", sum);
//   return sum;
// }
// add(15, 27);
// add(12, 4, 11, 48);
// add(32, 6, 13, 19, 8);
// add(74, 11, 62, 46, 12, 36);

// ЗАДАЧА 32/41------------------------------------------------------------------------
// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNumber) {
//       total += arg;
//     }
//   }

//   console.log(
//     `Cумма только тех аргументов ${args} которые больше, чем заданное число ${firstNumber} =`,
//     total
//   );

//   return total;
// }
// addOverNum(50, 15, 27);
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(15, 32, 6, 13, 19, 8);
// addOverNum(20, 74, 11, 62, 46, 12, 36);

// ЗАДАЧА 33/41------------------------------------------------------------------------
// function findMatches(arrayNumbers, ...numbers) {
//   const matches = []; // Don't change this line
//   for (const arrayNumber of arrayNumbers) {
//     for (const number of numbers) {
//       if (arrayNumber === number) {
//         matches.push(arrayNumber);
//       }
//     }
//   }
//   console.log(matches);
//   return matches;
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// findMatches([63, 11, 8, 29], 4, 7, 16);

// ЗАДАЧА 34/41------------------------------------------------------------------------
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },

//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },

//   removeBook() {
//     return "Deleting book Red sunset";
//   },
//   updateBook() {
//     return "Updating book Sands of Dune to Dune";
//     // Change code above this line
//   },
// };

// ЗАДАЧА 35/41------------------------------------------------------------------------
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],

//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//     // Change code above this line
//   },
// };
// // bookShelf.updateBook("Haze", "Dungeon chronicles");
// // bookShelf.updateBook("The last kingdom", "Dune");
// // console.log(bookShelf);

// После вызова метода bookShelf.updateBook("Haze", "Dungeon chronicles"), значение свойства
// books это массив["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// После вызова метода bookShelf.updateBook("The last kingdom", "Dune"), значение свойства
// books это массив["Dune", "Haze", "The guardian of dreams"]

// ЗАДАЧА 36/41------------------------------------------------------------------------
// const atTheOldToad = {
//   // Change code below this line

//   potions: [],

//   // Change code above this line
// };

// ЗАДАЧА 36/41------------------------------------------------------------------------
// const atTheOldToad = {
//   // Change code below this line

//   potions: [],

//   // Change code above this line
// };

// ЗАДАЧА 37/41------------------------------------------------------------------------
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   // Change code above this line
// };

// ЗАДАЧА 38/41------------------------------------------------------------------------
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);

//     // Change code above this line
//   },
// };

// // atTheOldToad.addPotion("Invisibility");
// // atTheOldToad.addPotion("Power potion");
// // console.log(atTheOldToad);

// ЗАДАЧА 39/41------------------------------------------------------------------------
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(potionName);
//     if (potionIndex !== -1) {
//       this.potions.splice(potionIndex, 1);
//     }
//     // Change code above this line
//   },
// };
// // atTheOldToad.removePotion("Dragon breath");
// // atTheOldToad.removePotion("Speed potion");
// // console.log(atTheOldToad);

// ЗАДАЧА 40/41------------------------------------------------------------------------
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.potions.indexOf(oldName);
//     this.potions.splice(bookIndex, 1, newName);
//     // Change code above this line
//   },
// };
// // atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// // atTheOldToad.updatePotionName("Stone skin", "Invisibility");
// // console.log(atTheOldToad);

// После первого вызова метода atTheOldToad.updatePotionName("Dragon breath", "Polymorth"),
// в свойстве potions будет массив["Speed potion", "Polymorth", "Stone skin"]

// После второго вызова метода atTheOldToad.updatePotionName("Stone skin", "Invisibility"),
// в свойстве potions будет массив["Speed potion", "Polymorth", "Invisibility"]

// ЗАДАЧА 41/41------------------------------------------------------------------------
// // Вариант 1===============================
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   getPotions() {
//     const { potions } = this;
//     return potions;
//   },

//   addPotion(newPotion) {
//     const { potions } = this;

//     for (const potion of potions) {
//       if (potion.name.includes(newPotion.name)) {
//         return `Error! Potion ${potion.name} is already in your inventory!`;
//       }
//     }
//     potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     const { potions } = this;
//     for (const potion of potions) {
//       if (potion.name === potionName) {
//         return potions.splice(potions.indexOf(potion), 1);
//       }
//     }

//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     const { potions } = this;

//     for (const potion of potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }

//     return `Potion ${oldName} is not in inventory!`;
//   },
// };
// console.log(
//   "----------------------------Все начальные зелья:-----------------------------"
// );
// console.table(atTheOldToad.potions);

// console.log(
//   "------------------------------Добавление зелья:------------------------------"
// );
// console.log(atTheOldToad.getPotions());
// console.table(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.table(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));

// console.table(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.table(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));

// console.table(atTheOldToad.getPotions());

// console.log(
//   "--------------------------------Удаление зелья:-------------------------------"
// );
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.table(atTheOldToad.getPotions());

// console.log(
//   "-------------------------------Обновление зелья:------------------------------"
// );
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(
//   atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
// );
// console.table(atTheOldToad.getPotions());

// // Вариант 2===============================
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   getPotions() {
//     const { potions } = this;
//     return potions;
//   },

//   addPotion(newPotion) {
//     const { potions } = this;

//     for (const potion of potions) {
//       if (potion.name.includes(newPotion.name)) {
//         return `Error! Potion ${potion.name} is already in your inventory!`;
//       }
//     }
//     potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     const { potions } = this;
//     const potionIndex = potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return potions.splice(potionIndex, 1);
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     const { potions } = this;
//     const potionIndex = potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     potions.splice(potionIndex, 1, newName);
//   },

// };

// JS V2 block-4 =====================================================================

// ЗАДАЧА 1/48------------------------------------------------------------------------
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// ЗАДАЧА 2/48------------------------------------------------------------------------
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   // callback(pizzaName);
//   return callback(pizzaName);
// }

// makeMessage("Royal Grand", makePizza);
// makeMessage("Ultracheese", deliverPizza);

// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));

// ЗАДАЧА 3/48------------------------------------------------------------------------
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });

// ЗАДАЧА 4/48------------------------------------------------------------------------
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (!pizzaPalace.pizzas.includes(pizzaName)) {
//       return onError(
//         `There is no pizza with a name ${pizzaName} in the assortment.`
//       );
//     }
//     return onSuccess(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// // const pizzaPalace = {
// //   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
// //   order(pizzaName, onSuccess, onError) {
// //     for (const pizza of this.pizzas){
// //       if (pizza === pizzaName) {
// //         return onSuccess (pizzaName);
// //     }
// //     }
// //           return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
// //   },
// // };
// // function makePizza(pizzaName) {
// //   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// // }
// // // Callback for onError
// // function onOrderError(error) {
// //   return `Error! ${error}`;
// // }
// // // Method calls with callbacks
// // pizzaPalace.order('Smoked', makePizza, onOrderError);
// // pizzaPalace.order('Four meats', makePizza, onOrderError);
// // pizzaPalace.order('Big Mike', makePizza, onOrderError);
// // pizzaPalace.order('Vienna', makePizza, onOrderError);

// ЗАДАЧА 5/48------------------------------------------------------------------------
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }
//   orderedItems.forEach((number, index) => {
//     totalPrice += orderedItems[index];
//   });
//   // Change code above this line
//   console.log(totalPrice);
//   return totalPrice;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);

// ЗАДАЧА 6/48------------------------------------------------------------------------
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

// //  const filteredNumbers = numbers.filter((number) => number > value);

//   console.log(filteredNumbers);
//   // Change code above this line
//   return filteredNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// ЗАДАЧА 7/48------------------------------------------------------------------------
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   console.log(commonElements);
//   return commonElements;
//   // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);

// ЗАДАЧА 8/48------------------------------------------------------------------------
// // function calculateTotalPrice(quantity, pricePerItem) {
// //   return quantity * pricePerItem;
// // }

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(3, 400));

// ЗАДАЧА 9/48------------------------------------------------------------------------
// // const calculateTotalPrice = (quantity, pricePerItem) => {
// //   return quantity * pricePerItem;
// // };

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));

// ЗАДАЧА 10/48------------------------------------------------------------------------
// // function calculateTotalPrice(orderedItems) {
// //   let totalPrice = 0;

// //   orderedItems.forEach(function (item) {
// //     totalPrice += item;
// //   });

// //   return totalPrice;
// // }

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };

// ЗАДАЧА 11/48------------------------------------------------------------------------
// // ВАРИАНТ 1 (условие задани и пример).Обычная функцию filterArray и обычный метод forEach.
// // function filterArray(numbers, value) {
// //   const filteredNumbers = [];

// //   numbers.forEach(function (number) {
// //     if (number > value) {
// //       filteredNumbers.push(number);
// //     }
// //   });

// //   console.log(filteredNumbers);
// //   return filteredNumbers;
// // }
// // filterArray([1, 2, 3, 4, 5], 3);
// // filterArray([1, 2, 3, 4, 5], 4);
// // filterArray([1, 2, 3, 4, 5], 5);
// // filterArray([12, 24, 8, 41, 76], 38);
// // filterArray([12, 24, 8, 41, 76], 20);

// ВАРИАНТ 2 (решение требуемое по условию задачи). Рефакторинг в трелочные функции: getCommonElements и метода forEach
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   console.log(filteredNumbers);
//   return filteredNumbers;
// };
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// // ВАРИАНТ 3. Альтернативное решение одной строкой через медом .filter стрелочной функцией:
// // function filterArray(numbers, value) {
// //   const filteredNumbers = numbers.filter((number) => number > value);

// //   console.log(filteredNumbers);
// // }
// // filterArray([1, 2, 3, 4, 5], 3);
// // filterArray([1, 2, 3, 4, 5], 4);
// // filterArray([1, 2, 3, 4, 5], 5);
// // filterArray([12, 24, 8, 41, 76], 38);
// // filterArray([12, 24, 8, 41, 76], 20);

// ЗАДАЧА 12/48------------------------------------------------------------------------
// // ВАРИАНТ 1 (условие задани и пример).Обычная функцию getCommonElements и обычный метод forEach с условием.
// // function getCommonElements(firstArray, secondArray) {
// //   const commonElements = [];

// //   firstArray.forEach(function (element) {
// //     if (secondArray.includes(element)) {
// //       commonElements.push(element);
// //     }
// //   });

// //   return commonElements;
// // }

// ВАРИАНТ 2 (решение требуемое по условию задачи). Рефакторинг в трелочные функции: getCommonElements и метода forEach с условием.
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   console.log(commonElements);
//   return commonElements;
// };
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);

// ЗАДАЧА 13/48------------------------------------------------------------------------
// // function changeEven(numbers, value) {
// //   // Change code below this line
// //   for (let i = 0; i < numbers.length; i += 1) {
// //     if (numbers[i] % 2 === 0) {
// //       numbers[i] = numbers[i] + value;
// //     }
// //   }
// //   // Change code above this line
// // }

// function changeEven(numbers, value) {
//   const newArray = [];
//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//     } else {
//       newArray.push(number);
//     }
//   });
//   console.log(newArray);
//   return newArray;
// }
// changeEven([1, 2, 3, 4, 5], 10);
// changeEven([2, 8, 3, 7, 4, 6], 10);
// changeEven([17, 24, 68, 31, 42], 100);
// changeEven([44, 13, 81, 92, 36, 54], 100);

// ЗАДАЧА 14/48------------------------------------------------------------------------
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);

// ЗАДАЧА 15/48------------------------------------------------------------------------
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map((book) => book.title);
// console.log(titles);

// ЗАДАЧА 16/48------------------------------------------------------------------------
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap((book) => book.genres);
// console.log(genres);

// ЗАДАЧА 17/48------------------------------------------------------------------------
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// // const getUserNames = users.map((user) => user.name);
// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };
// console.log("Все names:", getUserNames(users));

// ЗАДАЧА 18/48------------------------------------------------------------------------
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// // const getUserEmails = users.map((user) => user.email);
// // console.log("Все emails:", getUserEmails);

// // const getUserEmails = (users) => {
// //   return users.map((user) => user.email);
// // };
// // console.log("Все emails:", getUserEmails(users));

// // const getUserEmails = (users) => {
// //   return users.map(({ email }) => email);
// // };
// // console.log(getUserEmails(users));

// // const getUserEmails = (users) => users.map((user) => user.email);
// // console.log("Все emails:", getUserEmails(users));

// const getUserEmails = (users) => users.map(({ email }) => email);
// console.log("Все emails:", getUserEmails(users));

// ЗАДАЧА 19/48------------------------------------------------------------------------
// Вариант без функцией, результат присвоен результату переменным: evenNumbers и oddNumbers
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);
// console.log("evenNumbers:", evenNumbers);
// console.log("oddNumbers:", oddNumbers);
// console.log("numbers:", numbers);

// Вариант с функцией, результат выводится вызовом функций: evenNumbers(numbers) и oddNumbers(numbers)
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// const evenNumbers = (numbers) => numbers.filter((number) => number % 2 === 0);
// const oddNumbers = (numbers) => numbers.filter((number) => number % 2 !== 0);
// console.log("evenNumbers:", evenNumbers(numbers));
// console.log("oddNumbers:", oddNumbers(numbers));
// console.log("numbers:", numbers);

// ЗАДАЧА 20/48------------------------------------------------------------------------
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];

// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index
// );
// console.log(allGenres);
// console.log(uniqueGenres);

// ЗАДАЧА 21/48------------------------------------------------------------------------
// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		rating: 8.51,
// 	},
// 	{
// 		title: "The Dream of a Ridiculous Man",
// 		author: "Fyodor Dostoevsky",
// 		rating: 7.75,
// 	},
// 	{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// 	{ title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// // const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// // const booksByAuthor = books.filter(book => book.author === AUTHOR);

// const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING); // стрелочная с деструктуризацией без функцией, результат присвоен результату переменной topRatedBooks
// const booksByAuthor = books.filter(({ author }) => author === AUTHOR); // стрелочная с деструктуризацией без функцией, результат присвоен результату переменной booksByAuthor

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// ЗАДАЧА 22/48------------------------------------------------------------------------
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getUsersWithEyeColor = (users, color) =>
//   users.filter(({ eyeColor }) => eyeColor === color);
// console.log(getUsersWithEyeColor(users, "blue"));
// console.log(getUsersWithEyeColor(users, "green"));
// console.log(getUsersWithEyeColor(users, "brown"));

// ЗАДАЧА 23/48------------------------------------------------------------------------
// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 		age: 37,
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 		age: 34,
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 		age: 24,
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 		age: 21,
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 		age: 27,
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 		age: 38,
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 		age: 39,
// 	},
// ];

// const getUsersWithAge = (users, minAge, maxAge) =>
// users.filter(user => user.age > minAge && user.age < maxAge); // без деструктуризации
// 	users.filter(({ age }) => age > minAge && age < maxAge); // сделал деструктуризацию

// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));
// console.log(getUsersWithAge(users, 80, 100));

// // const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// // const booksByAuthor = books.filter(book => book.author === AUTHOR);

// ЗАДАЧА 24/48------------------------------------------------------------------------
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUsersWithFriend = (users, friendName) =>
//   //   users.filter((user) => user.friends.includes(friendName)); // без дистукруризации
//   users.filter(({ friends }) => friends.includes(friendName)); // с дистукруризации

// console.log(getUsersWithFriend(users, "Briana Decker"));
// console.log(getUsersWithFriend(users, "Goldie Gentry"));
// console.log(getUsersWithFriend(users, "Adrian Cross"));

// ЗАДАЧА 25/48------------------------------------------------------------------------
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];

// const getFriends = (users) => {
//   return users
//     .flatMap((user) => user.friends)
//     .filter((friends, index, array) => array.indexOf(friends) === index); // когда функция с фиругными скобками обязательно ставить return, без него получим всегда undefined ЗАПОМНИ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// };

// console.log(getFriends(users));

// ЗАДАЧА 26/48------------------------------------------------------------------------
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];
// // const getActiveUsers = (users) => {
// //   return users.filter(({ isActive }) => isActive);
// // };

// // console.log(getActiveUsers(users));

// const getActiveUsers = (users) => users.filter(({ isActive }) => isActive);

// console.log(getActiveUsers(users));

// ЗАДАЧА 27/48------------------------------------------------------------------------
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];
// const getInactiveUsers = (users) => {
//   return users.filter(({ isActive }) => isActive === false);
// };

// console.log(getInactiveUsers(users));

// ЗАДАЧА 28/48------------------------------------------------------------------------
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// // const bookWithTitle = books.find((book) => book.title === BOOK_TITLE); // без дистукруризации
// const bookWithTitle = books.find(({ title }) => title === BOOK_TITLE); // c дистукруризации

// // const bookByAuthor = books.find((book) => book.author === AUTHOR); // без дистукруризации
// const bookByAuthor = books.find(({ author }) => author === AUTHOR); // c дистукруризации

// console.log(bookWithTitle);
// console.log(bookByAuthor);

// ЗАДАЧА 29/48------------------------------------------------------------------------
// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 	},
// ];

// // const getUserWithEmail = (users, email) => {
// // //   return users.find((user) => user.email.includes(email)); // через includes(вложение) без дистукруризации
// //   //   return users.find((user) => user.email.includes(email)); // через includes(вложение) с дистукруризации
// //   //   return users.find((user) => user.email === email); // сравнение без дистукруризации
// //     return users.find((user) => user.email === email); // сравнение с дистукруризации
// // };

// // console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
// // console.log(getUserWithEmail(users, "elmahead@omatom.com"));

// const getUserWithEmail = (users, email) =>
// 	//   users.find((user) => user.email.includes(email)); // через includes(вложение) без дистукруризации
// 	//   users.find((user) => user.email.includes(email)); // через includes(вложение) с дистукруризации

// 	// users.find((user) => user.email === email); // сравнение без дистукруризации
// 	users.find(user => user.email === email); // сравнение с дистукруризации
// 	users.find(user => user.email === email); // сравнение с дистукруризации

// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
// console.log(getUserWithEmail(users, "elmahead@omatom.com"));

// ЗАДАЧА 30/48------------------------------------------------------------------------
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const eachElementInFirstIsEven = firstArray.every(array => array % 2 === 0);
// console.log(eachElementInFirstIsEven); // true

// const eachElementInFirstIsOdd = firstArray.every(array => array % 2 !== 0);
// console.log(eachElementInFirstIsOdd); // false

// const eachElementInSecondIsEven = secondArray.every(array => array % 2 === 0);
// console.log(eachElementInSecondIsEven); // true

// const eachElementInSecondIsOdd = secondArray.every(array => array % 2 !== 0);
// console.log(eachElementInSecondIsOdd); // true

// const eachElementInThirdIsEven = thirdArray.every(array => array % 2 === 0);
// console.log(eachElementInThirdIsEven); // false

// const eachElementInThirdIsOdd = thirdArray.every(array => array % 2 !== 0);
// console.log(eachElementInThirdIsOdd); // false

// ЗАДАЧА 31/48------------------------------------------------------------------------
// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 	},
// ];

// // const isEveryUserActive = users => {
// // 	return users.every(user => user.isActive);
// // }; //стрелочная функция
// // console.log(isEveryUserActive(users));

// // const isEveryUserActive = users => {
// // 	return users.every(({ isActive }) => isActive);
// // }; //стрелочная функция с диструктуризацией
// // console.log(isEveryUserActive(users));

// const isEveryUserActive = users => users.every(({ isActive }) => isActive); //стрелочная функция с глубокой диструктуризацией
// console.log(isEveryUserActive(users));

// ЗАДАЧА 32/48------------------------------------------------------------------------
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const anyElementInFirstIsEven = firstArray.some(firstElm => firstElm % 2 === 0);
// console.log(anyElementInFirstIsEven); // true
// const anyElementInFirstIsOdd = firstArray.some(firstElm => firstElm % 2 !== 0);
// console.log(anyElementInFirstIsOdd); // false

// const anyElementInSecondIsEven = secondArray.some(secondElm => secondElm % 2 === 0);
// console.log(anyElementInSecondIsEven); // false
// const anyElementInSecondIsOdd = secondArray.some(secondElm => secondElm % 2 !== 0);
// console.log(anyElementInSecondIsOdd); // true

// const anyElementInThirdIsEven = thirdArray.some(thirdElm => thirdElm % 2 === 0);
// console.log(anyElementInThirdIsEven); // true
// const anyElementInThirdIsOdd = thirdArray.some(thirdElm => thirdElm % 2 !== 0);
// console.log(anyElementInThirdIsOdd); // true

// ЗАДАЧА 33/48------------------------------------------------------------------------
// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		gender: "female",
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 	},
// ];

// const isAnyUserActive = users => {
// 	return users.some(user => user.isActive);
// };
// console.log(isAnyUserActive(users));

// ЗАДАЧА 34/48------------------------------------------------------------------------
// const players = {
// 	mango: 1270,
// 	poly: 468,
// 	ajax: 710,
// 	kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// const totalPlayTime = playtimes.reduce((previousValue, number) => {
// 	return previousValue + number;
// }, 0);
// console.log("Общее игровое время:", totalPlayTime); // Сумма всех чисел массива [1270, 468, 710, 244]

// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log("Cреднее время проведённое в играх:", averagePlayTime);

// ЗАДАЧА 35/48------------------------------------------------------------------------
// const players = [
// 	{ name: "Mango", playtime: 1270, gamesPlayed: 4 },
// 	{ name: "Poly", playtime: 469, gamesPlayed: 2 },
// 	{ name: "Ajax", playtime: 690, gamesPlayed: 3 },
// 	{ name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// // const totalAveragePlaytimePerGame = players.reduce((total, player) => {
// // 	return total + player.playtime / player.gamesPlayed;
// // }, 0);

// const totalAveragePlaytimePerGame = players.reduce((total, player) => total + player.playtime / player.gamesPlayed, 0);

// console.log(totalAveragePlaytimePerGame);

// ЗАДАЧА 36/48------------------------------------------------------------------------
// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 	},
// ];

// const calculateTotalBalance = users =>
// 	users.reduce((total, userBalance) => {
// 		return total + userBalance.balance;
// 	}, 0);
// console.log("Сумму всех средств users:", calculateTotalBalance(users));

// ЗАДАЧА 37/48------------------------------------------------------------------------
// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 	},
// ];

// // const arrayFriends = users.flatMap(user => user.friends);
// // console.log("Общее количество друзей:", arrayFriends.length);
// // console.log("Имена общего количества друзей:", arrayFriends);

// const getTotalFriendCount = users => {
// 	return users.reduce((total, user) => {
// 		return total + user.friends.length;
// 	}, 0);
// };
// console.log("Общее количество друзей:", getTotalFriendCount(users));

// //++++++++++++++++++++СОБРИТОРКА ДРУЗЕЙ ПО ИМЕНАМ+++++++++++++++++++++++++++++++++++
// // const getNamesSortedByFriendsCount = users => {
// // 	return users.sort((a, b) => a.friends.length - b.friends.length).map(e => e.name);
// // };

// // console.log(getNamesSortedByFriendsCount(users));
// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// //Цвета
// //['blue','green','green','black','orange','blue','green','red']
// // Если нам понадобятся только уникальные значения, то тогда нам надо будет проверить есть ли заданное значение в total, прежде чем отправлять его в этот массив.

// // const uniqueColors = data.reduce((total, amount) => {
// // 	amount.c.forEach(color => {
// // 		if (total.indexOf(color) === -1) {
// // 			total.push(color);
// // 		}
// // 	});
// // 	return total;
// // }, []);
// // [ 'blue', 'red', 'green', 'black', 'orange']
// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ЗАДАЧА 38/48------------------------------------------------------------------------
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"];

// const ascendingReleaseDates = [...releaseDates].sort();
// console.log(ascendingReleaseDates);

// const alphabeticalAuthors = [...authors].sort();
// console.log(alphabeticalAuthors);

// ЗАДАЧА 39/48------------------------------------------------------------------------
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// // const ascendingReleaseDates = [...releaseDates].sort((firstString, secondString) => firstString - secondString); // для примера
// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// console.log("Сортировка копии массива чисел по возростанию:", ascendingReleaseDates);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// console.log("Сортировка копии массива чисел по убыванию:", descendingReleaseDates);

// ЗАДАЧА 40/48------------------------------------------------------------------------

// const authors = ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"];

// // const authorsInAlphabetOrder = [...authors].sort((firstString, secondString) =>
// // 	firstString.localeCompare(secondString),
// // ); // для примера
// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// console.log("Сортировка копии массива строк в алфавитном порядке:", authorsInAlphabetOrder);

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// console.log("Сортировка копии массива строк в обратном алфавитном порядке:", authorsInReversedOrder);

// ЗАДАЧА 41/48------------------------------------------------------------------------
// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		rating: 8.51,
// 	},
// 	{
// 		title: "The Dream of a Ridiculous Man",
// 		author: "Fyodor Dostoevsky",
// 		rating: 7.75,
// 	},
// 	{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// 	{ title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));
// console.log(
// 	"Сортировка копии массива строк, книг отсортированный по имени автора в алфавитном порядке:",
// 	sortedByAuthorName,
// );

// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));
// console.log(
// 	"Сортировка копии массива строк, книг отсортированный по имени автора в обратном алфавитном порядке:",
// 	sortedByReversedAuthorName,
// );

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// console.log("Сортировка копии массива чисел, книг отсортированный по возрастанию рейтинга:", sortedByAscendingRating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
// console.log("Сортировка копии массива чисел, книг отсортированный по убыванию рейтинга:", sortedByDescentingRating);

// ЗАДАЧА 42/48------------------------------------------------------------------------
// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 	},
// ];

// const sortByAscendingBalance = users => {
// 	return [...users].sort((a, b) => a.balance - b.balance);
// };
// console.log(
// 	"Сортировка копии массива объектов по числам из значения 'balance' , отсортированный по возрастанию баланса:",
// 	sortByAscendingBalance(users),
// );

// ЗАДАЧА 43/48------------------------------------------------------------------------
// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 	},
// ];

// const sortByDescendingFriendCount = users => {
// 	return [...users].sort((a, b) => b.friends.length - a.friends.length);
// };
// console.log(
// 	"Массив пользователей отсортированный по убыванию количества их друзей (свойство friends):",
// 	sortByDescendingFriendCount(users),
// );

// // const names = [...users].sort((a, b) => a.friends.length - b.friends.length);
// // // .map(users => users.name);
// // console.log(
// // 	names, // [...users].sort((a, b) => a.friends.length - b.friends.length); создаем новый массив и сортируем его по алфавиту всех друзей friends
// // 	names.map(users => users.name), // .map(users => users.name) выводить массив всех друзей friends .
// // );

// ЗАДАЧА 44/48------------------------------------------------------------------------
// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 	},
// ];

// const sortByName = users => [...users].sort((a, b) => a.name.localeCompare(b.name));
// console.log(
// 	"массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке:",
// 	sortByName(users),
// );

// ЗАДАЧА 45/48------------------------------------------------------------------------
// const books = [
// 	{
// 		title: "The Last Kingdom",
// 		author: "Bernard Cornwell",
// 		rating: 8.38,
// 	},
// 	{
// 		title: "Beside Still Waters",
// 		author: "Robert Sheckley",
// 		rating: 8.51,
// 	},
// 	{
// 		title: "The Dream of a Ridiculous Man",
// 		author: "Fyodor Dostoevsky",
// 		rating: 7.75,
// 	},
// 	{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// 	{
// 		title: "The Dreams in the Witch House",
// 		author: "Howard Lovecraft",
// 		rating: 8.67,
// 	},
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
// 	.filter(book => book.rating >= MIN_BOOK_RATING)
// 	.sort((a, b) => a.author.localeCompare(b.author))
// 	.map(book => book.author);

// console.log(names); // Значение переменной names это массив ['Bernard Cornwell', 'Howard Lovecraft', 'Robert Sheckley']

// // const names = books =>
// // 	[...books]
// // 		.sort((a, b) => a.author.localeCompare(b.author))
// // 		.filter(book => book.rating >= MIN_BOOK_RATING)
// // 		.map(book => book.author);
// // console.log(names(books)); // Значение переменной names это функция выводит новый массив ['Bernard Cornwell', 'Howard Lovecraft', 'Robert Sheckley']

// // const names = books =>
// // 	books
// // 		.filter(book => book.rating >= MIN_BOOK_RATING)
// // 		.map(book => book.author)
// // 		.sort((a, b) => a.author - b.author);
// // console.log(names(books)); // Значение переменной names это функция выводит массив ['Bernard Cornwell', 'Howard Lovecraft', 'Robert Sheckley']

// ЗАДАЧА 46/48------------------------------------------------------------------------
// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 	},
// ];

// // const getNamesSortedByFriendCount = users => {
// // 	return [...users].sort((a, b) => a.friends.length - b.friends.length).map(users => users.name);
// // };
// // console.log(getNamesSortedByFriendCount(users));

// const getNamesSortedByFriendCount = users =>
// 	[...users].sort((a, b) => a.friends.length - b.friends.length).map(users => users.name);

// console.log(getNamesSortedByFriendCount(users));

// //============================================
// //массив
// // возвращает массив NamesSortedByFriendCount
// // const NamesSortedByFriendCount = users.flatMap(user => user.friends);
// // console.log(NamesSortedByFriendCount);  // возвращает массив NamesSortedByFriendCount

// //функция с деструктуризацией
// // возвращает функцию массива NamesSortedByFriendCount с деструктуризацией
// // const FriendCount = users => users.flatMap(user => user.friends);
// // console.log(FriendCount(users)); // возвращает функцию массива NamesSortedByFriendCount

// //функция без деструктуризации
// // возвращает функцию массива NamesSortedByFriendCount без деструктуризацией
// // const TestFriendCount = users => {
// // 	return users.flatMap(user => user.friends);
// // };
// // console.log(TestFriendCount(users));
// //============================================

// ЗАДАЧА 47/48------------------------------------------------------------------------
// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 	},
// ];
// //Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .
// const getSortedFriends = users => {
// 	return users
// 		.flatMap(user => user.friends) // На исходном массиве вызываем flatMap() и делаем разглаженный массив всех друзей friends
// 		.filter((friends, index, array) => array.indexOf(friends) === index) // К результату метода flatMap() применяем метод filter() для фильтрации уникальных элементов friends.
// 		.sort((a, b) => a.localeCompare(b)); // На результате метода filter() вызываем sort() сортировка по алфавиту
// };
// console.log(getSortedFriends(users));

// ЗАДАЧА 48/48------------------------------------------------------------------------
// const users = [
// 	{
// 		name: "Moore Hensley",
// 		email: "moorehensley@indexia.com",
// 		eyeColor: "blue",
// 		friends: ["Sharron Pace"],
// 		isActive: false,
// 		balance: 2811,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		email: "sharlenebush@tubesys.com",
// 		eyeColor: "blue",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 		isActive: true,
// 		balance: 3821,
// 		gender: "female",
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		email: "rossvazquez@xinware.com",
// 		eyeColor: "green",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 		isActive: false,
// 		balance: 3793,
// 		gender: "male",
// 	},
// 	{
// 		name: "Elma Head",
// 		email: "elmahead@omatom.com",
// 		eyeColor: "green",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 		isActive: true,
// 		balance: 2278,
// 		gender: "female",
// 	},
// 	{
// 		name: "Carey Barr",
// 		email: "careybarr@nurali.com",
// 		eyeColor: "blue",
// 		friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
// 		isActive: true,
// 		balance: 3951,
// 		gender: "male",
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		email: "blackburndotson@furnigeer.com",
// 		eyeColor: "brown",
// 		friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
// 		isActive: false,
// 		balance: 1498,
// 		gender: "male",
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		email: "shereeanthony@kog.com",
// 		eyeColor: "brown",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 		isActive: true,
// 		balance: 2764,
// 		gender: "female",
// 	},
// ];

// //Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.
// // const getTotalBalanceByGender = (users, gender) => { };

// const getTotalBalanceByGender = (users, gender) => {
// 	return users
// 		.filter(user => user.gender === gender)
// 		.reduce((total, user) => {
// 			return total + user.balance;
// 		}, 0);
// };
// console.log(getTotalBalanceByGender(users, "female")); // если gender === "female" верни их общий баланс balance
// console.log(getTotalBalanceByGender(users, "male")); // если gender === "male" верни их общий баланс balance

// JS V2 block-5 =====================================================================
// ЗАДАЧА 1/20------------------------------------------------------------------------
// Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в местах обращения к свойствам и методам объекта.
// // const pizzaPalace = {
// // 	pizzas: ["Supercheese", "Smoked", "Four meats"],
// // 	// Change code below this line
// // 	checkPizza(pizzaName) {
// // 		return pizzas.includes(pizzaName);
// // 	},
// // 	order(pizzaName) {
// // 		const isPizzaAvailable = checkPizza(pizzaName);

// // 		if (!isPizzaAvailable) {
// // 			return `Sorry, there is no pizza named «${pizzaName}»`;
// // 		}

// // 		return `Order accepted, preparing «${pizzaName}» pizza`;
// // 	},
// // 	// Change code above this line
// // };

// const pizzaPalace = {
// 	pizzas: ["Supercheese", "Smoked", "Four meats"],
// 	checkPizza(pizzaName) {
// 		return this.pizzas.includes(pizzaName);
// 	},
// 	order(pizzaName) {
// 		const isPizzaAvailable = this.checkPizza(pizzaName);

// 		if (!isPizzaAvailable) {
// 			return `Sorry, there is no pizza named «${pizzaName}»`;
// 		}

// 		return `Order accepted, preparing «${pizzaName}» pizza`;
// 	},
// };

// console.log(pizzaPalace.order("Smoked"));
// console.log(pizzaPalace.order("Four meats"));
// console.log(pizzaPalace.order("Big Mike"));
// console.log(pizzaPalace.order("Viennese"));

// ЗАДАЧА 2/20------------------------------------------------------------------------
// // const customer = {
// //   username: "Mango",
// //   balance: 24000,
// //   discount: 0.1,
// //   orders: ["Burger", "Pizza", "Salad"],
// //   // Change code below this line
// //   getBalance() {
// //     return balance;
// //   },
// //   getDiscount() {
// //     return discount;
// //   },
// //   setDiscount(value) {
// //     discount = value;
// //   },
// //   getOrders() {
// //     return orders;
// //   },
// //   addOrder(cost, order) {
// //     balance -= cost - cost * discount;
// //     orders.push(order);
// //   },
// //   // Change code above this line
// // };

// // customer.setDiscount(0.15);
// // console.log(customer.getDiscount()); // 0.15
// // customer.addOrder(5000, "Steak");
// // console.log(customer.getBalance()); // 19750
// // console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// const customer = {
// 	username: "Mango",
// 	balance: 24000,
// 	discount: 0.1,
// 	orders: ["Burger", "Pizza", "Salad"],
// 	getBalance() {
// 		return this.balance;
// 	},
// 	getDiscount() {
// 		return this.discount;
// 	},
// 	setDiscount(value) {
// 		this.discount = value;
// 	},
// 	getOrders() {
// 		return this.orders;
// 	},
// 	addOrder(cost, order) {
// 		this.balance -= cost - cost * this.discount;
// 		this.orders.push(order);
// 	},
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// ЗАДАЧА 3/20------------------------------------------------------------------------
// // const historyService = {
// //   orders: [
// //     { email: "jacob@hotmail.com", dish: "Burrito" },
// //     { email: "solomon@topmail.net", dish: "Burger" },
// //     { email: "artemis@coldmail.net", dish: "Pizza" },
// //     { email: "solomon@topmail.net", dish: "Apple pie" },
// //     { email: "jacob@hotmail.com", dish: "Taco" },
// //   ],
// //   // Change code below this line
// //   getOrdersLog() {
// //     return orders
// //       .map(order => `email: ${order.email} dish: ${order.dish}`)
// //       .join(" - ");
// //   },
// //   getEmails() {
// //     const emails = orders.map(order => order.email);
// //     const uniqueEmails = new Set(emails);
// //     return [...uniqueEmails];
// //   },
// //   getOrdersByEmail(email) {
// //     return orders.filter(order => order.email === email);
// //   },
// //   // Change code above this line
// // };

// const historyService = {
// 	orders: [
// 		{ email: "jacob@hotmail.com", dish: "Burrito" },
// 		{ email: "solomon@topmail.net", dish: "Burger" },
// 		{ email: "artemis@coldmail.net", dish: "Pizza" },
// 		{ email: "solomon@topmail.net", dish: "Apple pie" },
// 		{ email: "jacob@hotmail.com", dish: "Taco" },
// 	],
// 	// Change code below this line
// 	getOrdersLog() {
// 		return this.orders.map(order => `email: ${order.email} dish: ${order.dish}`).join(" - ");
// 	},
// 	getEmails() {
// 		const emails = this.orders.map(order => order.email);
// 		const uniqueEmails = new Set(emails);
// 		return [...uniqueEmails];
// 	},
// 	getOrdersByEmail(email) {
// 		return this.orders.filter(order => order.email === email);
// 	},
// 	// Change code above this line
// };

// console.log(historyService.getOrdersLog());
// console.log(historyService.getEmails());
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
// console.log(historyService.getOrdersByEmail("artemis@coldmail.net"));

// ЗАДАЧА 4/20------------------------------------------------------------------------
const parent = {
	name: "Stacey",
	surname: "Moore",
	age: 54,
	heritage: "Irish",
};
// Change code below this line

const child = {};

// Change code above this line
child.name = "Jason";
child.age = 27;

parent.hasOwnProperty("surname");
parent.hasOwnProperty("heritage");
parent.hasOwnProperty("heritage");
child.hasOwnProperty("age");
child.hasOwnProperty("surname");
child.hasOwnProperty("heritage");
parent.isPrototypeOf(child);
