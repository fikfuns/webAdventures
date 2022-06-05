const team = {
    _players: [
      {firstName: 'Lionel', lastName: 'Messi', age:34},
      {firstName: 'Cristiano', lastName: 'Ronaldo', age:37},
      {firstName: 'Karim', lastName: 'Benzema', age:32}
    ],
    _games: [
      {opponent: 'PSG', teamPoints: 26, opponentPoints: 20},
      {opponent: 'Manu', teamPoints: 31, opponentPoints: 25},
      {opponent: 'Fcb', teamPoints: 33, opponentPoints: 27}
    ],
  
    get players () {
      return this._players;
    },
  
    get games () {
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this.players.push(player);
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this.games.push(game);
    }
  };
  
  team.addPlayer('Bugs','Bunny',76);
  console.log(team.players);
  
  team.addGame('Titans', 100, 98);
  console.log(team.games);
  