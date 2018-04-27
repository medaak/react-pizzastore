// Importer React de la lib react
// Créer un composant fonctionel sous forme de fontion nommé Header avec
// props comme param.
// Le composant doit retourner un titre H2 à l'aide de props
// Exporter le composant Header

import React, { Component } from "react";

const Header = props => {
  return <h2>&#127829; {props.title} &#127829;</h2>;
};

export default Header;
