var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

button.addEventListener('click', function() {
  modal.classList.add('modal_active');
});

/* окно исчезает после 10 сек */

/*function clo() {
    modal.classList.remove('modal_active');
  }

setTimeout(clo, 10000);*/

close.addEventListener('click', function() {
  modal.classList.remove('modal_active');
});