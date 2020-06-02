$(document).ready(initializeApp);

function initializeApp() {
  $(".content").hide();
  displayContent();
}

function displayContent() {
  $(".clickMountain").click(function () {
    $(this).next().slideToggle();
  });
}


let slide = 0;
$(".slides").on("click", function (e) {
    let item = $('.slides').width();
  const curr = $(e.currentTarget).attr("data-attrib");
  if (curr -slide >= 0 ){
      console.log('a')
      item = (curr -slide) * item;
      $('#main').animate({scrollLeft: '+=' + item}, 800);
  } else {
    item = (slide - curr) * item;
    $('#main').animate({scrollLeft: '-=' + item}, 800);
  }
  slide = curr;
  enlarge();
});
function enlarge() {
  $(".slides").removeClass("enlarge");
  $("#main").find(`[data-attrib='${slide}']`).addClass("enlarge");
}
$("#nex").click(function() {
    const item = $('.slides').width();
    $('#main').animate({scrollLeft: '+=' + item}, 800);
});
$("#pre").click(function() {
    const item = $('.slides').width();
    $('#main').animate({scrollLeft: '-=' + item}, 800);
});

$(document).click(function (e) {
  if (
    $(e.target).closest(".slides").length > 0 ||
    $(e.target).closest("#nex").length > 0 ||
    $(e.target).closest("#pre").length > 0
  ) {
    return false;
  } else {
    slide = 0;
    enlarge();
  }
});
