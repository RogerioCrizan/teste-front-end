import React from "react";

import catGuitarra from "../../images/categorias/guitarra.png";
import catMicrofones from "../../images/categorias/microfones.png";
import catCabos from "../../images/categorias/cabos.png";
import catTeclado from "../../images/categorias/teclado.png";
import catViolao from "../../images/categorias/violao.png";
import catBateria from "../../images/categorias/bateria.png";
import mixing from "../../images/banners/mixing.png";
import guitar from "../../images/banners/guitar.png";

const imagemCategorias = [
  {
    image: catGuitarra,
    subtitle: "GUITARRAS",
  },
  {
    image: catMicrofones,
    subtitle: "MICROFONES",
  },
  {
    image: catCabos,
    subtitle: "MESA DE SOM",
  },
  {
    image: catTeclado,
    subtitle: "TECLADOS",
  },
  {
    image: catViolao,
    subtitle: "VIOLÃO",
  },
  {
    image: catBateria,
    subtitle: "BATERIAS",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="categories">
      <div className="categories-clients">
        {imagemCategorias &&
          imagemCategorias.map((item) => (
            <div className="categories-clients-components">
              <img className="categories-client__img" src={item.image} alt="" />
              <h2>{item.subtitle}</h2>
            </div>
          ))}
      </div>
      <div className="banners">
        <img className="banners-mixing" src={mixing} />
        <div className="banners__img-one">
          <h2>NOVIDADES</h2>
          <span className="banners_img-two__bar"></span>
          <h3 className="banners__img-one__audio">ÁUDIO</h3>
          <h4>PROFISSIONAL</h4>
          <button className="botao-confira">Confira</button>
        </div>
        <img className="banners-guitar" src={guitar} />
        <div className="banners__img-two">
          <h2>NOVIDADES</h2>
          <span className="banners_img-two__bar"></span>
          <h3 className="banners__img-one__audio">INSTRUMENTOS</h3>
          <h4>MUSICAIS</h4>
          <button className="botao-confira">Confira</button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
