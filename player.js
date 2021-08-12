class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score=0;
        this.rank=0;
        
        //this.score
        //var score
        //score=0
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
            
        });
    }
    
    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }
   /* playerScore(){
        database.ref("score").on("value",(data)=>{
            this.score=data.val();
        })
    }
    updateScore(score){
        database.ref("/").update({
         score:score
        })
        this.score=this.score+1;
    }
    playerRankAtEnd(){
        database.ref("palyerRank").on("value",(data)=>{
        this.rank=data.val();
        })
    }
    updatePlayersAtEnd(rank){
        database.ref('/').update({
            playerRankAtEnd:rank
        })
        this.rank=this.rank+1;
    }*/
}
