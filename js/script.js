// yoda

// $(".text_process").click(function(){

//     $.ajax({
//         url: 'https://yoda.p.mashape.com/yoda?sentence=', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
//         type: 'GET', // The HTTP Method
//         data: {sentence: $("#yoda_input").val()}, // Additional parameters here
//         datatype: 'json',
//         success: function (data) {
//             $("#output").html(data);
//         },
//         error: function (err) {
//             alert(err);
//         },
//         beforeSend: function (xhr) {
//             xhr.setRequestHeader("X-Mashape-Key", "GDf6bxPUe5mshZkCs6PCt3qAPoYPp1CvcVDjsnxkdfZnkinAY6"); // Enter here your Mashape key
//         }
//     });

// });

// InstaTunes Pluggin:

$(".text_process").click(function(){

    $.ajax({
        url: 'https://instatunes.p.mashape.com/search', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
        type: 'GET', // The HTTP Method
        data: {sentence: $("#tunes_input").val()}, // Additional parameters here
        datatype: 'json',
        success: function (data) {
            $("#output").html(data);
        },
        error: function (err) {
            alert(err);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "GDf6bxPUe5mshZkCs6PCt3qAPoYPp1CvcVDjsnxkdfZnkinAY6"); // Enter here your Mashape key
        }
    });

});

// search bar

 function sendToPage(){
                var input = document.getElementById("search").value;
                 //alert(input);
                if (input == "moonshine stalkers"){
                    location.href = "search.html";
                    return false;
                }
                else if (input == "moonshine stalkers"){
                    location.href = "search.html";
                    return false;
                }
                else {
                    alert('Invalid Input.');
                }
                    }

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// spotify Patel's code.
// ----------------------------

// var queryURL = "https://api.spotify.com/v1/search?q=" + artist + "&type=artist";
//         $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
//             // Prints the entire object to console
//             console.log(response);

