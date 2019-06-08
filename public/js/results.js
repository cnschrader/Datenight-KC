var url = window.location.search;
var userID;
if (url.indexOf("?user_id=") !== -1) {
  userID = url.split("=")[1];
}
console.log(userID)

$(function() {
  var suggestionsArray = [];
  var testArray = [
    "9sports",
    "8shopping",
    "7music",
    "7animals",
    "6museum",
    "6movies",
    "5active",
    "4outdoor",
    "1comedy"
  ]
  function displayResults() {
    if (testArray.length > 0){
    console.log(suggestionsArray[0].name);
    console.log(suggestionsArray[0].description);
    console.log(suggestionsArray[0].IMG);
    console.log(suggestionsArray[0].link);
    suggestionsArray.splice(0, 1);
    } else {
      netflixAndChill();
    }
  }
  function netflixAndChill() {
    //Clear everything and apologize for being unable to help
  }
  //This request gets all recommendations from the database,
  //THEN it compares them to the user's scores to sort the in order of appeal
  $.get("api/users", function (data){
    testArray = data.scores;
    $.get("api/recommendations", function(res) {
      for(var i = 0; i < testArray.length; i++) {
        for(var j = 0 ; j < res.length; j++) {
          if (testArray[i].substring(1) === res[j].category){
            suggestionsArray.push(res[j]);
          };
        };
      };
      displayResults();
    });
  })

  $(".veto").on("click", function (event) {
    event.preventDefault();

    displayResults();
  });

});