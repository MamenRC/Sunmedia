SunMedia JS Tests

Este es el repositorio para la prueba técnica de Javascript de SunMedia. La prueba consta de hasta cuatro test. En cada una de las carpetas que separan los test encontrarás un fichero README.md que explica más detalladamente qué es lo que se pide, así como el código asociado a la prueba.

Las pruebas:

Test 1
Test 2
Test 3
Test 4

Lo que valoramos

Buenas prácticas de desarollo
Testing
Buen conocimiento de JavaScript
Presentación de la prueba


La prueba puede subirse a algún repositorio público al que podamos tener acceso desde el equipo de desarrollo de SunMedia.


TEST 1

1.- En el fragmento de código de nuestro archivo (test.js) podemos encontrar hasta 3 variables. ¿Podrías decirnos cuál sería el valor de todas ellas al finalizar la ejecución del script?

  {red: "#FF0000", green: "#00FF00", blue: "#0000FF", white: "#FFFFFF", black: "#000000"}

2.- Modifica el código para que las variables rgb y wb mantengan sus valores iniciales y colors tenga los valores de ambas al finalizar la ejecución del script.


        'use strict';
        function test() {

          var rgb = {
              red: "#FF0000",
              green: "#00FF00",
              blue: "#0000FF"
          };

          var wb = {
              white: "#FFFFFF",
              black: "#000000"
          };

          console.log(Object.assign(rgb, wb));
          var colors = Object.assign(rgb, wb);
          console.log(colors);
        }

        test();


3.- Además, tenemos un bug localizado en dispositivos con Internet Explorer… El código de nuestro script no funciona y necesitamos que se ejecute también en este navegador. ¿Sabrías identificar cuál es el problema? ¿Qué solución nos propones?


TEST 2

1.- El fragmento de código de nuestro fichero test.js nos devuelve un output no deseado. Queremos imprimir un valor incremental a cada segundo pero lo que nos devuelve el código es el mismo valor en cada iteración.
Sin necesidad de ejecutar el código, ¿sabrías decirnos qué valor imprimiría por consola el script? ¿Cuál es el motivo?

  5.

  El método setTimeout() del mixin WindowOrWorkerGlobalScope establece un temporizador que ejecuta una función o una porción de código después de que transcurre un tiempo, en este caso 1 segundo

2.- Sabiendo que el output que buscamos es el que encuentras bajo estas líneas… ¿Cómo solucionarías el fragmento de código para que el output sea el deseado?


    > 0
    > 1
    > 2
    > 3
    > 4


    'use strict';
    for (var cont=0; cont<=4; cont++) {
      console.log(cont);
    }



TEST 3

En este caso, tenemos un código usando el objeto Promise (Promesa). Las promises (promesas) nos permiten manejar situaciones asíncronas en nuestras ejecuciones, pero tenemos un pequeño problema… No es una solución totalmente cross-browser. Sabemos que no funciona en Internet Explorer así que nos gustaría saber cómo modificarías nuestro código (test.js) para que funcione correctamente.


    'use strict';

    let promise = new Promise((resolve, reject) => {

    // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
    // En este ejemplo, usamos setTimeout(...) para simular código asíncrono.
        setTimeout(function () {
            if (Math.round(Math.random()) === 1) {
                resolve("Success!");
            } else {
                reject("Fail!");
            }
        }, 1000);
    });

    promise
        .then((successMessage) => {
            console.log("Yes! " + successMessage);
        })
        .catch((failMessage) => {
            console.log("No! " + failMessage);
        });
