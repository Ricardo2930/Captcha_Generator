const captchaText = document.querySelector('.captcha-text')
const captchaInput = document.querySelector('.input-captcha')

const checkCaptchaBtn = document.querySelector('.check-btn')
const generateCaptchaBtn = document.querySelector('.generate-btn')

const messageCaptcha = document.querySelector('.message')

const captchaCharacter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const generateCaptcha = () => {
    captchaText.innerHTML = ''
    //creo un bucle for para max. 6 valores aleatorios del array captchaCharacter
    for (let i = 0; i < 6; i++) {
        //creo un random para tener un numero aleatorio de la longitud de captchaCharacter
        let random = Math.floor(Math.random() * captchaCharacter.length)
        //Agrego a la const captchaText los valores obtenidos del captchaCharacter[random] segun las vueltas del bucle
        captchaText.innerHTML += captchaCharacter[random] + ' '
    }
    //El valor del input Captcha se reinicia vacio
    captchaInput.value = ''
    //El mensaje Captcha se reinicia vacio
    messageCaptcha.innerHTML = ''
}
generateCaptcha();
generateCaptchaBtn.addEventListener('click', generateCaptcha)

const checkCaptcha = () => {
    //creo dos variables para poder comparar el captcha generado con el ingresado
    const enteredCaptcha = captchaInput.value;
    const generatedCaptcha = captchaText.innerText
    if (enteredCaptcha.replaceAll(' ', '') == generatedCaptcha.replaceAll(' ', '')) {
        //mensaje si el captcha generado es igual al ingresado
        messageCaptcha.innerHTML = '<i class="fa-solid fa-circle-check"></i> Captcha matched. You are not a robot'
        messageCaptcha.style.color = 'white'
    } else {
        //mensaje si el captcha generado es diferente al ingresado
        messageCaptcha.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Captcha not matched. please try again!'
        messageCaptcha.style.color = 'red'
    }
}
checkCaptchaBtn.addEventListener('click', checkCaptcha)
