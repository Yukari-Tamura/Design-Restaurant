$(document).ready(function() {
    

    var galeria = $('#galeria-carousel');
        galeria.owlCarousel({
            items:4,
            loop:false,
            rewind: true,
            autoWidth:false,
            margin:20,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            responsiveClass:true,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 2
                },
                720: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                },
            }
            
        });


        var popular = $('#popular-carousel');
        popular.owlCarousel({
            items:3,
            loop:false,
            rewind: true,
            autoWidth:false,
            margin:20,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            responsiveClass:true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                720: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                },
            }
            
        });


    });