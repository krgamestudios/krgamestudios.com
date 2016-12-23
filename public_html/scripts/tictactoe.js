//global variables
var xIsNext = true;
var squares = Array(9).fill(null);
var winner = null

//input handler
function handleClick(param) {
	//skip already selected cells
	if (squares[param.name] != null || winner != null) {
		return;
	}

	//place the X or O
	squares[param.name] = xIsNext ? 'X' : 'O';
	param.innerHTML = squares[param.name];
	xIsNext = !xIsNext;

	//update the header text
	document.getElementById('display').innerHTML = 'Next Move: ' + (xIsNext ? 'X' : 'O' )

	checkWinner()
}

var winArray = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],

	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],

	[0, 4, 8],
	[6, 4, 2]
];

function checkWinner() {
	for (i in winArray) {
		const [a, b, c] = winArray[i]
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			winner = squares[a];
			document.getElementById('display').innerHTML = 'Winner: ' + winner;
		}
	}
}

//put this last to allow the error message to remain in case of errors
document.getElementById('display').innerHTML = 'Next Move: X';