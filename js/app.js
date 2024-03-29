$(document).ready(function () {


    $('#submit').click(function (e) {
        e.preventDefault();
        // highlight the button
        // not AJAX, just cool looking


        // the AJAX part
        var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        var animal = $("#search").val();
        var flickrOptions = {
            tags: animal,
            format: "json"
        };

        function displayPhotos(data) {
            var photoHTML = '<ul>';
            $.each(data.items, function (i, photo) {
                photoHTML += '<li class="grid-25 tablet-grid-50">';
                photoHTML += '<a href="' + photo.link + '" class="image">';
                photoHTML += '<img src="' + photo.media.m + '"></a></li>';
            }); // end each
            photoHTML += '</ul>';
            $('#photos').html(photoHTML);
        }
        $.getJSON(flickerAPI, flickrOptions, displayPhotos);

    }); // end click

}); // end ready