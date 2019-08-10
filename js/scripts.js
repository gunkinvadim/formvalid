window.onload = function(e){

    
    var form = document.querySelector('#form');
    var inputsContainer = document.querySelector('.inputs');
    var inputs = document.querySelectorAll('.inputs input');


    form.onsubmit = function(){

        for (i = 0; i < inputs.length; i++) {
            if (inputs[i].value == '') {
                event.preventDefault();
                inputs[i].classList.add('errorInput');  
            } else {
                inputs[i].classList.remove('errorInput');
            }
        }

        for (i = 0; i < inputs.length; i++) {
            if (inputs[i].classList.contains('errorInput')) {
                if (document.querySelector('.form-alert')) {
                    break;
                } else {
                    var formAlert = document.createElement('p');
                    formAlert.classList.add('form-alert');
                    formAlert.innerHTML = 'Заполните все поля!';
                    inputsContainer.append(formAlert);
                    break;
                } 
            }
        }
    };

    for (i = 0; i < inputs.length; i++) {
        inputs[i].oninput = function() {
            this.classList.remove('errorInput');
        };
    }
};