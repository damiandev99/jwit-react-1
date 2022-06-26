// ! Este archivo es el componente icono, es lo mas pequeno de react, un componente

// Importamos styled de styled-components para darle estilos a los componentes
import styled from "styled-components";
import React from "react";



// Creamos una constante basada en styled y su metodo div y le damos las propiedades dentro de esos caracteres especiales
const Container = styled.div`
  width: 25%;
`;

const Body = styled.div`
  background-color: ${props => props.colorIcon};
  width: 100%;
  height: 100%;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icono = styled.img`
  width: 32px;
`;
// Creamos uan constante del componente y este va a recibir un objeto, cuando esta en llaves es un objeto con el fin de hacerlo dinamico cuando creamos mas componentes diferentes
const App = ({icon, colorIcon}) => {
  return (
    <Container>
      {/* Este body es del body del icono, no del contenido que tiene el texto como tal del otro body */}
      <Body colorIcon={colorIcon}>
        {/* Aqui con el componente ya creado usamos la propiedad para el icono y lo llamamos al objeto que tenemos en la ufncion flecha de arriba */}
        <Icono  src={icon} />
      </Body>
    </Container>
  );
};

export default App;
