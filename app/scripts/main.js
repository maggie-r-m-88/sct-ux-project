$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
        $(this).find('i').toggleClass('fa-angle-left fa-angle-right');

});
$(".sidebar-nav-links a").click(function(e) {
      

        $(this).children().addClass('sidebar-active-tab')
         .parent().siblings().find('.sidebar-active-tab').removeClass('sidebar-active-tab');

    //    $(this).addClass("sidebar-active-tab");
      //  $(this).siblings().removeClass('sidebar-active-tab');
      //  $(this).find('').toggleClass('fa-angle-left fa-angle-right');

});
