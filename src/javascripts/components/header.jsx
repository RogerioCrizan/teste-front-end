/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

import Scrollable from "../../javascripts/helpers/scrollable";

import logo from "../../images/logo-ninja-som.png";
import headerLock from "../../images/header/lock.svg";
import headerArrow from "../../images/header/arrow.svg";
import headerPercentage from "../../images/header/001-percentage.svg";
import headerDelivery from "../../images/header/002-delivery-truck.svg";
import lupaSeach from "../../images/header/lupa-search.svg";
import wppLogo from "../../images/header/wpp-logo.svg";
import avatar from "../../images/header/avatar.svg";
import bag from "../../images/header/001-shopping-bag.svg";

class Header extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();

    this.state = {
      navActive: false,
      stickyActive: false,
      headerSkinny: [
        {
          title: "COMPRA 100% SEGURA",
          image: headerLock,
        },
        {
          title: "1ª TROCA GRÁTIS",
          image: headerArrow,
        },
        {
          title: "5X SEM JUROS",
          image: headerPercentage,
        },
        {
          title: "ENTREGAS EM TODO O BRASIL",
          image: headerDelivery,
        },
      ],
    };
  }

  handleScroll = (curTop) => {
    let { stickyActive } = this.state;

    if (curTop >= 96 && !stickyActive) {
      stickyActive = true;
    } else if (curTop < 96 && stickyActive) {
      stickyActive = false;
    }

    this.setState({ stickyActive });
  };

  toggleNav = () => {
    const body = document.body;
    let { navActive } = this.state;

    navActive = !navActive;

    this.setState({ navActive });

    if (navActive) {
      body.classList.add("no-overflow");
    } else {
      body.classList.remove("nav-active");
      body.classList.remove("no-overflow");
    }
  };

  closeNav = () => {
    const body = document.body;
    this.setState({ navActive: false });
    body.classList.remove("nav-active");
    body.classList.remove("no-overflow");
  };

  render() {
    const { navActive, stickyActive, headerSkinny } = this.state;
    const classes = ["header"];

    if (navActive) {
      classes.push("header--nav-active");
    }

    if (stickyActive) {
      classes.push("header--sticky");
    }

    return (
      <Scrollable onScroll={this.handleScroll}>
        <header>
          <div className="header-skinny">
            {headerSkinny &&
              headerSkinny.map((item) => (
                <div className="header-skinny-buy">
                  <img className="header-skinny-buy__img" src={item.image} />
                  <h2>{item.title}</h2>
                </div>
              ))}
          </div>
          <div className={classes.join(" ")}>
            <div className={"header-wrapper header-wrapper--black limit-grid"}>
              <h1 className="header-logo">
                <a href="#hero" className="header-logo__btn">
                  <img src={logo} alt="" />
                </a>
              </h1>
              <div className="header-search">
                <input
                  className="header-search__here"
                  type="text"
                  placeholder="BUSQUE AQUI..."
                />
                <img className="header-search__lupa" src={lupaSeach} />
              </div>
              <div className="header-contact-wpp">
                <img className="header-contact__wppLogo" src={wppLogo} />
                <h2>(11) 99999-9999</h2>
              </div>
              <div className="header-contact-avatar">
                <img className="header-contact__avatar" src={avatar} />
                <div className="header-contact__title">
                  <h2>OLÁ, VISITANTE</h2>
                  <h3>MINHA CONTA</h3>
                </div>
              </div>
              <div className="header-cart">
                <img className="header-cart__bag" src={bag} />
                <h2>SEU CARRINHO</h2>
                <h3>0 item (s)</h3>
              </div>
              <div className="header-buttons">
                <button
                  type="button"
                  className="header-button"
                  onClick={this.toggleNav}
                >
                  <span className="header-button-wrapper">
                    <i className="header-button__bar" />
                    <i className="header-button__bar" />
                    <i className="header-button__bar" />
                  </span>
                </button>
              </div>
            </div>
            <div className="header-content">
              <nav className="header-nav">
                <ul className="header-nav-items">
                  <li className="header-nav-item">
                    <a className="header-nav-item__btn">Todas as categorias</a>
                  </li>
                  <li className="header-nav-item">
                    <a className="header-nav-item__btn">Som Profissional</a>
                  </li>
                  <li className="header-nav-item">
                    <a className="header-nav-item__btn">
                      Instrumentos Musicais
                    </a>
                  </li>
                  <li className="header-nav-item">
                    <a className="header-nav-item__btn">Promoções</a>
                  </li>
                  <li className="header-nav-item">
                    <a className="header-nav-item__btn">Contato</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </Scrollable>
    );
  }
}

export default Header;
