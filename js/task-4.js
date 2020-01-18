const credits = 23580;
const pricePerDroid = 3000;
let message;
let userIhput = prompt('Пожалуйста укажите количество приобретаемых дроидов');
userIhput = Number(userIhput);

if (userIhput === null) {
  message = 'Отменено пользователем!';
} else {
  const totalPrice = userIhput * pricePerDroid;

  message =
    totalPrice > credits
      ? 'Недостаточно средств на счету!'
      : `Вы купили ${userIhput} дроидов, на счету осталось ${credits -
          totalPrice} кредитов.`;
}

console.log(message);
