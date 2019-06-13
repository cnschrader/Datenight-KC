var url = window.location.search;
var userID = url.split("=")[1];
console.log(userID)
$(function() {
  var suggestionsArray = [];
  var testArray = [];
  //   "9sports",
  //   "8shopping",
  //   "7music",
  //   "7animals",
  //   "6museum",
  //   "6movies",
  //   "5active",
  //   "4outdoor",
  //   "1comedy"
  // ]
  function displayResults() {
    if (suggestionsArray.length > 0){
      let card = $("<div>");
        card.addClass("card resCard");
        card.attr("data-name", `${suggestionsArray[0].name}`);
        card.attr("data-description", `${suggestionsArray[0].description}`);
        card.attr("data-img", `${suggestionsArray[0].IMG}`);
        card.attr("data-link", `${suggestionsArray[0].link}`);

        let cardHeader = $("<div>").addClass("card-header");
        cardHeader.text(suggestionsArray[0].name);

        let cardBody = $("<div>").addClass("card-body");
        cardBody.html(`<img src="${suggestionsArray[0].IMG}" class="img-fluid mx-auto d-block">`);

        card.append(cardHeader, cardBody);
        $("#result1").append(card);

    console.log(suggestionsArray[0].name);
    console.log(suggestionsArray[0].description);
    console.log(suggestionsArray[0].IMG);
    console.log(suggestionsArray[0].link);
    suggestionsArray.splice(0, 1);
    } else {
      netflixAndChill();
    }
  };
  function netflixAndChill() {
    //Clear everything and apologize for being unable to help
    let noResult = $("<p>");
      noResult.text("Sorry, we are unable to find a good event for you.  Maybe Netflix and Chill?");
      $(".netflix").append(noResult);
  }
  //This request gets all recommendations from the database,
  //THEN it compares them to the user's scores to sort the in order of appeal
  $.get("/api/users/" + userID, function (data){
    var result = data.scores.replace(/[{}":]+/g, "")
    testArray = result.split(',');
    $.get("/api/recommendations", function(res) {
      // console.log("res[0]" + res[0].name)
      for(var i = 0; i < testArray.length; i++) {
        for(var j = 0 ; j < res.length; j++) {
          if (testArray[i].substring(1) === res[j].category){
            suggestionsArray.push(res[j]);
          };
        };
      };
    }).then(
      function() {
      console.log("suggestionsArray = " + suggestionsArray)
      displayResults();
    });
  });

  $(".get").on("click", function (event) {
    event.preventDefault();

    displayResults();
  });

});