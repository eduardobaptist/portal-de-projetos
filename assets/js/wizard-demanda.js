// ------------step-wizard-------------
$(document).ready(function () {
    $('.nav-tabs > li a[title]').tooltip();
    
    //Wizard
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

        var target = $(e.target);
    
        if (target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var active = $('.wizard .nav-tabs li.active');
        active.next().removeClass('disabled');
        nextTab(active);

    });
    $(".prev-step").click(function (e) {

        var active = $('.wizard .nav-tabs li.active');
        prevTab(active);

    });
});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}

$('.nav-tabs').on('click', 'li', function() {
    $('.nav-tabs li.active').removeClass('active');
    $(this).addClass('active');
});

$('.nav-tabs a').on('click', function(){
    var currentAttrValue = $(this).attr('href');
    $('.tab-pane').removeClass('active show');
    $(currentAttrValue).addClass('active show');
    $('.nav-tabs .nav-link').removeClass('active');
    $(this).addClass('active');
  });

//   // Handle next button click
//   $('.next').on('click', function(){
//     var currentTab = $('.nav-tabs .nav-link.active');
//     var nextTab = currentTab.parent().next('li').find('.nav-link');
//     if (false) {
//       nextTab.click();
//     }
//   });

//   // Handle previous button click
//   $('.prev').on('click', function(){
//     var currentTab = $('.nav-tabs .nav-link.active');
//     var prevTab = currentTab.parent().prev('li').find('.nav-link');
//     if (prevTab.length > 0) {
//       prevTab.click();
//     }
//   });

