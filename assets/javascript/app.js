
function countDown(secs, elem) {
    var element = document.getElementById(elem);
    element.innerHTML = "You have " + secs + " seconds left to finish";
    if (secs < 1) {
        clearTimeout(timer);
        element.innerHTML = "<h2>Times Up!!</h2>";
    }
    secs--;
    var timer = setTimeout('countDown(' + secs + ',"' + elem + '")', 1000);
}

countDown(60, "counter");


