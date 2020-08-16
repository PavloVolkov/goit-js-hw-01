const ADMIN_PASSWORD = "jqueryismyjam";
let message;
message = prompt("Enter password");

if (message === null) {
  message = "Отклонено пользователем";
} else if (message === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);
