import React from "react";
import axios from "axios";
import Header from "./components/Header.js";
import Order from "./components/Order.js";
import Product from "./components/Product.js";
import Section from "./components/Section.js";
import "./App.css";

// Importer Header, Section, Product, Order
// Importer le fichier samplePizzas et nommé le Pizzas

class App extends React.Component {
  constructor() {
    super();
    // 1 - Déclarer un state a l'aide de this.state = {} avec 2 property pizzas et order, chaque property a pour valeur {}

    this.state = { pizzas: {}, order: {} };
  }

  componentWillMount() {
    axios
      .get("https://salty-basin-91673.herokuapp.com/")
      .then(response => {
        console.log(response);
        let data = response.data.data;
        this.setState({ pizzas: data });
      })
      .catch(error => {
        this.setState({
          error: true
        });
      });
  }

  addOrder = key => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({
      order: order
    });
  };

  removeOrder = key => {
    const order = { ...this.state.order };
    delete order[key];

    this.setState({
      order: order
    });
  };

  render() {
    return (
      <div className="App">
        {/*  2 - Appeler le composant Header et passé lui un title en props et un className="header" */}
        <Header className="header" title="Pizza YoLo" description="miam miam" />
        <section id="container">
          <Section styleId="list" sectionTitle="♨️ Choose your pizza">
            <div className="corner-ribbon top-left sticky red shadow">
              Hot Deals
            </div>
            <ul>
              {Object.keys(this.state.pizzas).map(key => (
                <Product
                  addOrder={this.addOrder}
                  index={key}
                  key={key}
                  size={300}
                  details={this.state.pizzas[key]}
                />
              ))}
              {/* 3 - Créer un loop a l'aide de { Object.keys(this.state.pizzas).map(key => ...) }
                  4 - Ecrire le composant Product a la place des ... dans la loop Object
                   <Product addOrder={this.addOrder} index={key} key={key} size={150} details={this.state.pizzas[key]} /> */}
            </ul>
          </Section>
          <Section styleId="cart" sectionTitle="💵 Order your pizza">
            <div id="order">
              {/* 5 - Déclarer un composant Order 3 props removeOrder, pizzas et order
                  removeOrder est une méthode, pizzas et orders récupèrent leur state respectifs */}
              <Order
                removeOrder="this.removeOrder"
                pizzas="this.state.pizzas"
                order="this.props.order"
              />
              <button
                type="button"
                className="btn btn-success"
                onClick={this.addOrder}
              >
                Commander
              </button>
            </div>
          </Section>
        </section>
      </div>
    );
  }
}

export default App;
