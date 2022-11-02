const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

var numbs = new Array("a","b");
// ...
// Je met des entrées dans l'Array
// ...
numbs.forEach(function(item, index, array){
    console.log(item);
});

