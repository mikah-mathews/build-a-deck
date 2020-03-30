$(document).ready(function() {
  var suits = ["clubs", "spades", "diamonds", "hearts"];
  var ranks = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

  suits.forEach(function(suit) {
    ranks.forEach(function(rank, suits) {
      $(".content").append(rank + " of " + suit + "<br>");
    });
  });

});