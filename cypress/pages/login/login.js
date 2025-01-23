class Login {

    // Método para visitar a página de login de meus empréstimos
    visitarPaginaLogin() {
        cy.visit('https://meus-emprestimos.picpay.com/')
    }

    // Método para preencher o campo CPF
    preencherCpf(cpf) {
        cy.get('input[name="cpf"]')
            .type(cpf);
    }

    // Método para clicar no botão Acessar da tela de login
    clicarBotaoAcessar() {
        cy.get('button')
            .contains('Acessar')
            .click();
    }
}

export default new Login();