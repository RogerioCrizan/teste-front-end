import React, { Component } from "react";
import PropTypes from "prop-types";
import Glide from "@glidejs/glide";

import arrowLeft from "../../images/hero/arrow-left.svg";
import arrowRight from "../../images/hero/arrow-right.svg";
import imageDesktop from "../../images/bg-slide.png";

const bullets = [1, 2, 3, 4];

const slides = [
  {
    title: "NOVOS PRODUTOS",
    subtitleBold: "INSTRUMENTOS",
    subtitle: "PROFISSIONAIS",
    button: "CONFIRA",
    image: imageDesktop,
  },
  {
    title: "NOVOS PRODUTOS",
    subtitleBold: "INSTRUMENTOS",
    subtitle: "PROFISSIONAIS",
    button: "CONFIRA",
    image: imageDesktop,
  },
  {
    title: "NOVOS PRODUTOS",
    subtitleBold: "INSTRUMENTOS",
    subtitle: "PROFISSIONAIS",
    button: "CONFIRA",
    image: imageDesktop,
  },
  {
    title: "NOVOS PRODUTOS",
    subtitleBold: "INSTRUMENTOS",
    subtitle: "PROFISSIONAIS",
    button: "CONFIRA",
    image: imageDesktop,
  },
];
class Hero extends Component {
  componentDidMount() {
    var bulletCount = document.querySelectorAll("#carousel .glide__slide")
      .length;
    var bulletWrapper = document.getElementById("glide__bullets");

    for (let index = 0; index < bulletCount; index++) {
      const button = document.createElement("button");
      button.className = "glide__bullet";
      button.setAttribute("data-glide-dir", "=" + index);

      bulletWrapper.appendChild(button);
    }

    new Glide(".glide", {
      perView: 1,
      type: "carousel",
    }).mount();
  }

  static propTypes = {
    urlImageMobile: PropTypes.string,
    urlImageDesk: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
  };

  static defaultProps = {
    buttonLabel: "Ver Video",
    descriButton: "Veja mais sobre o Reaqt",
  };

  render() {
    return (
      <section id="hero" className="hero hero--imagem" ref="hero">
        <article className={`hero-slide hero-slide--center hero-slide--imagem`}>
          <div className="glide">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {slides &&
                  slides.map((item, index) => {
                    return (
                      <li className="glide__slide">
                        <figure className="hero-figure">
                          <img
                            className="hero-figure__img"
                            src={item.image}
                            alt=""
                          />
                        </figure>
                        <div className="glide-infos">
                          <h2>{item.title}</h2>
                          <h3>{item.subtitleBold}</h3>
                          <h4>{item.subtitle}</h4>
                          <button>{item.button}</button>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <button
                className="glide__arrow glide__arrow--right"
                data-glide-dir=">"
              >
                <img src={arrowRight} alt="" />
              </button>
              <button
                className="glide__arrow glide__arrow--left"
                data-glide-dir="<"
              >
                <img src={arrowLeft} alt="" />
              </button>
            </div>
            <div
              className="glide__bullets about-glide__bullets"
              data-glide-el="controls[nav]"
            >
              {bullets.map((itemBullet, indexBullet) => (
                <button
                  className="glide__bullet about-glide__bullet"
                  data-glide-dir={indexBullet}
                  key={`about-project-bullet-${indexBullet}`}
                />
              ))}
            </div>
          </div>
        </article>
      </section>
    );
  }
}

export default Hero;
