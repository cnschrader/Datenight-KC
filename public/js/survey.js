$(function() {
  var url = window.location.search;
  var userID;
  if (url.indexOf("?user_id=") !== -1) {
    userID = url.split("=")[1];
  }
  $(".survey-form").on("submit", function(event) {
    event.preventDefault();
    var newSurvey = {
      sportsRank: $("#sportsRank").val().trim(),
      musicRank: $("#musicRank").val().trim(),
      comedyRank: $("#comedyRank").val().trim(),
      museumRank: $("#museumRank").val().trim(),
      moviesRank: $("#moviesRank").val().trim(),
      animalsRank: $("#animalsRank").val().trim(),
      activeRank: $("#activeRank").val().trim (),
      outdoorRank: $("#outdoorRank").val().trim(),
      shoppingRank: $("#shoppingRank").val().trim(),
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
          newSurvey.sportsRank + "sports",
          newSurvey.musicRank + "music",
          newSurvey.comedyRank + "comedy",
          newSurvey.museumRank + "museum",
          newSurvey.moviesRank + "movies",
          newSurvey.animalsRank + "animals",
          newSurvey.activeRank + "active",
          newSurvey.outdoorRank + "outdoor",
          newSurvey.shoppingRank + "shopping",
        ];
        var userUpdate = {
          scores: newScoreArray.sort(),
          id: userID
        }
        $.ajax({
          method: "PUT",
          url: "/api/users",
          data : userUpdate
        }).then(
          function() {
            console.log(data);
        }
      );
    } else {
      alert("Please make sure that all questions are answered.")
    }
  });
});