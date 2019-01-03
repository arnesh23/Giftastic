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
    makeButton(buttons);
  }); 
}

//make a button for the search query and list the buttons..
function makeButton(buttons){
    
    var body = $("body");
    var btns = body.find("#buttons");
    btns.empty();

    for(var i = 0; i < buttons.length; i++){
        var newButton = $("<button>");
        newButton.addClass('gif-button');
        newButton.attr('data-gif', buttons[i])
        newButton.text(buttons[i]);
        btns.append(newButton);
    }


}



//on button click call the api to get the images



// render 10 images to the webpage.