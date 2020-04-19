$(function(){
    //animation for button and line
    $('.btn').click(function(){
        $('.line').css('opacity', '1')
        if ($(this).hasClass('btn-home')){
            var ml = '75px',
                mrle = '0%',
                htext = 'Home';
        }else if($(this).hasClass('btn-about')){
            var ml = '247px',
                mrle = '-16.66%',
                htext = 'About';
        }else if($(this).hasClass('btn-contact')){
            var ml = '420px',
                mrle = '-33.32%',
                htext = 'Contact Me';
        }else if($(this).hasClass('btn-blog')){
            var ml = '598px',
                mrle = '-49.98%',
                htext = 'Blog';
        }

        $('.line').animate({marginLeft: ml});
        $('.body').slideDown(function(){
            $('.home').css('margin-left', mrle);
        });
        $('.heading').text(htext);


    })
})
