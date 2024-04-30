import React from 'react';
import PropTypes from 'prop-types';
import { CardContainer, CardContent, ImageContainer, CardTitles } from './style';

export default function OfferCard(props) {
  const { offer } = props;
  const { payload } = props.offer.details.content;

  const title = payload.titulo || payload.title;
  const subtitle = payload.subtitulo || payload.description;
  const cardButton = payload.botao || payload.button;
  const hasAllContent = title && subtitle && cardButton;

  const getOfferName = (offer) => {
    return offer.details.content.payload.nomeOferta || offer.details.content.payload.name;
  };

  return (
    <>
      <CardTitles>
        <p title={offer.audienceDetails.name}><strong>Audiência: </strong>{offer.audienceDetails.name}</p>
        <p title={getOfferName(offer)}><strong>Oferta: </strong>{getOfferName(offer)}</p>
      </CardTitles>
      <CardContainer>
        <span title={
          props.priority ? `Posição: ${offer.position}\nPrioridade: ${props.priority}` : 'Posição'
        }>{offer.position}</span>
        {payload.imagemURL
          ? (
            <ImageContainer space={payload.espaco}>
              <img src={payload.imagemURL} alt="Descrição da imagem" />
            </ImageContainer>
          ) : (
            <CardContent>
              {title && <p className={hasAllContent ? 'strong-wrap' : 'soft-wrap'}>{title}</p>}
              {subtitle && <p className={hasAllContent ? 'strong-wrap' : 'soft-wrap'}>{subtitle}</p>}
              {cardButton && <p>{cardButton}</p>}
            </CardContent>
          )}
      </CardContainer>
    </>
  );
}

OfferCard.propTypes = {
  offer: PropTypes.object,
  priority: PropTypes.number,
}.isRequired;
