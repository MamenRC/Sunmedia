Sunmedia

TEST 1
1.- En el fragmento de código de nuestro archivo (test.js) podemos encontrar hasta 3 variables. ¿Podrías decirnos cuál sería el valor de todas ellas al finalizar la ejecución del script?

  {red: "#FF0000", green: "#00FF00", blue: "#0000FF", white: "#FFFFFF", black: "#000000"}

2.- Modifica el código para que las variables rgb y wb mantengan sus valores iniciales y colors tenga los valores de ambas al finalizar la ejecución del script.
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
    }

    test();

3.- Además, tenemos un bug localizado en dispositivos con Internet Explorer… El código de nuestro script no funciona y necesitamos que se ejecute también en este navegador. ¿Sabrías identificar cuál es el problema? ¿Qué solución nos propones?
