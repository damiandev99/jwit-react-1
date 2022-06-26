import React from "react";
// ? Traemos el component Icono del archivo que se creo, con toda su configuracion previa, y aqui creamos la base del componente que es el div que contendra a los demas componentes
import Icono from './icono';
import Body from './body';
import styled from "styled-components";


// Creamos una constante basada en styled y su metodo div y le damos las propiedades dentro de esos caracteres especia;es
const Container = styled.div`
    width: 350px;
    height: 80px;
    
      /* Hacemos que el display sea flex para que se distribuya el contenido en columna, es decir en lado horizontal */
    display: flex;
      /* Damos la direccion del flex al div para que este sea en row y no en column (para abajo) */
    flex-direction: row;
    margin-top: 15px;
    
`
// Hacemos que la funcion flecha reciba parametros para que estos envien los datos al icono ya renderizado
const App = (params) => {
  return (
    <Container>
      {/* Llamamos al icono, es decir al componente que fue creado e importado arriba y lo renderizamos aca */}
      <Icono icon={params.icon} colorIcon={params.colorIcon}/>
      <Body/>
    </Container>
  );
};

export default App;