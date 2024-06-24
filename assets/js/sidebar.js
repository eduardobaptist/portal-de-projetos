$("#toggle-btn").on("mouseover", () => {
  if (!$("#sidebar").hasClass("expanded")) {
    $("#sidebar").addClass("expanded");
    if (window.matchMedia("(min-width: 768px)").matches) {
      $(".wrapper").css({
        "margin-left": "200px",
      });
    }
  }
});

$("#toggle-btn").on("click", () => {
  if ($("#sidebar").hasClass("expanded")) {
    $("#sidebar").removeClass("expanded");
    $(".wrapper").css({
      "margin-left": "0px",
    });
  } else {
    $("#sidebar").addClass("expanded");
    if (window.matchMedia("(min-width: 768px)").matches) {
      $(".wrapper").css({
        "margin-left": "200px",
      });
    }
  }
});

$("#sidebar").on("mouseleave", () => {
  $("#sidebar").removeClass("expanded");
  if (window.matchMedia("(min-width: 768px)").matches) {
    $(".wrapper").css({
      "margin-left": "0px",
    });
  }
});
