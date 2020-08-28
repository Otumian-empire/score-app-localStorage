let db = localStorage
let scoreList = document.getElementById('scoreList')
let scoreBoard = JSON.parse(db.scoreBoard)

scoreBoard.forEach(function(item) {
  let listItem = document.createElement('li');
  let text = `${item.id}: ${item.players[0]} ${item.scores[0]} - ${item.scores[1]} ${item.players[1]}`

  listItem.appendChild(document.createTextNode(`${text}`));
  scoreList.appendChild(listItem);
})


document.getElementById('form').onsubmit = function(e) {
  e.preventDefault()
  e.stopPropagation()

  let player1 = document.getElementById('player1').value
  let player2 = document.getElementById('player2').value
  let score1 = document.getElementById('score1').value
  let score2 = document.getElementById('score2').value

  let params = {}
  params.id = db.idCounter
  params.players = [player1, player2]
  params.scores = [score1, score2]

  scoreBoard.push(params)

  db.scoreBoard = JSON.stringify(scoreBoard)
  db.idCounter = Number(db.idCounter) + 1
  document.location.reload()
}

function deleteScores() {
  localStorage.scoreBoard = undefined
  localStorage.idCounter = undefined
}
