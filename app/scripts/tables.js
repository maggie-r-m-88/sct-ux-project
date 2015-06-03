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

$("th").click(function(){

   $(this).find('i').toggleClass('fa-sort-desc fa-sort-asc');


});


///checkbox editable text

function divClicked() {
    var divHtml = $(this).html();
    var editableText = $("<input id=" + "changeInput" + "/>");
    editableText.val(divHtml);
    $(this).replaceWith(editableText);
    editableText.focus();
    // setup the blur event for this new textarea
    editableText.blur(editableTextBlurred);
}

function editableTextBlurred() {
    var html = $(this).val();
    var viewableText = $("<div id=" + "changedInput" + "/>");
    viewableText.html(html);
    $(this).replaceWith(viewableText);
    // setup the click event for this new div
    viewableText.click(divClicked);
}



$(".checkbox").change(function() {
    if(this.checked) {

         $("#partQuantity").click(divClicked);



    }

});
