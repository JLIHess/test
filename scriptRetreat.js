// Code for Registration form funtionality
// function ShowHideDiv(){
//   var fullRetreat = document.getElementById("fullRetreat");
//   var hotelDates = document.getElementById("hotelDates");
//   hotelDates.style.display = fullRetreat.checked ? "block" : "none";
// }






// Code for Countdown functionality
var retreatDate = new Date("AUG 13, 2022 13:40:30").getTime();


var x = setInterval(function() {
    
    var now = new Date().getTime();

    var t = retreatDate - now;
    var days = Math.floor(t / (1000*60*60*24));
    var hours = Math.floor((t % (1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((t % (1000*60*60))/ (1000*60));
    var seconds = Math.floor((t % (1000*60))/ 1000);

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
    
    if (t< 0){
    clearInterval(x);
    document.getElementById("demo").innerHTML = "THE EVENT IS LIVE";
    document.getElementById("day").innerHTML = '0';
    document.getElementById("hour").innerHTML = '0';
    document.getElementById("minute").innerHTML = '0';
    document.getElementById("second").innerHTML = '0';
    }
}, 1000);

// Form won't be able to submit unless all answers are valid
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()







