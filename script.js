addEventListener('load', login);

function login() {
    const form = document.querySelector('.auth-form-header')

    const empresa = document.createElement('button')
    empresa.textContent = 'Empresa' // nome da empresa
    empresa.classList.add('button')

    const pessoal = document.createElement('button')
    pessoal.textContent = 'Pessoal' // Mude se quiser
    pessoal.classList.add('button')

    empresa.addEventListener('click', () => {
        document.querySelector('#login_field').value = 'empresa@gmail.com' //  Email comporativo
        document.querySelector('#password').value = 'senha123' // Senha corporativa
    })

    pessoal.addEventListener('click', () => {
        document.querySelector('#login_field').value = 'pessoal@gmail.com' // Email pessoal
        document.querySelector('#password').value = 'senha123' // Senha Pessoal
    })

    form.appendChild(empresa)
    form.appendChild(pessoal)
    
}