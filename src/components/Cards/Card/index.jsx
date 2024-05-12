import React from 'react';
import PropTypes from 'prop-types';
import { CardContainer, CardContent, ImageContainer, CardTitles } from './style';

export default function Card(props) {
  const { offer, priority } = props;
  const { payload } = props.offer.details.content;

  const title = payload.titulo || payload.title;
  const subtitle = payload.subtitulo || payload.description;
  const cardButton = payload.botao || payload.button;
  const offerName = offer.details.content.payload.nomeOferta || offer.details.content.payload.name;
  const hasAllContent = title && subtitle && cardButton;
  const positionTextInfo = priority ? `Posição: ${offer.position}\nPrioridade: ${props.priority}` : 'Posição';

  return (
    <>
      <CardTitles>
        <p title={offer.audienceDetails.name}><strong>Audiência: </strong>{offer.audienceDetails.name}</p>
        <p title={offerName}><strong>Oferta: </strong>{offerName}</p>
      </CardTitles>
      <CardContainer>
        <span title={positionTextInfo}>{offer.position}</span>
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

Card.propTypes = {
  offer: PropTypes.object,
  priority: PropTypes.number,
}.isRequired;
