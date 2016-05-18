$(function() {
        // custom checkbox
        var l = $('.js-checkbox-wrap input');
        for (var i = l.length - 1; i >= 0; i--) {
            $(l[i]).prettyCheckable();
        }

        //
        $('.basic').fancySelect();

        //
        $('.dropdown').hover(
            function() {
                $(this).children('.sub-menu').stop(false, false).slideDown(400);
            },
            function() {
                $(this).children('.sub-menu').stop(false, false).slideUp(400);
            }
        );
    //END OF DROPDOWN MENU
        
       
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();

    })
