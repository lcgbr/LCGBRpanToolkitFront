import React from 'react';
import PropTypes from 'prop-types';
import { Container, X, Content } from './style';


export default function CardCentralAvisos(props) {
  const {
    imagemURL,
    textoAcessibilidade,
    titulo,
    subtitulo,
    descricao,
    botao,
  } = props.payload;

  const hasError = !(imagemURL && textoAcessibilidade && titulo && subtitulo && descricao && botao);

  return (
    <Container hasError={hasError}>
      <X>x</X>
      <Content>
        <img src={imagemURL} alt={textoAcessibilidade} />
        <section>
          <h1>{titulo}</h1>
          <h2>{subtitulo}</h2>
          <p>{descricao}</p>
        </section>
        <div className="button">{botao}</div>
      </Content>
    </Container>
  );
}

CardCentralAvisos.propTypes = {
  payload: PropTypes.object,
}.isRequired;
