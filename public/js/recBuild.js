$(function() {

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newRec = {
      name: $("#recName").val().trim(),
      description: $("#recDescription").val().trim(),
      IMG: $("#recIMG").val().trim(),
      link: $("#recLink").val().trim(),
      category: $("#recCategory").val().trim(),

    };
    if (
      newRec.name !== "" 
      && newRec.description !== "" 
      && newRec.IMG !== "" 
      && newRec.link !== ""
      && newRec.category !== "") {
      $.ajax("/api/recommendations", {
        type: "POST",
        data: newRec
      }).then(
        function() {
        console.log(newRec);
        location.reload();
        }
      );
    } else {
      alert("The Entry is not complete")
    }
  });
});
