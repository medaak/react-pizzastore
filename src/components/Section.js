// Importer React et Compoenent de la lib react
// Créer un composant en classe ES6 nommé 'Section' extend de Component
// Ce composant doit etre exporté par default
// Ce composant doit retourner un tag html section avec un id qui doit contenir une props styleID
// Dans ce tag section il doit y avoir un <h2 className="titleSection"></h2> puis {this.props.children}
// Le tag H2 doit avoir comme innerHTML un props sectionTitle

import React, { Component } from "react";

export default class Section extends Component {
    render(){

        return (
            <section id={this.props.styleId}>
                <h2 className="titleSection"> {this.props.sectionTitle}</h2>
                {this.props.children}
            </section>
  );
}

};
