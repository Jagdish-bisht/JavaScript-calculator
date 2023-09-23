let string = ''
let button = document.querySelectorAll('.button');

Array.from(button).forEach((button) => {
    button.addEventListener('click', (event) => {
        try {


            if (event.target.innerHTML == 'AC') {
                string = ' ';
                document.querySelector('input').value = string;
            } else
                if (event.target.innerHTML == 'DEL') {
                    string = string.toString().slice(0, -1);
                    document.querySelector('input').value = string;
                }
                else if (event.target.innerHTML == '=') {
                    string = eval(string);
                    document.querySelector('input').value = string;
                }
                else {
                    console.log(event.target)
                    string = string + event.target.innerHTML;
                    document.querySelector('input').value = string;
                }
        }
        catch (error) {
            let content = document.querySelector('.input_container')
            let element = document.createElement('p');
            element.style.cssText = 'text-align: center; color: white; font-size : 15px';
            element.textContent = 'Please Enter valid Syntax !';
            content.appendChild(element);

            setTimeout(() => {
                let child = document.querySelector('p');
                let parent = document.querySelector('.input_container');
                parent.removeChild(child);
                string = '';
                document.querySelector('input').value = string;
            }, 1500);

        }
    })

})