function init() {

  var arr = [1,2,3, "ciao", "hola", "true", true, false, -1, ["hola", "mundo"]];
  console.log(arr);

  for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
  console.log(arr[9][0]);
  console.log(arr[9][1]);

  var matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ];

  console.log("OOOOH YEAH MATRIX", matrix[3][3]);

  var films = {
    "title": "Matrix",
    "budget": "10€",
    "actors": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"],
    "locations": "New York"
  }

  var obj = {
    "key1": "one",
    "key2": 2,
    "key3": true
  }
  console.log(obj["key1"], obj.key3);
}

$(document).ready(init);
