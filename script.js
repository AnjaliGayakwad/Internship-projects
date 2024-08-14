function clearScreen() {
    document.getElementById('screen').value = '';
}

function deleteLast() {
    let screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, -1);
}

function appendToScreen(value) {
    document.getElementById('screen').value += value;
}

function calculateResult() {
    let screen = document.getElementById('screen');
    try {
        screen.value = eval(screen.value);
    } catch (e) {
        screen.value = 'Error';
    }
}