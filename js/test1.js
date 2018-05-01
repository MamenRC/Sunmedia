'use strict';

var rgb = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
};

var wb = {
    white: "#FFFFFF",
    black: "#000000"
};

var colors = Object.assign(rgb, wb);

console.log(colors);

//Modifica el código para que las variables rgb y wb mantengan sus valores iniciales y colors tenga los valores de ambas al finalizar la ejecución del script.
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
