let textValue = document.getElementById("evaluatedText");
let count = document.getElementById("letterCount");

textValue.addEventListener("input", function() {
	if(this.value == ""){
		count.innerText = 0;
	}
	count.innerText = this.value.length;
	
})
