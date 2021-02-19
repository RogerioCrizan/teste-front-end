import React, { Component } from 'react';
import Glide from "@glidejs/glide";

import arrowLeft from "../../images/brands/arrow-left-blue.svg";
import arrowRight from "../../images/brands/arrow-right-blue.svg";
import boss from "../../images/brands/boss.svg";
import roland from "../../images/brands/roland.svg";
import shure from "../../images/brands/shure.svg";
import surface1 from "../../images/brands/surface1.svg";

const bullets = [];

const slides = [
  {
    image: boss,
    title: 'boss',
  },
  {
    image: roland,
    title: 'roland',
  },
  {
    image: shure,
    title: 'shure',
  },
  {
    image: surface1,
    title: 'surface1',
  },
  {
    image: boss,
    title: 'boss',
  },
  {
    image: roland,
    title: 'roland',
  },
  {
    image: shure,
    title: 'shure',
  },
  {
    image: surface1,
    title: 'surface1',
  },
];

class Brands extends Component {
  componentDidMount() {
    new Glide(".brands__carousel", {
      perView: 4,
      type: "carousel",
    }).mount();
  }

  render() {
    return (
      <section id="brands" className="brands">
        <div className="brands-title">
          <h2>AS <strong>MELHORES</strong> MARCAS</h2>
          <p>It is a long established fact that a reader will be distracted by the readable</p>
        </div>
        <div className="container-brands">
          <div className="glide brands__carousel">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {slides &&
                  slides.map((item, index) => {
                    bullets.push(index);
                    return (
                      <li className={`glide__slide`}>
                          <figure className={`brands-figure ${item.title}`}>
                            <img
                              className="brands-figure__img"
                              src={item.image}
                              alt=""
                            />
                          </figure>
                        </li>
                    );
                  })}
              </ul>
              <div class="glide__arrows" data-glide-el="controls">
                <button
                  class="glide__arrow glide__arrow--right"
                  data-glide-dir=">"
                >
                  <img src={arrowRight} alt="" />
                </button>
                <button
                  class="glide__arrow glide__arrow--left"
                  data-glide-dir="<"
                >
                  <img src={arrowLeft} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Brands;
