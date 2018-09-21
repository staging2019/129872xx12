$(document).ready(function() {
    var marquee = $('div.marquee');
    console.log(marquee);
    marquee.each(function() {
        var mar = $(this),indent = mar.width();
        mar.marquee = function() {
            indent--;
            mar.css('text-indent',indent);
            if (indent < -1 * mar.children('div.marquee-text').width()) {
                indent = mar.width();
            }
        };
        mar.data('interval',setInterval(mar.marquee,1000/60));
    });
});

var paths = $("path.st0");

var tl = new TimelineMax();
paths.each(function(i, e) {
  e.style.strokeDasharray = e.style.strokeDashoffset = e.getTotalLength();
});
//can be changed to "tl.to" to controle each mask animation
//or make the mask path the same length then the text shows up the same speed
tl.staggerTo(
  paths,
  0.4,
  { strokeDashoffset: 0, stroke: "#fff", strokeWidth: 10 },
  0.2
);
