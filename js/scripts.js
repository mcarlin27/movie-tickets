// business logic
function Ticket(name, time) {
  this.movieName = name;
  this.age = [];
  this.time = time;
  this.price;
}

Ticket.prototype.ticketPrice = function(age) {
  ageArray = this.age;
  ageArray.forEach(function(age) {
    var price;
    if (age === 1) {
      price = 500;
    } else if (age === 2) {
      price = 10;
    } else {
      price = 8;
    }

    if (time < 17) {
      price = price - 2;
    } else if ((time > 17) && (time < 19)){
      price = price + 3;
    }
    this.price += price;
  });
  console.log(this.price);
}

// front end logic
$(document).ready(function() {
  $("#add-ticket").click(function() {
    $(".new-input").append('<div class="form-group">' +
                              '<label for="age">Additional Ticket Age:</label>' +
                              '<select class="age">' +
                                '<option value="1">12 or under</option>' +
                                '<option value="2">12 to 55</option>' +
                                '<option value="3">55+</option>' +
                                '<option value="4">Miltary Discount</option>' +
                              '</select>' +
                            '</div>')
  });

  $("form#tickets").submit(function(event) {
    event.preventDefault();
    var name = $('#movie').val();
    var time = parseInt($('#time').val());
    var age = parseInt($('.age').val());
    var myMovie = new Ticket(name, time);
    $('#ticket-price').text(myMovie.price);
    $('#result').show();
    $('.age').each(function(){
      myMovie.age.push(age);
    });
    myMovie.ticketPrice();
    console.log(myMovie);
    debugger;



  });

});
