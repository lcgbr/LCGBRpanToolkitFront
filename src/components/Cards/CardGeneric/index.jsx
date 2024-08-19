import React from 'react';
import PropTypes from 'prop-types';
import icons from '../../../assets';
import { Container } from './style';


export default function CardToast(props) {
  const { titulo, subtitulo, botao, textoTitulo, textoDescricao, textoBotao } = props.payload.offerDetails.content.payload;

  return (
    <Container >
      <h1>{titulo || textoTitulo}</h1>
      <h2>{subtitulo || textoDescricao}</h2>
      <div>
        <p>{botao || textoBotao}</p>
        <img src={icons.rightArrow} alt="Ícone de uma seta apontando para a direita" />
      </div>
    </Container>
  );
}

CardToast.propTypes = {
  payload: PropTypes.object,
}.isRequired;
