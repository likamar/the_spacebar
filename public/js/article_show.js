jQuery(document).ready(function () {

    jQuery('.js-like-article').on('click', function (event) {
        event.preventDefault();
        console.log('clicked');
        var link = jQuery(event.currentTarget);
        link.toggleClass('fa-heart-o').toggleClass('fa-heart');

        jQuery.ajax({
            method: 'POST',
            url: link.attr('href')
        }).done(function(data){
            jQuery('.js-like-article-count').html(data.hearts);
        })


    })

})