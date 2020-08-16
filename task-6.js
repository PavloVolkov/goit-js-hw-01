let input;
let total = 0;
for (let i = 0; i < Infinity; i += 1) {
  input = prompt("введите число");
  if (input) {
    total = Number(total) + Number(input);
  } else if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }
}
