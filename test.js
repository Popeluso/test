function myFunction() {
  var x = document.getElementById("fname").value;
  var y = document.getElementById("lname").value;
  var text = "Hola, mi muy señor " + x + ", de la casa " + y;
  document.getElementById("demo2").innerHTML = text;
}
