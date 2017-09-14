function fibonacci(num) {
  if (num <= 1) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

window.onload = function() {

  var formFibonnaci = document.getElementById("form");

  formFibonnaci.onsubmit = function(evt) {
    evt.preventDefault();
    var num = document.getElementById("number").value;
    document.getElementById('output').innerHTML = fibonacci(num);
  }
}
