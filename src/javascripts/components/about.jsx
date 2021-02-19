import React, { Component } from "react";

import Glide from "@glidejs/glide";

import arrowLeft from "../../images/brands/arrow-left-grey.svg";
import arrowRight from "../../images/brands/arrow-right-grey.svg";
import boss from "../../images/brands/boss.svg";
import roland from "../../images/brands/roland.svg";
import shure from "../../images/brands/shure.svg";
import surface1 from "../../images/brands/surface1.svg";
import user from "../../images/brands/user-image.svg";

const bullets = [];

const slides = [
  {
    image: user,
    name: "Felipe Salmim",
    job: "Designer",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’",
  },
  {
    image: user,
    name: "Felipe Salmim",
    job: "Designer",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’",
  },
  {
    image: user,
    name: "Felipe Salmim",
    job: "Designer",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’",
  },
];

class About extends Component {
  componentDidMount() {
    new Glide(".about__carousel", {
      perView: 1,
      type: "carousel",
    }).mount();
  }
  render() {
    return (
      <section id="about" className="about limit-grid">
        <div className="about-title">
          <h2>SOBRE NÓS</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here, content
            here’, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for ‘lorem ipsum’ will uncover many web
            sites still in their infancy. Lorem Ipsum as their default model
            text, and a search for ‘lorem ipsum’ will uncover many web sites
            still in their infancy. Lorem Ipsum as their default model text, and
            a search for ‘lorem ipsum’ will uncover many web sites still in
            their infancy.{" "}
          </p>
        </div>
        <div className="about-comments">
          <div className="container-about">
            <div className="glide about__carousel">
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                  {slides &&
                    slides.map((item, index) => {
                      bullets.push(index);
                      return (
                        <li className={`glide__slide`}>
                          <figure className={"about-figure"}>
                            <img
                              className="about-figure__img"
                              src={item.image}
                              alt=""
                            />
                          </figure>
                          <div className="about-info">
                            <h2>{item.name}</h2>
                            <h3>{item.job}</h3>
                          </div>
                          <div className="about-description">
                            <p>{item.description}</p>
                          </div>
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
        </div>
      </section>
    );
  }
}

export default About;
