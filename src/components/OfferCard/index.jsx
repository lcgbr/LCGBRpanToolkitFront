import React from 'react';
import PropTypes from 'prop-types';
// import '../../styles/App.css';
import { CardContainer, CardContent } from './style';

export default function OfferCard(props) {
  const { payload } = props.offer.details.content;

  const title = payload.titulo || payload.title;
  const subtitle = payload.subtitulo || payload.description;
  const cardButton = payload.botao || payload.button;
  const hasAllContent = title && subtitle && cardButton;

  return (
    <CardContainer>
      {payload.imagemURL
        ? (
          <img className="imagem" src={payload.imagemURL} alt="Descrição da imagem" />
        ) : (
          <CardContent>
            {title && <p className={hasAllContent ? 'strong-wrap' : 'soft-wrap'}>{title}</p>}
            {subtitle && <p className={hasAllContent ? 'strong-wrap' : 'soft-wrap'}>{subtitle}</p>}
            {cardButton && <p>{cardButton}</p>}
          </CardContent>
        )}
    </CardContainer>
  );
}

OfferCard.propTypes = {
  offer: PropTypes.object,
}.isRequired;
