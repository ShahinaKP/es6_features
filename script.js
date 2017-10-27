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
}

var employeeData;
getFeedEmployees = () => {
    $.getJSON('employees.json', (data) => {
        employeeData = data;
        let names = employeeData.map(key => key.name);

        $('.feed-list').empty();
        for (let value of names) {
            let item = document.createElement('li');
            item.appendChild(document.createTextNode(value));
            $('.feed-list').append(item);
        }
    })
}

getFeedSeniorEmployees = () => {
    $('.feed-list').empty();
    let seniors = employeeData.filter(key => (key.desig == 'Senior Engineer'));
    let names = seniors.map(key => key.name);
    
    for (let value of names) {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(value));
        $('.feed-list').append(item);
    }
}

getFeedLeadEmployees = () => {
    $('.feed-list').empty();
    let leads = employeeData.filter(key => (key.desig == 'Lead Engineer'));
    let names = leads.map(key => key.name);
    
    for (let value of names) {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(value));
        $('.feed-list').append(item);
    }    
}

getFeedAvailableEmployees = () => {
    $('.feed-list').empty(); 
    let available = employeeData.filter(key => (!key.projects));
    
    let names = available.map(key => key.name);
    
    for (let value of names) {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(value));
        $('.feed-list').append(item);
    }   
}






