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


  // var arrayDanny = [
  //
  //   [
  //     [
  //       [
  //         "ciao"
  //       ]
  //     ]
  //   ]
  // ];
  //
  // console.log(arrayDanny[0][0][0][0][0]);

  // EXERCISE 1
  // Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome ed età. Stampare a schermo attraverso il for tutte le proprietà.

  var vampireSlayer = {
    "name": "Buffy",
    "lastname": "Summers",
    "age": 25
  }

  for (var i in vampireSlayer) {
    var value = vampireSlayer[i];
    console.log(i + " = " + value);
  }

  // EXERCISE 2
  // Creare un array di oggetti di studenti. Ciclare su tutti gli
   // studenti e stampare per ognuno nome e cognome

   var arrayRomaAntica = [
     {
       "prenomen": "Caio",
       "nomen": "Giulio",
       "cognomen": "Cesare",
       "aetate": 44
     },
     {
       "prenomen": "Publio",
       "nomen": "Cornelio",
       "cognomen": "Scipione",
       "aetate": 50
     },
     {
       "prenomen": "Marco",
       "nomen": "Tullio",
       "cognomen": "Cicerone",
       "aetate": 55
     }
   ];

   for (i = 0; i < arrayRomaAntica.length; i++) {

     var senator = arrayRomaAntica[i];
     var nomen = senator["nomen"];
     var cognomen = senator["cognomen"];

     console.log(nomen, cognomen);

     // var prenomen = senator["prenomen"];
     // var aetate = senator["aetate"];
     // console.log(prenomen, aetate,);
   }

  // EXERCISE 3
  // Dare la possibilità all'utente attraverso 3 prompt di
  // aggiungere un nuovo oggetto studente inserendo
  // nell'ordine: nome, cognome e età.

  var studenti = [
    {
      "nome": "Orazio",
      "cognome": "Nelson",
      "eta": 38
    },
    {
      "nome": "Diego",
      "cognome": "Alatriste",
      "eta": 34
    },
    {
      "name": "Napoleone",
      "cognome": "Bonaparte",
      "eta": 50
    }
  ];

  var nuovoNome = prompt("Dammi il tuo nome");
  var nuovoCognome = prompt("Dammi il tuo cognome");
  var nuovaEta = prompt("Dammi la tua età");

  var nuovoStudente = {
    "nome": nuovoNome,
    "cognome": nuovoCognome,
    "eta": nuovaEta
  };

  studenti.push(nuovoStudente);

  for (var i = 0; i < studenti.length; i++) {
    var studente = studenti[i];
    var nomen = studente["nome"];
    var cognomen = studente["cognome"];
    var aetate = studente["eta"]
  };
  console.log(studenti, nomen, cognomen, aetate);

  // --------------------------------------------------------------------------

  // creare oggetto palla, caratterizzato da nome, peso e colore. Loggare intera struttura.

  // chiedere all'utente il colore della palla e valorizzare il campo corrispondente. Loggare poi l'oggetto risultante

  var palla = {
    "nome": "Danny",
    "peso": 12,
    "colore": "blue e verde"
  };
  console.log(palla);

  var userColor = prompt("Dimmi il colore della palla");
  palla["colore"] = userColor;

  console.log(palla);

  // richiedere all'utente base ed altezza di un triangolo rettangolo, valorizzare l'oggeto con le dimensioni del triangolo, loggare triangolo e relativa area;

  var base = parseInt(prompt("dimmi la base"));
  var altezza = parseInt(prompt("dimmi l'altezza"));

  var triangolo = {
    "base": base,
    "altezza": altezza
  };

  var area = triangolo.base * triangolo.altezza / 2;
  console.log(triangolo, area);

  // Crea un array di 10 oggetti che rappresentano una
  // zucchina, indicando per ognuna varietà, peso e lunghezza.
  // Calcola quanto pesano tutte le zucchine.
  //
  // var zucchine = [
  //
  //   {
  //     "varieta": "zucchina blue",
  //     "peso": 1,
  //     "lunghezza": 2
  //   },
  //   {
  //     "varieta": "zucchina rossa",
  //     "peso": 1,
  //     "lunghezza": 2
  //   },
  //   {
  //     "varieta": "zucchina viola",
  //     "peso": 1,
  //     "lunghezza": 2
  //   },
  //   {
  //     "varieta": "zucchina arancione",
  //     "peso": 1,
  //     "lunghezza": 2
  //   },
  //   {
  //     "varieta": "zucchina fuchsia",
  //     "peso": 1,
  //     "lunghezza": 1
  //   },
  //   {
  //     "varieta": "zucchina marrone",
  //     "peso": 2,
  //     "lunghezza": 1
  //   },
  //   {
  //     "varieta": "zucchina azzurra",
  //     "peso": 2,
  //     "lunghezza": 1
  //   },
  //   {
  //     "varieta": "zucchina magenta",
  //     "peso": 2,
  //     "lunghezza": 1
  //   },
  //   {
  //     "varieta": "zucchina lime",
  //     "peso": 2,
  //     "lunghezza": 1
  //   },
  //   {
  //     "varieta": "zucchina grigia",
  //     "peso": 2,
  //     "lunghezza": 1
  //   }
  // ];
  //
  // var sommaPeso = 0;
  // var sommaLunghezza = 0;
  //
  // for (var i = 0; i < zucchine.length; i++) {
  //
  //   var value = zucchine[i];
  //   sommaPeso += value["peso"];
  //   sommaLunghezza += value["lunghezza"]
  // }
  //
  // for (var i = 0; i < zucchine.length; i++) {
  //
  //   var zucchinaSingola = zucchine[i];
  //   var varieta = zucchinaSingola['varieta'];
  //   console.log(varieta);
  // }
  //
  // console.log("Somma peso", sommaPeso, " kg");
  // console.log("Somma lunghezza", sommaLunghezza, " m");
  // console.log(zucchine[0]["varieta"]);

} // FINE FUNZIONE INIT

$(document).ready(init);
