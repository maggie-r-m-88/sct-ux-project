$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
        $(this).find('i').toggleClass('fa-angle-left fa-angle-right');

});
$(".sidebar-nav-links li").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("sidebar-active-tab");
      //  $(this).find('').toggleClass('fa-angle-left fa-angle-right');

});
