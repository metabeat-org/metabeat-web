$(function() {
    // Download Button
    $('#header-download-btn')
    .on("click", "", function () {
        $('#header-download-btn ul').toggleClass('show');
    })
    .on("mouseleave", "", function(){
        $('#header-download-btn ul').removeClass('show');
    });

    // GNB
    $('.navbar-toggler').on("click", "", function(){
        $(this).toggleClass('show');
        $('.header').toggleClass('active'); // Set Header Background Color
        $('.navbar ul').toggleClass('show');
    })

})