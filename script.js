//For arrow function
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

getNumbersGreater = (key = 0) => {
    key = $('.number-input').val();
    $('.number-list').empty();
    let numbersGreaterKey = numbers.filter(number => number > key);
    
    for (let value of numbersGreaterKey) {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(value));
        $('.number-list').append(item);
    }
}

let colors = ["red", "blue", "green"];
var changeColor;
sameColor = (val) => {
    return val = changeColor;
}
changeColors = (key = 'red') => {
    changeColor = $('.color-input').val();
    key = $('.color-input').val();
    $('.color-list').empty();   
    let sameColors = colors.map(sameColor);
    for (let value of sameColors) {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(value));
        $('.color-list').append(item).addClass(value);
    }
    debugger;
}






