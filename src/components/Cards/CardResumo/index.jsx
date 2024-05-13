import React from 'react';
import PropTypes from 'prop-types';
import { Image, Container } from './style';


export default function CardResumo(props) {
  const { imagemURL, nomeOferta, botao } = props.payload;

  return (
    imagemURL
      ? (<Image src={imagemURL} alt={imagemURL} />)
      : (
        <Container>
          <h1>{nomeOferta}</h1>
          <div>{botao}</div>
        </Container>
      )
  );
}

CardResumo.propTypes = {
  payload: PropTypes.object,
}.isRequired;
