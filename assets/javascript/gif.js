//on Submit click add the search query to buttons array

var buttons = [];       //buttons stores gif search strings

clicksubmit();

function clicksubmit(){

    $('#gifsearchsubmit').on("click",function(page) {
    page.preventDefault();
    var gifButton = $("#gifsearch").val()
    console.log(gifButton);
    buttons.push(gifButton)
    console.log(buttons);
  }); 
  
}



//make a button for the search query and list the buttons..




//on button click call the api to get the images



// render 10 images to the webpage.