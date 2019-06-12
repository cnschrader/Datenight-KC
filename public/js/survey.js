var url = window.location.search;
var userID =url.split("=")[1];
$(function() {

  $("#survey-form").on("submit", function(event) {
    event.preventDefault();
    var sports = $("[name=sportsVal]:checked").val();
    console.log("sports" + sports);
    var newScoreArray = [
      $("[name=sportsVal]:checked").val(),
      $("[name=musicVal]:checked").val(),
      $("[name=comedyVal]:checked").val(),
      $("[name=museumVal]:checked").val(),
      $("[name=moviesVal]:checked").val(),
      $("[name=animalsVal]:checked").val(),
      $("[name=activeVal]:checked").val(),
      $("[name=outdoorsVal]:checked").val(),
      $("[name=shoppingVal]:checked").val(),
    ];
    newScoreArray.sort();

    $.ajax({
      type: "PUT",
      url: "/api/users/"+ userID,
      data : JSON.stringify(newScoreArray)
    }).then(
      function() {
        console.log("yoyo");
    });
  });
});