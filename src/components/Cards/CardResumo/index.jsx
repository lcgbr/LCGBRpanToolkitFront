import React from 'react';
import PropTypes from 'prop-types';
import { Image, Container } from './style';


export default function CardResumo(props) {
  const { imagemURL, nomeOferta, botao } = props.payload.offerDetails.content.payload;
  const lighterImageUrl = imagemURL.split('?')[0];

  return (
    imagemURL
      ? (<Image src={lighterImageUrl} alt={imagemURL} />)
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
