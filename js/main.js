function resizeJax() {
    // source: https://stackoverflow.com/a/47802319
    $('.MJXc-display').each(function(i, val) {
        var w = val.children[0].offsetWidth;
        var W = val.offsetWidth;
        if (w > W) {
            var currSize = val.style.fontSize.toString();
            if (currSize.length > 0 && currSize.slice(-1) == '%') {
                currSize = currSize.substring(0, currSize.length - 1);
                currSize = parseFloat(currSize) / 100;
            } else {
                currSize = 1;
            }
            val.style.fontSize = currSize * 95 * W / w + '%';
        }
    });
}

// source: https://stackoverflow.com/a/18765281
var mjaxURL = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML';
$.getScript(mjaxURL, function() {
    // MathJax has been loaded
    MathJax.Hub.Queue(resizeJax);

    var timeout;
    window.addEventListener('resize', function() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            resizeJax();
        }, 1000);
    });
});
