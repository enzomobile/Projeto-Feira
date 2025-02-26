function altoContraste() {
    //Seleciona todas as divs com a classe .container
    const containers = document.querySelectorAll('.container');
    const botao = document.getElementById('altoContraste');

    //Verifica se alguma das divs já tem a classe alto-contraste
    const jaAltoContraste = Array.from(containers).some(container =>
        container.classList.contains('alto-contraste')
    );

    if (jaAltoContraste) {
        //Se o modo já estiver ativado, desativa o alto contraste
        containers.forEach(container => {
            container.classList.remove('alto-contraste');
            const texto = container.querySelector('.texto');
            if (texto) texto.classList.remove('alto-contraste');
        });
        botao.textContent = 'Ativar Alto Contraste';
    } else {
        //Se o modo não estiver ativado, ativa o alto contraste
        containers.forEach(container => {
            container.classList.add('alto-contraste');
            const texto = container.querySelector('.texto');
            if (texto) texto.classList.add('alto-contraste');
        });
        botao.textContent = 'Desativar Alto Contraste';
    }
}