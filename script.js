let textValue = document.getElementById("evaluatedText");
let count = document.getElementById("letterCount");

textValue.addEventListener("input", function() {
	count.innerText = this.value.length;
})
