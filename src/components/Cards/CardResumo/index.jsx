import React from 'react';
import PropTypes from 'prop-types';
import { Image } from './style';

export default function CardResumo(props) {
  const { payload } = props.offer.details.content;

  return (
    <Image src={payload.imagemURL} alt="Descrição da imagem" />
  );
}

CardResumo.propTypes = {
  offer: PropTypes.object,
}.isRequired;
