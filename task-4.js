let credits = 23500;
let pricePreDroid = 3000;
let totalPrice;

let ordered = prompt("Сколько дроидов вы хотите купить?");

if (ordered === null) {
  console.log("Отменено пользователем!");
} else {
  totalPrice = ordered * pricePreDroid;
}

if (totalPrice > credits) {
  console.log("Не достаточно денег на счету!");
} else {
  credits = credits - totalPrice;
  console.log(
    `Вы купили ${ordered} дроидов, на счету осталось ${credits} кредитов.`
  );
}
