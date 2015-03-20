$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
        $(this).find('i').toggleClass('fa-angle-left fa-angle-right');

});
$(".sidebar-nav-links a").click(function(e) {


        $(this).children().addClass('sidebar-active-tab')
         .parent().siblings().find('.sidebar-active-tab').removeClass('sidebar-active-tab');

});

$("#expand-parts-table").click(function() {
    $("#parts-table").toggle();
    $(this).find('i').toggleClass('fa-minus-circle fa-plus-circle');
});


$("#expand-status-info-table").click(function() {
    $("#status-info-table").toggle();
    $(this).find('i').toggleClass('fa-minus-circle fa-plus-circle');
});
