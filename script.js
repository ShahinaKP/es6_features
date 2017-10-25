var colors = [ "red", "green", "blue", "grey" ];

$( document ).ready(function() { 
    $('#array-list li').each(function (i) {
        $(this).append(colors[i]);
    });
});

foreachClick = () => {
    colors.forEach(sameColor);
    $('#foreach-list li').each(function (i) {
        $(this).append(colors[i]);
    });
}

sameColor = (val) => {
    val = "red";
    console.log(val)
}


mapClick = () => {
    var capitalizedColors = colors.map(changeColor);
    $('#map-list li').each(function (i) {
        $(this).append(capitalizedColors[i]).addClass('red');
    });
}

changeColor = (val) => {
    return val = "red";
}

filterClick = () => {
    var filterColors = colors.filter(filterColor);
    $('#map-list li').each(function (i) {
        $(this).append(filterColors[i]).addClass('red');
    });
}

filterColor = (val) => {
    return val == "red";
}


  
