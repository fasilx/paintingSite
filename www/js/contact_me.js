$(function() {

   
$("#submit").click(function() {

var name = $("#name").val();
var email = $("#email").val();
var message = $("#message").val();
var data = {name: name, email: email, message: message}

$("#returnErrorMessage").empty(); // To empty previous error/success message.
// Checking for blank fields.
if (name == '' || email == '' || message == '') {
    $("#returnErrorMessage").append("Please Fill Required Fields");
}
else if(!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ){
    $("#returnErrorMessage").append("This is not a valid email");
}
else {
    // console.log(data)
    $.ajax({
           url: 'https://peopler.firebaseio.com/LandingPageMessages.json',
           type: 'POST',
           data: JSON.stringify(data),
           success: function(data) {
                $("#returnmessage").append(data); // Append returned message to message paragraph.
                $("#form")[0].reset(); // To reset form fields on success.
                $("#returnGoodMessage").append("Thanks For the message, We will be in touch");
                setTimeout(function(){
                    $("#returnGoodMessage").empty();
                }, 5000)
           },
           error: function(error){
            console.log(error)
           }
    })

}

});



});
