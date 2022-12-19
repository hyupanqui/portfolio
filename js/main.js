 const btnSwitch = document.getElementById('switch');

 btnSwitch.addEventListener('click', () => {
   document.body.classList.toggle('dark');
   btnSwitch.classList.toggle('active');
 })

// const btnSwitch = document.getElementById('switch');
// const body = document.body;

// btnSwitch.addEventListener('click', function() {
//   const pers1 = body.classList.toggle('dark')
//   const pers2 = localStorage.setItem('switch', pers1)
//   btnSwitch.classList.toggle('active', pers2);
// })

// const valor1 = localStorage.getItem('switch')

// if (valor1 == "true" ) {
//   body.classList.add('dark')
// } else {
//   body.classList.remove('dark')
// }