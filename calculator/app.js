let heldValue = null;
let heldOperation = null;
let nextValue = null;

function showValue(location, value) {
    if(value === null) 
        $(location).text('')
    else
        $(location).text(Number(value))
}

function updateDisplay() {
    showValue('.held-value', heldValue)
    showValue('.next-value', nextValue)
}

function clearAll() {
    nextValue = null;
    heldValue = null;
    heldOperation = null;
    updateDisplay()
}

function clearEntry() {
    nextValue = null;
}

function add(x, y) {
    return Number(x) + Number(y)
}

function subtract(x,y) {
    return Number(x) - Number(y)
}

function multiply(x,y) {
    return Number(x) * Number(y)
}

function divide(x,y) {
    let res = null
    if(x != '0' && y === '0') 
        res = 'INFINITY'
    else 
        res = Number(x)/Number(y)
    return res
}

function setHeldOperation(operation) {
    let res = null;
    if(heldOperation !== null) {
        heldValue = heldOperation(heldValue,nextValue);
    }
    else if(nextValue !== null) {
        heldValue = nextValue;
    }

    nextValue = null;
    heldOperation = operation;
}

$('.digits button').click(function() {
    if(nextValue === null) 
        nextValue =  '0';
    nextValue = nextValue + $(this).text()
    updateDisplay();
})


$('.add').click(function() {
    setHeldOperation(add)
    $('.next-operation').text('+');
    updateDisplay()
})

$('.subtract').click(function() {
    setHeldOperation(subtract)
    $('.next-operation').text('-');
    updateDisplay()
})

$('.multiply').click(function() {
    setHeldOperation(multiply)
    $('.next-operation').text('x');
    updateDisplay()
})

$('.divide').click(function() {
    setHeldOperation(divide)
    $('.next-operation').text('/');
    updateDisplay()
})

$('.equals').click(function() {
    setHeldOperation(null)
    $('.next-operation').text('');
    updateDisplay()
})

$('.clear-all').click(function() {
    clearAll()
    $('.next-operation').text('')
    updateDisplay()
})

$('.clear-entry').click(function() {
    clearEntry()
    updateDisplay()
})