import React, { Component } from "react";
import { formatPrice } from "../helpers";

export default class Order extends Component {
  constructor() {
    super();
  }
  renderOrder(key){
    const pizza = this.props.pizzas[key];
    const count = this.props.order[key]
    
    if (!pizza){
      return (
        <li>Pas de pizza ajoutée, veuillez en ajouter une</li>
      )
    }

    return (
      <li key={key}>{count} - {pizza.title} -{" "}
      <a href="#" onClick={()=>this.props.removeOrder(key)} className="badge badge-danger">
        Retirer la pizza
      </a>
      </li>
    )
  }
  render() {

    return Object.keys(this.props.order).map(key => <li>{this.props.order[key]}</li>);
  }
}
