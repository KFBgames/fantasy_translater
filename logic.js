var alphabet = "абвгдеёжзийклмнопрстцфхцчшщъюйэюя";
for (var i = 0; i < alphabet.length; i++) {
	let button = document.createElement("button");
	button.innerHTML = alphabet[i];
	button.onclick = function() {
		write.value += this.innerHTML;
		read.value += this.innerHTML;
	}
	document.body.appendChild(button);
}