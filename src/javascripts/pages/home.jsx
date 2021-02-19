/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Hero from "../../javascripts/components/hero";
import About from "../../javascripts/components/about";
import Brands from "../../javascripts/components/brands";
import Categories from "../../javascripts/components/categories";
import Footer from "../../javascripts/components/footer";
import { formatMoney } from "../utils/utitls";

import close from "../../images/close.svg";

const Home = () => {
  const [products, setProducts] = useState("");
  const [moreItems, setMoreItems] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);
  const fetchApi = async () => {
    try {
      const response = await fetch(
        "https://602f087f4410730017c5182b.mockapi.io/teste-front-end/junior/ninja-som/lista-produtos/products"
      );
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi().then((response) => {
      setProducts(response);
    });
  }, []);

  const selectItem = (item) => {
    setIsModal(true);
    setItemSelected(item);
  };

  const renderContent = () => {
    return (
      <div className="modal-content">
        <img src={itemSelected.photo} alt="" />
        <div className="modal-content-info">
          <h2>{itemSelected.productName}</h2>
          <h3>R$ {formatMoney(itemSelected.price)}</h3>
          <p>{itemSelected.descriptionShort}</p>
          <button
            className="modal-content-info-button__details"
            onClick={() => setMoreItems(true)}
          >
            Veja mais detalhes do produto
          </button>
          <button
            className="modal-content-info-button__cart"
            onClick={() => setMoreItems(true)}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="page">
      <Hero />
      <Categories />
      <section id="instrumentsHighlights" className="instrumentsHighlights">
        <article className="instrumentsHighlights-content limit-grid">
          <h2 className="instrumentsHighlights-content__title">
            Instrumentos <strong>DESTAQUE</strong>
          </h2>
          <h3 className="instrumentsHighlights-content__subtitle">
            It is a long established fact that a reader will be distracted by
            the readable
          </h3>
          <div className="instrumentsHighlights-content-list">
            {products &&
              products.map((item, index) => {
                if (moreItems) {
                  return (
                    <button
                      key={item.productName}
                      className="instrumentsHighlights-content-list-item"
                      onClick={() => selectItem(item)}
                    >
                      <img src={item.photo} alt="" />
                      <h2>{item.productName}</h2>
                      <p>{item.descriptionShort}</p>
                      <h3>R$ {formatMoney(item.price)}</h3>
                    </button>
                  );
                } else {
                  if (index < 8) {
                    return (
                      <button
                        key={item.productName}
                        className="instrumentsHighlights-content-list-item"
                        onClick={() => selectItem(item)}
                      >
                        <img src={item.photo} alt="" />
                        <h2>{item.productName}</h2>
                        <p>{item.descriptionShort}</p>
                        <h3>R$ {formatMoney(item.price)}</h3>
                      </button>
                    );
                  }
                }
              })}
          </div>
          {!moreItems && (
            <button
              className="instrumentsHighlights-content__button"
              onClick={() => setMoreItems(true)}
            >
              VER MAIS
            </button>
          )}
        </article>
      </section>
      <Brands />
      <About />
      <Footer />
      {isModal && (
        <div className="modal">
          <div className="modal-wrapper">
            <button
              type="button"
              className="modal-close__btn"
              onClick={() => setIsModal(false)}
            >
              <img src={close} alt="" />
            </button>
            {renderContent()}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Home);
