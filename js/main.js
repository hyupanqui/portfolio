const btnSwitch = document.getElementById('switch');

btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btnSwitch.classList.toggle('active');

  // Guarda el estado del modo en el almacenamiento local
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('mode', 'dark');
  } else {
    localStorage.setItem('mode', 'light');
  }
});

// Verifica el estado del modo en el almacenamiento local al cargar la página
const currentMode = localStorage.getItem('mode');
if (currentMode === 'dark') {
  document.body.classList.add('dark');
  btnSwitch.classList.add('active');
}


/* 
const btnSwitch = document.getElementById('switch');

btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btnSwitch.classList.toggle('active');
  localStorage.setItem('mode', document.body.classList.contains('dark') ? 'dark' : 'light');
});

document.body.classList.toggle('dark', localStorage.getItem('mode') === 'dark');
btnSwitch.classList.toggle('active', localStorage.getItem('mode') === 'dark'); 
*/
