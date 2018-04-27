import React from "react";

const BtnProduct = props => {
  return (
    <button
      type="button"
      className="btn btn-warning"
      onClick={() => props.addToCard(props.index)}
    >
      Ajouter au panier
    </button>
  );
};

export default BtnProduct;
