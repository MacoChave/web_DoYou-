accept.addEventListener('click', () => alert(':D'))
denied.addEventListener('click', () => setNewPosition(window.screen.width))

var lastCol = 0
var lastRow = 0

function setNewPosition(width) {
	resetPos()
	var column = 0
	var row = 0

	if (width < 767) {
		// MOVIL
		column = Math.floor(Math.random() * 2 + 1)
		row = Math.floor(Math.random() * 24 + 1)
		setPos(column, row)
	} else if (width < 1024) {
		// TABLET
		column = Math.floor(Math.random() * 4 + 1)
		row = Math.floor(Math.random() * 24 + 1)
		setPos(column, row)
	} else {
		column = Math.floor(Math.random() * 6 + 1)
		row = Math.floor(Math.random() * 24 + 1)
		setPos(column, row)
	}
}

function setPos(col, row) {
	denied.className += ' col' + col
	denied.className += ' row' + row

	lastCol = col
	lastRow = row
	console.log({ x: col, y: row })
}

function resetPos() {
	if (lastCol != 0 || lastRow != 0) {
		denied.className = denied.className.replace(' col' + lastCol, '')
		denied.className = denied.className.replace(' row' + lastRow, '')
	}
}
