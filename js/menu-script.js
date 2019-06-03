$(".prev").click(function() {
    var currImg = $(".selected");
    var prevImg = currImg.prev(".slider-content");

    if (prevImg.length) {
        currImg.removeClass("selected");
        prevImg.addClass("selected");
    }
    else {
        var lastImg = currImg.next(".slider-content");

        while (lastImg.next(".slider-content").length) {
            lastImg = lastImg.next(".slider-content");
        }
        
        currImg.removeClass("selected");
        lastImg.addClass("selected");
    }
});

$(".next").click(function() {
    var currImg = $(".selected");
    var nextImg = currImg.next(".slider-content");

    if (nextImg.length) {
        currImg.removeClass("selected");
        nextImg.addClass("selected");
    }
    else {
        var firstImg = currImg.prev(".slider-content");

        while (firstImg.prev(".slider-content").length) {
            firstImg = firstImg.prev(".slider-content");
        }
        
        currImg.removeClass("selected");
        firstImg.addClass("selected");
    }
});