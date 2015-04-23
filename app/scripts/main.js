
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
