import React from 'react';
import PropTypes from 'prop-types';
import { SPACES_OBJECT } from '../../../utils/spaces';
// import CardCentralAvisos from '../CardCentralAvisos';
import CardTravaTelas from '../CardTravaTelas';
import CardGeneric from '../CardGeneric';
import CardResumo from '../CardResumo';
import CardToast from '../CardToast';
import icons from '../../../assets';
import { CardContent, CardTitles, TypeContainer, QAContainer } from './style';


export default function Card(props) {
  const { offer, activity } = props;
  const { audienceDetails, ordination } = offer;
  const { payload } = offer.offerDetails.content;

  const offerName = payload.nomeOferta || payload.name;
  const ordinationTextInfo = `Posição: ${ordination.position}\nPrioridade: ${ordination.priority}`;

  let cardContainerWidth = activity.name.includes(SPACES_OBJECT.travaTelas.mBox) ? '216px' : '262px';

  const setSpaceTemplate = () => {
    const { name } = activity;

    const isCardResumo = [
      SPACES_OBJECT.dashResumo1.mBox,
      SPACES_OBJECT.dashResumo2.mBox,
      SPACES_OBJECT.dashResumo3.mBox,
      SPACES_OBJECT.homeResumo1.mBox,
      SPACES_OBJECT.homeResumo2.mBox,
      SPACES_OBJECT.homeResumo3.mBox,
    ].some((space) => name.includes(space));
    
    const isCardToast = [
      SPACES_OBJECT.modalHomeCartaoProd.mBox,
      SPACES_OBJECT.modalHomeContaProd.mBox,
    ].some((space) => name.includes(space));
    
    if(isCardResumo) {
      return (<CardResumo payload={offer} />);

      // } else if(name.includes(SPACES_OBJECT.telaCentralAvisos.mBox)) {
      //   return (<CardCentralAvisos payload={offer} />);

    } else if(name.includes(SPACES_OBJECT.travaTelas.mBox)) {
      return (<CardTravaTelas payload={offer} />);

    } else if(isCardToast) {
      return (<CardToast payload={offer} />);

    } else {
      return (<CardGeneric payload={offer} />);
    }
  };

  const setBackgroundColorForType = (type) => {
    if(type === 'xt') return '#963484';
    if(type === 'ab') return '#3A7D44';
    return '#1a1a1a';
  };

  const isQA = (audienceDetails.name.toLowerCase().includes('target qa')) ||
    ([2437296, 2143318, 2565598, 2544056, 2567469, 2571312, 2583493, 2582484, 2616969].includes(audienceDetails.id));

  const qualityAssurance = {
    isQA,
    title: 'Oferta em validação ou testes',
    alt: 'Ícone de um balão Erlenmeyer, um recipiente utilizado em laboratórios químicos',
    blackIconSrc: icons.QA,
    whiteIconSrc: icons.whiteQA,
  };

  return (
    <>
      <CardTitles style={{ width: cardContainerWidth }}>
        <p title={audienceDetails.name}><strong>Audiência: </strong>{audienceDetails.name}</p>
        <p title={offerName}><strong>Oferta: </strong>{offerName}</p>
      </CardTitles>
      <CardContent>
        <div>
          <TypeContainer title={offer.experience.name} $typeColor={setBackgroundColorForType(offer.type.activity)}>
            {offer.type.activity.toUpperCase()}
          </TypeContainer>
          <span title={ordinationTextInfo}>{ordination.priority}</span>
          {qualityAssurance.isQA && <QAContainer title={qualityAssurance.title}>
            <img src={qualityAssurance.whiteIconSrc} alt={qualityAssurance.alt}/>
          </QAContainer>}
        </div>
        {setSpaceTemplate()}
      </CardContent>
    </>
  );
}

Card.propTypes = {
  offer: PropTypes.object,
  activity: PropTypes.object,
}.isRequired;
