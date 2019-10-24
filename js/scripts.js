$(document).ready(function() {
  $("button.submit").click(function(event){
    $(".survey").hide();
    event.preventDefault();
      var favFood = parseInt($('input:radio[name=fav-food]:checked').val());
      var favHair = parseInt($('input:radio[name=fav-hair]:checked').val());
      var favActivity = parseInt($('input:radio[name=fav-activity]:checked').val());
      var hairFoodTotal = favFood + favHair;
      if (hairFoodTotal < 3 && favActivity === 1) {
        $('#gosling').show();
      } else if (hairFoodTotal >= 3 && favActivity >= 2) {
        $('#spears').show();
      } else if (hairFoodTotal >= 3 && favActivity === 1) {
        $('#gomez').show();
      } else {
        $('#lonely').show();
      }
    });
    $("button.restart").click(function(event){
    location.reload();
    });
  });
