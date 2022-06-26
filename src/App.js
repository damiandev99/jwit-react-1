import React from "react";
// Importamos styled de styled-components para darle estilos a los componentes
import styled from "styled-components";

// Llamamos a la carpeta ComponentA ya que existe un archivo llamado index.js donde esta el componente del icono, esto mas que todo para hacer separado los componentes y tener distribuido todo en orden, para que el cambio posterior sea mas facil hacerlo
import ComponentA from "./ComponenteA";

import premium from "./img/corona.png";
import stranger from "./img/spy.png"

const Container = styled.div``;

const App = () => {
  return (
    <Container>
      {/* Llamamos al componente tal cual lo creamos */}
      <ComponentA icon={premium} colorIcon={"#fff6e5"}/>
      <ComponentA icon={stranger} colorIcon={"#ebfcf1"}/>
      <ComponentA icon={premium} colorIcon={"#f4f2ff "}/>
    </Container>
  );
};

export default App;
