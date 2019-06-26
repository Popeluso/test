function myFunction() {
  var x = document.getElementById("frm1");
  var text = "Hola, mi muy señor ";
  text += x.element[0] + ", de la casa " + x.element[1] + ".<br>";
  document.getElementById("demo2").innerHTML = text;
}
