let message = prompt("Укажите страну для доставки!");
let country;
let cost;
message = message.toLowerCase();
switch (message) {
  case "китай":
    country = "Китай";
    cost = 100;
    break;

  case "чили":
    country = "Чили";
    cost = 250;
    break;

  case "австралия":
    country = "Австралия";
    cost = 170;
    break;

  case "индия":
    country = "Индия";
    cost = 80;
    break;

  case "ямайка":
    country = "Ямайка";
    cost = 500;
    break;

  default:
    console.log("В вашей стране доставка недоступна.");
}
console.log(`Доставка в ${country} будет стоить ${cost} кредитов.`);
