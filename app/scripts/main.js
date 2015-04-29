
function prepareList() {
  $('#expList').find('li:has(ul)')
  	.click( function(event) {
  		if (this == event.target) {
  			$(this).toggleClass('expanded');
  			$(this).children('ul').toggle('medium');
  		}
  		return false;
  	})
  	.addClass('collapsed')
  	.children('ul').hide();
  };

  $(document).ready( function() {

      prepareList();
  });
$("#header-logo").click(function(){
  $("body").toggleClass("small");
});

$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
        $(this).find('i').toggleClass('fa-angle-left fa-angle-right');

});

////see more /full screen toggle
$("#toggle-top button").click(function(e) {
        e.preventDefault();
        $("header").toggleClass("toggle-top");

        $("#wrapper").toggleClass("slide-up");

        $(this).html($(this).text() == 'Full Screen' ? 'See More' : 'Full Screen');

});

$(".sidebar-nav-links a").click(function(e) {


        $(this).children().addClass('sidebar-active-tab')
         .parent().siblings().find('.sidebar-active-tab').removeClass('sidebar-active-tab');

});



$( '#manifest-select-all' ).click( function () {
   $( '#receive-manifest-table input[type="checkbox"]' ).prop('checked', this.checked)
 });

 $('#app-login-button').click(function(e) {
   e.preventDefault();

});

$('.archive_month ul').hide();



///drop down menu
$('.dropdown-menu li').on('click', function() {
    $('#dropdown_title').html($(this).find('a').html());
    });

  $('.dropdown-menu li').on('click', function() {
        $('#find-wo').html($(this).find('a').html());
        });

////action buttons go default///
        $("#Finish-Repair-Button").click(function(e) {
          e.preventDefault();
       $(this).addClass("action-disabled");
       $(this).removeClass("btn-primary");
        });

///////accordion


(function($) {

        var allPanels = $('.update-work-order-body > section > dd')

      //  var allTiles = $('.update-work-order-body > section > dt > a > .tiles').fadeIn();

        $('.update-work-order-body> section > dt > h3 > i').click(function() {
  $(this).parent().parent().next().toggle();
   $(this).toggleClass('fa-minus-circle fa-plus-circle');

          return false;

        });
      })(jQuery);
