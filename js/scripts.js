// business logic
function ticket(movie, age, time) {
  this.movie = movie;
  this.age = age;
  this.time = time;
}

ticket.prototype.ticketPrice = function() {
  var price;
  if (age === "12 or under") {
    price = 500;
  } else if (age === "12 to 55") {
    price = 10;
  } else {
    price = 8;
  }
  if (time < 17) {
    return (price - 2);
  } else if ((time > 17) && (time < 19)){
    return (price + 3);
  } else {
    return price;
  }
}

// front end logic
$("form#tickets").submit(function(event) {
  event.preventDefault();

  var time = parseInt($('#time').val());
  var age = $('#age').val();

});
