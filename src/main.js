import { nanoid } from 'nanoid'
import copy from 'clipboard-copy'

import './style.css'

const passwordBtnEl = document.querySelector('button')
const displayPasswordEl = document.querySelector('h2')

// gerador de senha
passwordBtnEl.addEventListener('click', () => {
    const randomPassword = nanoid()
    displayPasswordEl.innerHTML = randomPassword
})

// copia a senha
displayPasswordEl.addEventListener('click', (event) => {
    copy(event.target.innerHTML)
    const alertEl = document.createElement('div');
    alertEl.classList.add('custom-alert');
    alertEl.innerHTML = 'Senha copiada!';
    document.body.appendChild(alertEl);
    setTimeout(() => {
        document.body.removeChild(alertEl);
    }, 1000);
});