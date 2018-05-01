Sunmedia

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

  5
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
