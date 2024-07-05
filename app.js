const display = document.querySelector("#input-box");
const btn = document.querySelectorAll("button");

let str = '';

btn.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.innerHTML;

        if (buttonValue === 'DEL') {
            str = str.substring(0, str.length - 1);
        } else if (buttonValue === 'AC') {
            str = '';
        } else if (buttonValue === '=') {
            try {
                str = eval(str);
            } catch (error) {
                str = 'Error';
                console.error('Error during evaluation:', error);
            }
        } else {
            str += buttonValue;
        }
        display.value = str;
    });
});
