let box;

for (var i = 0; i < 8; i++) {
	box = document.createElement('div');
	box.className = 'box';
	container.appendChild(box);
}

document.addEventListener('keydown', function(e) {
	if (e.keyCode == 32) {
		let bass = document.getElementById('bass-drum');
		bass.play();
		bass.currentTime = 0;
	}
})