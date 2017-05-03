$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var desInput = $("input#num").val();
    var dateInput = $("input#age").val();
    var timeInput = $("input#place").val();

    $(".name").text(nameInput);
    $(".num").text(desInput);
    $(".age").text(dateInput);
    $(".place").text(timeInput);

    $("#voter").show();

    event.preventDefault();
  });
});
