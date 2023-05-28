const form=document.getElementById('email_form');
const email=document.getElementById('email_input');

function Error(input,message) {
    input.className='input';
    input.style.borderColor='hsl(0, 100%, 63%)';
    const div_message=input.nextElementSibling;
    div_message.innerText=message;
    div_message.className='errorcolor'
}
function Success(input) {
    input.className='input';
    input.style.borderColor='';
    const div_message=input.nextElementSibling;
    div_message.innerText='';
    div_message.className='successcolor';
}

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function clicking() {
    if(!validateEmail(email.value)) {
        Error(email,'Check your email please');
    } else if(validateEmail2(email2.value)){
        Success(email)
    } else {
        document.querySelector('.input').style.borderColor='';
    }
}
form.addEventListener('submit', function(event) {
    
    event.preventDefault();
    
    if(!validateEmail(email.value)) {
        Error(email,'Check your email please');
    } else {
        Succes(email);
    }
});
