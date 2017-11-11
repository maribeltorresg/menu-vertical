// var title = document.getElementById('title');
// console.log(title);
// // Primer hijo 
// console.log(title.firstChild);

// // Retornara una colección de html en un array-like 
// var linkList = document.getElementsByTagName('a');
// console.log(linkList);

// // Muestrame en la posición [0] 
// console.log (linkList[0]);

// // Muestrame su texto 
// console.log (linkList[0].firstChild);

// // Muestra todos los elementos con la clase items 
// // Retorna una collección de htmls 
// var itemList = document.getElementsByClassName('item');
// console.log(itemList); 

// // Ultimo li
// console.log(itemList[4]);

// // Queremos acceder al texto pero esta dentro de otro elemento
// console.log(itemList[4].firstElementChild); 

// // Ahora acceder al texto
// console.log(itemList[4].firstElementChild.firstChild); 


// QUERYSELECTOR nos permite acceder con un selector css
 var title = document.querySelector('#title');
 console.log(title);

// Acceder al texto
console.log(title.firstChild);

// Accediendo a navbar
var navbar = document.querySelector('#navbar'); 
console.log(navbar);

// Accediendo a item esto solo te devuelve el primero con esa clase
var item = document.querySelector('.item');
console.log(item);

// Accediendo a todos
// Retorna una lista de nodos 
var listItem = document.querySelectorAll('.item')
console.log(listItem);