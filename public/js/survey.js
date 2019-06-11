$(function() {
  var url = window.location.search;
  var userID;
  if (url.indexOf("?user_id=") !== -1) {
    userID = url.split("=")[1];
    return userID;
  }
  $("#survey-form").on("submit", function(event) {
    event.preventDefault();
    var sports = $("[name=sportsVal]:checked").val();
    console.log("sports" + sports);
    var newSurvey = {
      sportsRank: $("[name=sportsVal]:checked").val(),
      musicRank: $("[name=musicVal]:checked").val(),
      comedyRank: $("[name=comedyVal]:checked").val(),
      museumRank: $("[name=museumVal]:checked").val(),
      moviesRank: $("[name=moviesVal]:checked").val(),
      animalsRank: $("[name=animalsVal]:checked").val(),
      activeRank: $("[name=activeVal]:checked").val(),
      outdoorRank: $("[name=outdoorsVal]:checked").val(),
      shoppingRank: $("[name=shoppingVal]:checked").val(),
    };
    
    if (
      newSurvey.sportsRank !== "" &&
      newSurvey.musicRank !== "" &&
      newSurvey.comedyRank !== "" &&
      newSurvey.museumRank !== "" &&
      newSurvey.moviesRank !== "" &&
      newSurvey.animalsRank !== "" &&
      newSurvey.activeRank !== "" &&
      newSurvey.outdoorRank !== "" &&
      newSurvey.shoppingRank !== ""
      ) {
        var newScoreArray = [
          newSurvey.sportsRank,
          newSurvey.musicRank,
          newSurvey.comedyRank, 
          newSurvey.museumRank,
          newSurvey.moviesRank,
          newSurvey.animalsRank,
          newSurvey.activeRank,
          newSurvey.outdoorRank,
          newSurvey.shoppingRank, 
        ];
        console.log("newScoreArray" + newScoreArray)
        console.log("userID" + userID)
        var userUpdate = {
          scores: newScoreArray.sort(),
          id: userID
        }
        $.ajax({
          method: "PUT",
          url: "/api/users/"+ userID,
          data : newScoreArray
        }).then(
          function() {
            console.log("yoyo");
        }
      );
    } else {
      alert("Please make sure that all questions are answered.")
    }
  });
});