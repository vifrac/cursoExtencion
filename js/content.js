// Debes recordar que hay muchas formas para acceder a un elemento del dom te recomendo los sigientes recursos que puedes practicar en codepen.io
// - https://codigofacilito.com/cursos/javascript-dom
// - https://www.w3schools.com/js/js_htmldom.asp

// Dememos tener en cuenta la estructura del DOM de la pagina CF y que es posible que los elementos o clases aparezcan o desaparezcan dependiendo el tamaño dispuesto para el layout presentado en pantalla
// Definimos una variable para ver el elemento que agrupa todos los cursos, esto es solo como ejemplo pues pudieremos acceder al elemento que necesitamos y modificarlo como deseemos, solo que para cuando estamos probando es mas facil ubicar los elementos visualmente dependiendo como los vamos coloreando, luego elimenaremos lo que no necesitemos como las modificaciones a "courses" y testDiv

// pintamos de rojo el body, para ubicarnos y veridicar que nos permita modificar la info de la pagina CF
document.body.style.backgroundColor = 'red';

// Ubicamos donde se elementos los elementos que representan los cursos
const testDiv = document.getElementById('courses-section');
testDiv.style.backgroundColor = 'green';

// extraemos la info del local storage para saber el valor que debemos comparar
chrome.storage.sync.get('timeSelected', function (val) {
  if (val != undefined && val != null) {
    var timeSelectedByUser = val.timeSelected;
    filterByTime(timeSelectedByUser);
  }
});

function filterByTime(timeSelectedByUser) {
  const courses = document.querySelectorAll('a>div.f-padding-bottom-small');
  const maxTime = timeSelectedByUser;

  // Recorremos los cursos y en cada elemento que encuentre validaremos algunos elementos
  courses.forEach((element) => {
    // Con la siguiente linea podes testear que info hay en cada elemento del curoso
    console.log(element);

    // pintamos la targeta del curso de azul
    element.style.backgroundColor = 'blue';

    //extraemos el imfo del titulo (valida los elementos para estraer el titulo)
    const title = element.getElementsByClassName(
      'tall-padding flex-block full-width full-height'
    );
    title[0].style.backgroundColor = 'pink';

    //Ubicamos donde se encuentra el apartado de horas de estudio para cada cursos.
    const timeOfLearnig = element.querySelectorAll(
      'div.row.padding-left.padding-bottom.bottom-xs>div.flex-1.row.flex-column.bottom-xs>div.f-label.row.full-width.end-xs.uppercase>div.inline-block'
    );
    timeOfLearnig[0].style.backgroundColor = 'purple';

    //llamamos una funcion para comprobar si cumple las condiciones para ser coloreado
    validateTime(timeOfLearnig[0], maxTime);
  });
}

// Ubicamos el elemento que deseemos mapear para extraer la innfo de los cursos
// const courses = document.querySelectorAll('a>div.f-padding-bottom-small');

// Definimos un valor para comparar el tiempo de duracion del curso, si es mayor a esto pintaremos ese elemento de negro y letra en blanco
// const maxTime = 4;

function validateTime(time, maxTime) {
  // extraemos la duracion del curso
  const html = time.innerText;
  // utilizamos solo el primer caracter (hora) para comparara con la variable que antes definimos "maxTime"
  const hours = html.charAt(0);
  if (hours < maxTime) {
    // si nuestro curso tiene una duracion menor a 4 horas (maxtime) modificamos el backgraund en negro y sus elementos en blanco

    setNewStyle(time);
  }
}
function setNewStyle(time) {
  time.style.backgroundColor = 'black';
  time.style.color = 'white';
  time.style.fontWeidht = 'bold';
  // const parentCard = time.closest()
}
