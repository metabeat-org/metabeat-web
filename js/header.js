$(function() {

    $('#header-download-btn').click(function () {
        $('#header-download-btn ul').toggleClass('show');
    });
    $('#section-download-btn').click(function () {
        $('#section-download-btn ul').toggleClass('show');
    });

    // Mobile Navigation
    $('.navbar-toggler').click(function () {
        $(this).toggleClass('show');
        $('.header').toggleClass('active'); // Set Header Background Color
        $('.navbar ul').toggleClass('show');
    });
})