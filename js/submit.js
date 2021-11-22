const $form = document.querySelector('#form');
const $buttonMailto = document.querySelector('#send');


$form.addEventListener("submit", envioMail);

function envioMail(event) {
    event.preventDefault();
    const form = new FormData(this);
    console.log(form.get("nombre"));
    $buttonMailto.setAttribute("href", 'mailto:ayelenleclerc@gmail.com? subject=${form.get("nombre") ${form.get("email")}}&body=${form.get("mensaje")}');
    $buttonMailto.click();

}