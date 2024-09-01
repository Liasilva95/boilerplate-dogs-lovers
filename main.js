import data from "./data.js";

const dogs = data.dogs; // ACCEDE AL ARRAY 'DOGS' DENTRO DEL OBJ 'DATA'
const dogsContenedor = document.getElementById("dogs"); //Obtiene el elemento con ID "dogs" del DOM y almacena 

function createDog(dog) { //Define la funcion "createDog" del DOM, toma un objeto "dog" como parametro
  const card = document.createElement("div"); //Crea un nuevo elemento "div" y almacena en la variable "card"
  card.classList.add("dog-container");

  const img = document.createElement("img"); //Crea nuevos elementos para la imagen y raza 
  const breed = document.createElement("h2");

  const textBreed = document.createTextNode(dog.breed); //Crea un nodo de texto con nombre de la raza del perro y almacena
  breed.appendChild(textBreed); //Agrega el nodo de texto a la etiqueta "h2"

  img.src = dog.image; //Establece el atributo "src" de la imagen con la URL y "alt" con nombre de la raza
  img.alt = dog.breed;

  card.appendChild(img); //Agrega la imagen y "h2" al elemento "div" creado
  card.appendChild(breed);

  dogsContenedor.appendChild(card); //Agrega la tarjeta completa al contenedor con el "ID" dogs
}

dogs.forEach(createDog); //Itera sobre el array "dogs" y llama a la funcion "createDog" para c/objeto en el array


