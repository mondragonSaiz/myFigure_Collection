console.log('SAGA FILTER JS');
const sagaOpts = document.querySelectorAll('.dropdown-item');
const sagaSelectBTN = document.querySelector('.saga-dropdown');

function handleOpts(event) {
  const value = event.target.textContent;
  console.log('VALOR', value);
  sagaSelectBTN.textContent = value;
}
sagaOpts.forEach((item) => {
  item.addEventListener('click', handleOpts);
});
