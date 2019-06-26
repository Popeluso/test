function myFunction() {
  var x = document.getElementById("frm1");
  var text = "Hola, mi muy señor ";
  text += x.element[1].value + ", de la casa " + x.element[2].value + ".<br>";
  document.getElementById("demo2").innerHTML = text;
}
