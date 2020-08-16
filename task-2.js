// let compare_expression =
//   total > ordered
//     ? "Заказ оформлен, с вами свяжется менеджер"
//     : "На складе недостаточно твоаров";

const total = 200;
let ordered = 50;

let inventory_check =
  total >= ordered
    ? "Заказ оформлен, с вами свяжется менеджер"
    : "На складе недостаточно твоаров";
console.log(inventory_check);

ordered = 20;
inventory_check =
  total >= ordered
    ? "Заказ оформлен, с вами свяжется менеджер"
    : "На складе недостаточно твоаров";
console.log(inventory_check);

ordered = 80;
inventory_check =
  total >= ordered
    ? "Заказ оформлен, с вами свяжется менеджер"
    : "На складе недостаточно твоаров";
console.log(inventory_check);

ordered = 130;
inventory_check =
  total >= ordered
    ? "Заказ оформлен, с вами свяжется менеджер"
    : "На складе недостаточно твоаров";
console.log(inventory_check);

ordered = 201;
inventory_check =
  total >= ordered
    ? "Заказ оформлен, с вами свяжется менеджер"
    : "На складе недостаточно твоаров";
console.log(inventory_check);
