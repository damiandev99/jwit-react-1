import React from "react";

import styled from "styled-components";

// Creamos una constante basada en styled y su metodo div y le damos las propiedades dentro de esos caracteres especia;es
const Container = styled.div`
  width: 75%;
  padding-left: 25px;
  display: flex;
  /* Distribuimos el contenido como flex */
  flex-direction: column;
  justify-content: center;
  
`;

const Title = styled.p`
  margin: 0px;
  color: #405382;
  font-weight: bold;
  font-size: 15px;
`;

const Descprition = styled.p`
  margin: 0px;
  margin-top: 5px;
  color: #828b92;
  font-size: 14px;
`;

const Enlace = styled.p`
  margin: 0px;
  margin-top: 5px;
  color: #3b8699;
  font-size: 14px;
`;
const App = () => {
  return (
    <Container>
      <Title> Paquete premium</Title>
      <Descprition>Descubre nuevas funciones</Descprition>
      <Enlace>
        Hazte premium
      </Enlace>
    </Container>
  );
};

export default App;
