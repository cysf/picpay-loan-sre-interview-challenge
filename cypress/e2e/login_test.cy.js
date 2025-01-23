import Login from '../pages/login/login';
import Autenticacao from '../pages/login/autenticacao';

describe('Meus Empréstimos PicPay', () => {
  it('Verifica tela inicial', () => {
    Login.visitarPaginaLogin();

    Login.preencherCpf('49344698007');

    Login.clicarBotaoAcessar();

    Autenticacao.interceptarAutenticacao();

    Autenticacao.validarAreaSMS();
  })

  it('Verifica tela de SMS mensagem de erro', () => {
    Login.visitarPaginaLogin();

    Login.preencherCpf('49344698007');

    Login.clicarBotaoAcessar();

    Autenticacao.interceptarAutenticacao();

    Autenticacao.validarMensagemCodigo();

    Autenticacao.preencherCodigoSMS('12345');

    Autenticacao.clicarBotaoAcessar();

    Autenticacao.validarMensagemErro();
  })
})