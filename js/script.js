
// Set the date we're counting down to
var countDownDate = new Date("may 23, 2021 1:36:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("day").innerHTML = days ;
  document.getElementById("hour").innerHTML= hours ;
  document.getElementById("minute").innerHTML=minutes;
  
  document.getElementById("second").innerHTML= seconds ;
  + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



// Upload file
function uploadFile() {

  var files = document.getElementById("file").files;

  if(files.length > 0 ){

     var formData = new FormData();
     formData.append("file", files[0]);

     var xhttp = new XMLHttpRequest();

     // Set POST method and ajax file path
     xhttp.open("POST", "ajaxfile.php", true);

     // call on request changes state
     xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

          var response = this.responseText;
          if(response == 1){
             alert("Upload successfully.");
          }else{
             alert("File not uploaded.");
          }
        }
     };

     // Send request with data
     xhttp.send(formData);

  }else{
     alert("Please select a file");
  }

}