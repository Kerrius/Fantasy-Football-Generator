//link api's
  fetch('https://www.fantasyfootballdatapros.com/api/projections')
  .then(response => response.json())
    //.then(data => console.log(data));
    .then(data => {
      var playerInfoArray = data ['projections'];
  
    })
    




addEventListener("click", function () {
  myTeam = startDraftButtonClicked();
  document.getElementById("startdraft") = myTeam;
});

var playerInfoArray = [];
var teamPicksArray = []; // Maps the team number to an overall pick for both linear and snake formats
var overallPick = 1; // Used to index the teamPicksArray
var MAX_QB = 3;
var MAX_RB = 5;
var MAX_WR = 5;
var MAX_TE = 2;
var MAX_DST = 2;
var MAX_K = 2;
var numRosterSpots = 12;
var numRounds = 7;
var myTeam = [];
var myRange = document.getElementById('myRange')


// Constructor for PlayerInfo object
class PlayerInfo {
  constructor(rank, playerTeam, position, bye, projectedPoints) {
    this.rank = rank;
    this.playerTeam = playerTeam;
    this.position = position;
    this.bye = bye;
    this.projectedPoints = projectedPoints;
    this.fantasyTeam = "";
    this.round = 0;
    this.pick = 0;
    this.overallPick = 0;

    this.toString = function () {
      return this.rank + "," + this.playerTeam + "," + this.position + "," + this.bye + "," + this.projectedPoints;
    };
  }
}



function startDraftButtonClicked()
{    
    var myRange = myRange;
    var numRosterSpots = numRounds;
    
    
    // Clear out parts of objects in playerInfoArray
    for(var i = 0; i < playerInfoArray.length; i++)
    {
        playerInfoArray[i].fantasyTeam = "";
        playerInfoArray[i].round = 0;
        playerInfoArray[i].pick = 0;
        playerInfoArray[i].overallPick = 0;
    }
}