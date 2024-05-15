import React from 'react';
import PropTypes from 'prop-types';
import icons from '../../../assets';
import { Container } from './style';


export default function CardToast(props) {
  const { titulo, subtitulo, botao } = props.payload;

  return (
    <Container >
      {titulo && <h1>{titulo}</h1>}
      {subtitulo && <h2>{subtitulo}</h2>}
      <div>
        <p>{botao}</p>
        <img src={icons.rightArrow} alt="Ícone de uma seta apontando para a direita" />
      </div>
    </Container>
  );
}

CardToast.propTypes = {
  payload: PropTypes.object,
}.isRequired;
