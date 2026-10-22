const btnGenerate : HTMLButtonElement = document.getElementById('btn-generate') as HTMLButtonElement;
const btnValidate : HTMLButtonElement = document.getElementById('btn-validate') as HTMLButtonElement;

btnGenerate.addEventListener('click', () => {
    window.location.href="generate.html";
});

btnValidate.addEventListener('click', () => {
    window.location.href="validate.html";
});

