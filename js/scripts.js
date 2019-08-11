window.onload = function(e){

    
    var form = document.querySelector('#form');
    var inputsContainer = document.querySelector('.inputs');
    var inputs = document.querySelectorAll('.inputs input');


    form.onsubmit = function(){

        var error = false;

        for (i = 0; i < inputs.length; i++) {
            if (inputs[i].value == '') {
                error = true;
                inputs[i].classList.add('errorInput');
            } else {
                inputs[i].classList.remove('errorInput');
            }
        }

        if (error) {
            event.preventDefault();

            if (!(document.querySelector('.form-alert'))) {
                var formAlert = document.createElement('p');
                formAlert.classList.add('form-alert');
                formAlert.innerHTML = 'Заполните все поля!';
                inputsContainer.append(formAlert);
            }
        }
    };
};