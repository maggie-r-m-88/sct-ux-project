$("#lock-search").click(function(e){
  e.preventDefault();
  $(this).find('i').toggleClass('fa-unlock-alt fa-lock');

});

$(".toggler").click(function(e){
  e.preventDefault();
  $(this).find('i').toggleClass('fa-unlock-alt fa-lock');

});


$("#search-popout").click(function(e){
  e.preventDefault();
  $(".search-popout").toggleClass("open-search-popout");
  $("#search-table td").toggleClass("open-search-popout");
  $(this).html($(this).text() == 'Close' ? '<span><i class="fa fa-search"></i></span>' : 'Close');


});

$("#parts-search-popout").click(function(e){
  e.preventDefault();
  $(".parts-search-popout").toggleClass("open-search-popout");
  $("#search-table td").toggleClass("open-search-popout");
  $(this).html($(this).text() == 'Close' ? '<span><i class="fa fa-search"></i></span>' : 'Close');


});

$("#clear-search").click(function(e){
  e.preventDefault();
  $(".cat1 input").val("");

});

$(document).ready(function(){
    $(".toggler").click(function(e){
        e.preventDefault();
        $('.cat'+$(this).attr('data-prod-cat')).toggle();
    });
});

$(document).ready(function(){

  //$('#product-table a:first').tab('show');
$(".page-view").click(function(){

  $("#how-many").html($("#how-many").text() == 'Displaying 1-10 of 10 work orders' ? 'Displaying 1-5 of 10 work orders' : 'Displaying 1-10 of 10 work orders');
  $('.cat'+$(this).attr('data-prod-cat')).toggle();


});
});

$("th").click(function(e){
  e.preventDefault();
  console.log("hey");
   $(this).find('i').toggleClass('fa-sort-desc fa-sort-asc');


});


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
        $("#sidebar-wrapper").toggleClass("slide-up");
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
$('#update-find-wo li').on('click', function() {
  $('#find-wo').html($(this).find('a').html());
  });

  $('#findWO-search-menu li').on('click', function() {

        $('#dropdown_title').html($(this).find('a').html());
        });
$('#queue-input-time li').on('click', function() {
  
    $('#queue-input-dropdown').html($(this).find('a').html());
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

      function updateToggle(){

      $(".search-console-toggle li a").click(function(e) {
              e.preventDefault();

              sister = $(this).parent().siblings();  sisterElem = "#" + sister.attr("id");

              $(this).parent().addClass("current");
              sister.removeClass("current");
              $(this).parent().before($(sisterElem));

             if (sisterElem === "#queue-input"){
              $(".queue-input").addClass("hide-input");
              $(".find-input").removeClass("hide-input");
             } else {  $(".find-input").addClass("hide-input");
              $(".queue-input").removeClass("hide-input");   }


      });
      };


$(document).ready( function() {

  updateToggle();
});

$(".line-graph .panel-heading i").click(function(){

$(this).parents(".line-graph").find(".line-graph-container").toggle();
$(this).toggleClass('fa-minus-circle fa-plus-circle');
});


$(".inbox-size .panel-heading i").click(function(){

$(this).parents(".inbox-size").find(".inbox-size-container").toggle();
$(this).toggleClass('fa-minus-circle fa-plus-circle');
});


$("#expand-parts-table").click(function() {
    $("#parts-table").toggle();
    $(this).find('i').toggleClass('fa-minus-circle fa-plus-circle');
});


$("#expand-status-info-table").click(function() {
    $("#status-info-table").toggle();
    $(this).find('i').toggleClass('fa-minus-circle fa-plus-circle');
});

$( '#messages-select-all' ).click( function () {
   $( '#user-inbox input[type="checkbox"]' ).prop('checked', this.checked)
 });
///pie chart svg

(function ($, document) {
  $.fn.easyaspie = function () {
    var	size	= parseInt(this.data('size')),
    radius	= size / 2,
    value	= parseInt(this.data('value'));

    // pie all the things!
    if (this.length > 1){
      this.each( function() {
        $(this).easyaspie();
      });
      return this;
    }
    //only numbers here
    if (isNaN(value)) {
      return this;
    }

    // set the size of this
    this.css({
      height: size,
      width: size
    }).addClass('pie-sliced');

    // make value behave
    value = Math.min(Math.max(value, 0), 100);
    // make some svg
    this.pie = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    if (value >= 100) {
      this.pie.slice = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      this.pie.slice.setAttribute('r', radius);
      this.pie.slice.setAttribute('cx', radius);
      this.pie.slice.setAttribute('cy', radius);

    } else {
      this.pie.slice = document.createElementNS("http://www.w3.org/2000/svg", "path");

      //calculate x,y coordinates of the point on the circle to draw the arc to.
      var x = Math.cos((2 * Math.PI)/(100/value));
      var y = Math.sin((2 * Math.PI)/(100/value));

      //should the arc go the long way round?
      var longArc = (value <= 50) ? 0 : 1;

      var d = "M" + radius + "," + radius + " L" + radius + "," + 0 + ", A" + radius + "," + radius + " 0 " + longArc + ",1 " + (radius + y*radius) + "," + (radius - x*radius) + " z";
      this.pie.slice.setAttribute('d', d);
    }
    //add the slice to the pie.
    $(this.pie.slice).appendTo(this.pie);

    // add the pie to this
    $(this.pie).appendTo(this);

    return this;
  };

  $('.pie-sm').easyaspie();
  $('.pie-lg').easyaspie();
  $('.pie-md').easyaspie();
})(jQuery, document);

$(function() {
   $( ".line-graph" ).draggable();
   $(".inbox-size").draggable();
 });
