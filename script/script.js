accept.addEventListener('click', () => console.log('Sii!!!'))
denied.addEventListener('click', () => setNewPosition(window.screen.width))

function setNewPosition(width) {
	var column = 0
	var row = 0
	if (width < 767) {
		// MOVIL
		column = Math.floor(Math.random() * 2 + 1)
		row = Math.floor(Math.random() * 24 + 1)
	} else if (width < 1024) {
		// TABLET
		column = Math.floor(Math.random() * 4 + 1)
		row = Math.floor(Math.random() * 24 + 1)
	} else {
		column = Math.floor(Math.random() * 6 + 1)
		row = Math.floor(Math.random() * 24 + 1)
	}

	console.log({ x: column, y: row })
}
