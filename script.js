var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var button = document.getElementById("autodraft");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

button.onclick = function () {
  location.href="pagetwo.html"
}

