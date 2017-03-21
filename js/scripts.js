// business logic
function Ticket(name, age, time) {
  this.name = name;
  this.age = age;
  this.time = time;
}

Ticket.prototype.ticketPrice = function(age, time) {
  if (age === "12 or under") {
    this.price = 500;
  } else if (age === "12 to 55") {
    this.price = 10;
  } else {
    this.price = 8;
  }

  if (time < 17) {
    this.price = this.price - 2;
  } else if ((time > 17) && (time < 19)){
    this.price = this.price + 3;
  }
}

// front end logic
$(document).ready(function() {
  $("form#tickets").submit(function(event) {
    event.preventDefault();
    var name = $('#movie').val();
    var time = parseInt($('#time').val());
    var age = $('#age').val();
    var myMovie = new Ticket(name, age, time);
    console.log(myMovie.ticketPrice());
    console.log(myMovie);



  });

});
