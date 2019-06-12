$(function() {
    let width = 98.9
    let speed = 1500
    let pause = 4000
    
    let curSlide = 1
    let interval
    
    let $sliderContainer = $(".slider")
    
    startSlider();

    $(".prev").click(function() {
        clearInterval(interval)

        if (curSlide == 1){
            $sliderContainer.animate({'margin-left': '-=' + width*3 + 'vw'}, speed, function() {
                curSlide = 4
            })
        }
        else {
            $sliderContainer.animate({'margin-left': '+=' + width + 'vw'}, speed, function() {
                curSlide--
            })
        }

        startSlider()
    })

    $(".next").click(function() {
        clearInterval(interval)

        if (curSlide == 4) {
            $sliderContainer.animate({'margin-left': '0vw'}, speed, function() {
                curSlide = 1
            })
        }
        else {
            $sliderContainer.animate({'margin-left': '-=' + width + 'vw'}, speed, function() {
                curSlide++
            })
        }

        startSlider()
    })

    function startSlider() {
        interval = setInterval(function() {
            $sliderContainer.animate({'margin-left': '-=' + width + 'vw'}, speed, function() {
                curSlide++
                if (curSlide > 4) {
                    curSlide = 1
                    $sliderContainer.css('margin-left', '0vw')
                }
            })
        }, pause)
    }
})