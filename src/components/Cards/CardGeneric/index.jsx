import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';


export default function CardToast(props) {
  const { titulo, subtitulo, botao } = props.payload;

  return (
    <Container >
      <h1>{titulo}</h1>
      {subtitulo && <h2>{subtitulo}</h2>}
      <div>{botao}</div>
    </Container>
  );
}

CardToast.propTypes = {
  payload: PropTypes.object,
}.isRequired;
