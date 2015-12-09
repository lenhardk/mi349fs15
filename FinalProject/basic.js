$(".box").click( function() {
  $(this).toggleClass("activate");
});

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == null || x == "") {
    alert("Please enter a Valid E-mail!");
    return false;
} else {
    alert("Thank You for Subscribing!")
  }
}
