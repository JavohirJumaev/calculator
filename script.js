const display = document.getElementById("display");

function add(input){
    display.value += input; // добавляем полученное значение к тому, что уже находится в display
}

function clearDisplay(){
    display.value = ""; // очищаем display
}

function calculate(){
    display.value = eval(display.value); // считаем все значения display
}