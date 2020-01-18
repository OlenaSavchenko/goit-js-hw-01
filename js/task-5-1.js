const countryInputRef = document.querySelector('.country');
const buttonRef = document.querySelector('button');

buttonRef.addEventListener('click', function() {
  console.log('countryInputRef.value:', countryInputRef.value);
});

const country = countryInputRef.value.toLowerCase();
console.log(country);

// let cost;

// switch (countryInputRef.value) {
//   case 'китай':
//     cost = 100;
//     break;

//   case 'чили':
//     cost = 250;
//     break;

//   case 'австралия':
//     cost = 170;
//     break;

//   case 'индия':
//     cost = 80;
//     break;

//   case 'ямайка':
//     cost = 120;
//     break;

//   default:
//     alert('В вашей стране доставка не доступна');
// }

// alert(`Доставка в ${countryInputRef.value} будет стоить ${cost} кредитов`);
