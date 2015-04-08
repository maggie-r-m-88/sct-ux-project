

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

});

$(".sidebar-nav-links a").click(function(e) {


        $(this).children().addClass('sidebar-active-tab')
         .parent().siblings().find('.sidebar-active-tab').removeClass('sidebar-active-tab');

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



$( '#manifest-select-all' ).click( function () {
   $( '#receive-manifest-table input[type="checkbox"]' ).prop('checked', this.checked)
 });

 $('#app-login-button').click(function(e) {
   e.preventDefault();

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

$('.archive_month ul').hide();

$(function() {
   $( ".line-graph" ).draggable();
   $(".inbox-size").draggable();
 });
