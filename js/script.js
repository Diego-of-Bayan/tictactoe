/* global $ */
let playerNum = 1;
let alreadyClicked = false;
$(".b").click(function(){
    let id = this.id;
    console.log(id);
    if (playerNum === 1) {
        playerNum++;
        $("#" + id).html("X");
        setTimeout(function(){
            $("#player").html("O");
        },100);
    } else if (playerNum === 2) {
        playerNum--;
        $("#" + id).html("O");
        setTimeout(function(){
            $("#player").html("X");
        },100);
    }
});