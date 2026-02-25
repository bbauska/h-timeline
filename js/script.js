/* js/script.js of h-timeline.bauska.org */
jQuery(".timeline").click(function (e) {
  e.preventDefault();
  if (jQuery(this).hasClass("slide-open")) {
    jQuery(this).addClass("slide-open");
  } else if (!jQuery(this).hasClass("slide-open")) {
    jQuery(".timeline").removeClass("slide-open");
    jQuery(this).addClass("slide-open");
  }
});
