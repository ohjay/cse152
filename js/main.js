function resizeJax() {
    // source: https://stackoverflow.com/a/47802319
    $('.MJXc-display').each(function(i, val) {
        var w = val.children[0].offsetWidth;
        var W = val.offsetWidth;
        if (w > W) {
            val.style.fontSize = 95 * W / w + '%';
        }
    });
}

// source: https://stackoverflow.com/a/18765281
var mjaxURL = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML';
$.getScript(mjaxURL, function() {
    // MathJax has been loaded
    MathJax.Hub.Queue(resizeJax);
    window.addEventListener('resize', resizeJax);
});
