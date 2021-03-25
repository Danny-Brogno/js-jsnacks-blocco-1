function init() {
  //
  //   var arr = [1,2,3, "ciao", "hola", "true", true, false, -1, ["hola", "mundo"]];
  //   console.log(arr);
  //
  //   for (var i = 0; i < arr.length; i++) {
  //     console.log(i, arr[i]);
  //   }
  //   console.log(arr[9][0]);
  //   console.log(arr[9][1]);
  //
  //   var matrix = [
  //     [1, 2, 3, 4, 5],
  //     [6, 7, 8, 9, 10],
  //     [11, 12, 13, 14, 15],
  //     [16, 17, 18, 19, 20],
  //     [21, 22, 23, 24, 25]
  //   ];
  //   console.log("OOOOH YEAH MATRIX", matrix[3][3]);

  // -----------------------------------------------------------------------------

  // var films = {
  //   "title": "Matrix",
  //   "budget": "10€",
  //   "actors": [["Keanu Reeves"], ["Laurence Fishburne"], "Carrie-Anne Moss", "Hugo Weaving"],
  //   "locations": "New York"
  // }
  //
  // console.log(films["actors"]);
  //
  // var obj = {
  //   "key1": "one",
  //   "key2": 2,
  //   "key3": true,
  //   "key4": "four",
  //   "key5": 5
  // }
  //
  // var key = "key2";
  // obj[key] = "valore 2"
  // console.log(obj["key1"], obj.key3, key, obj[key]);
  //
  // for (var key in obj) {
  //
  //   var value = obj[key];
  //   console.log(key, value);
  // }

  // Crea un array di 10 oggetti che rappresentano una
  // zucchina, indicando per ognuna varietà, peso e lunghezza.
  // Calcola quanto pesano tutte le zucchine.
  var zucchine = [

    {
      "varieta": "zucchina blue",
      "peso": 1,
      "lunghezza": 2
    },
    {
      "varieta": "zucchina rossa",
      "peso": 1,
      "lunghezza": 2
    },
    {
      "varieta": "zucchina viola",
      "peso": 1,
      "lunghezza": 2
    },
    {
      "varieta": "zucchina arancione",
      "peso": 1,
      "lunghezza": 2
    },
    {
      "varieta": "zucchina fuchsia",
      "peso": 1,
      "lunghezza": 1
    },
    {
      "varieta": "zucchina marrone",
      "peso": 2,
      "lunghezza": 1
    },
    {
      "varieta": "zucchina azzurra",
      "peso": 2,
      "lunghezza": 1
    },
    {
      "varieta": "zucchina magenta",
      "peso": 2,
      "lunghezza": 1
    },
    {
      "varieta": "zucchina lime",
      "peso": 2,
      "lunghezza": 1
    },
    {
      "varieta": "zucchina grigia",
      "peso": 2,
      "lunghezza": 1
    }
  ];

  var sommaPeso = 0;
  var sommaLunghezza = 0;

  for (var i = 0; i < zucchine.length; i++) {

    var value = zucchine[i];
    sommaPeso += value["peso"];
    sommaLunghezza += value["lunghezza"]
  }

  for (var i = 0; i < zucchine.length; i++) {

    var zucchinaSingola = zucchine[i];
    var varieta = zucchinaSingola['varieta'];
    console.log(varieta);
  }

  console.log("Somma peso", sommaPeso, " kg");
  console.log("Somma lunghezza", sommaLunghezza, " m");
  console.log(zucchine[0]["varieta"]);

} // FINE FUNZIONE INIT

$(document).ready(init);
