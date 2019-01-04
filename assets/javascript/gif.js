
var topics = [];       //buttons stores gif search strings

clicksubmit();
pauseOrPlay();


function clicksubmit() {

    $('#gifsearchsubmit').on("click", function (page) {
        page.preventDefault();
        var gifButton = $("#gifsearch").val()
        console.log(gifButton);
        topics.push(gifButton)
        console.log(topics);
        makeButton(topics);
        apiCall();

    });
}

//make a button for the search query and list the buttons..
function makeButton(topics) {

    var body = $("body");
    var btns = body.find("#buttons");
    btns.empty();

    for (var i = 0; i < topics.length; i++) {
        var newButton = $("<button>");
        newButton.addClass('gif-button');
        newButton.attr('data-gif', topics[i])
        newButton.text(topics[i]);
        btns.append(newButton);
    }
}


//on button click call the api to get the images
function apiCall() {

    var apikey = "AkZAPeakag1ERenkHoC51WIUeZ2JSKyK";

    $('.gif-button').on("click", function (page) {
        var gifButton = $(this).text();
        console.log('gifButton:' + gifButton);
        count = 0;

        var queryURL = "https://api.giphy.com/v1/gifs/random?rating=pg&api_key=" + apikey + "&tag=" + gifButton;


        console.log("Query url" + queryURL)

        //Render 10 Images to the page
        for (var i = 0; i < 10; i++) {
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                count++;
                var imageUrl = response.data.image_original_url;
                var buttonImage = $("<img>")
                buttonImage.attr("src", imageUrl)
                buttonImage.attr("class", "gifimages playing")
                console.log("i:" + count)
                buttonImage.attr("alt", gifButton + "image" + count)
                $("#images").prepend(buttonImage);
                $("#images").prepend("<p id=rating>Rating is pg</p>");
            })
        }
    })

}


//click on the gif to pause of play it
function pauseOrPlay() {

    $('body').on('click', '.gifimages', function () {
        var src = $(this).attr("src");
        console.log(this);
        console.log(src)
        if ($(this).hasClass('playing')) {
            //stop
            $(this).attr('src', src.replace(/\.gif/i, "_s.gif"))
            $(this).removeClass('playing');
        } else {
            //play
            $(this).addClass('playing');
            $(this).attr('src', src.replace(/\_s.gif/i, ".gif"))
        }
    });
}


