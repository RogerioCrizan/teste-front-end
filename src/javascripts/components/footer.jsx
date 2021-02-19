import React, { Component } from 'react';

import insta from '../../images/insta.svg';
import twitter from '../../images/twitter.svg';
import face from '../../images/face.svg';
import payment from '../../images/payment.svg';
import security from '../../images/security.svg';
import econverse from '../../images/econverse.svg';
import vtex from '../../images/vtex.svg';

class Footer extends Component {

  closeNav = () => {
    const body = document.body;
    this.setState({ navActive: false });
    body.classList.remove('nav-active');
    body.classList.remove('no-overflow');
  };

  render() {
    return (
        <section className="footer">
          <div className="footer-container">
            <div className="footer-top limit-grid">
              <ul className="footer-top-items">
                <li className="footer-top-items-item">
                  <div className="footer-top-items-item-block">
                    <div className="footer-top-items-item-block-cont footer-top-items-item-block-cont-institucional">
                      <h2>INSTITUCIONAL</h2>
                      <a href="#">Quem somos</a>
                      <a href="#">Nossas lojas</a>
                    </div>
                    <div className="footer-top-items-item-block-cont footer-top-items-item-block-cont-atendimento">
                      <h2>ATENDIMENTO</h2>
                      <a href="#">fale conosco</a>
                      <a href="#">vendas@ninjasom.com.br</a>
                    </div>
                  </div>
                </li>
                <li className="footer-top-items-item">
                  <div className="footer-top-items-item-block">
                    <div className="footer-top-items-item-block-cont footer-top-items-item-block-cont-suport">
                      <h2>AJUDA E SUPORTE</h2>
                      <a href="#">política de privacidade</a>
                      <a href="#">Política de trocas</a>
                      <a href="#">Prazos de entrega</a>
                      <a href="#">Termos de uso</a>
                    </div>
                    <div className="footer-top-items-item-block-cont footer-top-items-item-block-cont-rede">
                      <img
                        src={insta}
                        alt=""
                      />
                      <img
                        src={twitter}
                        alt=""
                      />
                      <img
                        src={face}
                        alt=""
                      />
                    </div>
                  </div>
                </li>
                <li className="footer-top-items-item">
                  <div className="footer-top-items-item-block">
                    <div className="footer-top-items-item-block-cont footer-top-items-item-block-cont-payment">
                      <h2>FORMAS DE PAGAMENTO</h2>
                      <img
                        src={payment}
                        alt=""
                      />
                    </div>
                    <div className="footer-top-items-item-block-cont footer-top-items-item-block-cont-security">
                      <h2>SEGURANÇA</h2>
                      <img
                        src={security}
                        alt=""
                      />
                    </div>
                  </div>
                </li>
                <li className="footer-top-items-item">
                  <form
                    className="footer-form"
                  >
                    <div className="footer-form-content">
                      <h4 className="footer-form-content-title">Assine nosso <strong>newsletter</strong></h4>
                      <h4 className="footer-form-content-text">E receba novidades e promoções</h4>
                      <input type="text" placeholder="Seu nome" className="footer-form-content__input" id="name" />
                      <input type="text" placeholder="Seu e-mail" className="footer-form-content__input" id="email" />
                      <button type="submit" className="footer-form-content__button">
                        ENVIAR
                      </button>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
            
          </div>
          <div className="footer-bottom">
            <ul className="footer-bottom-limit limit-grid">
              <li>
                <p>NINJA SOM COMÉRCIO DE ELETRÔNICOS LTDA - 2012 - 2019, todos os direitos reservados. Rua Santa Ifigênia, 556 560/562/564 - Santa Efigênia - CEP: 01.207-000 - São Paulo / SP - CNPJ 07.282.516/0001-15</p>
              </li>
              <li>
                <img
                    src={econverse}
                    alt=""
                  />
                  <img
                    src={vtex}
                    alt=""
                  />
              </li>
            </ul>
          </div>
        </section>
    );
  }
}

export default Footer;
