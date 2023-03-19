var calcButtons = document.querySelectorAll('.button');
var displayInput = document.querySelector('.disPlay');
var clearBtn = document.querySelector('.allClear');
var lastNumClear = document.querySelector('.lastNumClear');
var operation = document.querySelector('.operator');
var equalsTo = document.querySelector('.equalsTo');

// ----------------AC Button Function-------------

function clearAll () {
    displayInput.value = "";
}

clearBtn.addEventListener('click', clearAll);


// ----------------DE Button Function-------------

function deleteLastNum () {
    displayInput.value = displayInput.value.toString().slice(0, -1);
}

lastNumClear.addEventListener('click', deleteLastNum)


// ----------------Other Buttons Function-------------

for (let i = 0; i < calcButtons.length; i++) {
    if (calcButtons[i] == ".") {

        displayInput.value = calcButtons[i].value;

    } else {

        calcButtons[i].addEventListener('click', () => {
            displayInput.value += calcButtons[i].value;
        })
    }
}


// ----------------Equal Button Function-------------

function solve () {
    displayInput.value = eval(displayInput.value);

    return
}

equalsTo.addEventListener('click', solve);


