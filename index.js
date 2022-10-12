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

//=========================================
const add = (a, b) => a + b;
console.log(add(5, 10));

const planets = ["Земля", "Марс", "Венера", "Юпитер"];

const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']
console.log(planets); //['Земля', 'Марс', 'Венера', 'Юпитер']

//=========================================
const studentsMy = [
  { name: "Манго", courses: ["математика", "физика"] },
  { name: "Поли", courses: ["информатика", "математика"] },
  { name: "Киви", courses: ["физика", "биология"] },
];

const allCourses = studentsMy.flatMap((student) => student.courses);
// ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

const uniqueCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index
); // ['математика', 'физика', 'информатика', 'биология']
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

const best = students.filter((student) => student.score >= HIGH_SCORE);
console.table(best); // Массив объектов с именами Манго и Киви

const worst = students.filter((student) => student.score < LOW_SCORE);
console.table(worst); // Массив с одним объектом Аякс

// В коллбек-функции удобно деструктуризировать свойства объекта
const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
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