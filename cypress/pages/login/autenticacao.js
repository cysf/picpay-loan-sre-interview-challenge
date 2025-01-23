class Autenticacao {

    // Método para interceptar a requisição de autenticação e fazer o mock da resposta
    interceptarAutenticacao() {
        cy.intercept('POST', 'https://api.picpay.com/loan-nc-auth-lp/auth', {
            statusCode: 201,
            body: {
                "externalId": "dae0dc21-9161-4f3f-b9f8-08a13420c742",
                "phones": [
                    "(**) *****-8007"
                ]
            },
        }).as('authOk');

        cy.wait('@authOk');
    }

    // Método para validar a área de SMS
    validarAreaSMS() {
        cy.get('p.font-normal')
          .should('be.visible')
          .contains('Insira o código de 5 dígitos enviado para');

        cy.screenshot('sms');
    }

    // Método para validar a mensagem de código enviado via SMS
    validarMensagemCodigo() {
        cy.get('p')
            .should('be.visible')
            .contains('Código válido por');
    }

    // Método para preencher o código SMS
    preencherCodigoSMS(codigo) {
        cy.get('input[name="cod1"]')
            .type(codigo);
    }

    // Método para clicar no botão Acessar da tela de SMS
    clicarBotaoAcessar() {
        cy.get('button')
            .contains('Acessar')
            .click();
    }

    // Método para validar a mensagem de erro ao preencher o código SMS inválido
    validarMensagemErro() {
        cy.get('#mat-mdc-error-0')
            .should('be.visible')
            .contains('Código não reconhecido. Digite novamente.');

        cy.screenshot('erro');
    }
}

export default new Autenticacao();