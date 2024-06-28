import React from 'react';
import PropTypes from 'prop-types';
import { SPACES_OBJECT } from '../../../utils/spaces';
import CardCentralAvisos from '../CardCentralAvisos';
import CardGeneric from '../CardGeneric';
import CardResumo from '../CardResumo';
import CardToast from '../CardToast';
import { CardContent, CardTitles } from './style';


export default function Card(props) {
  const { offer, activity } = props;
  const { audienceDetails, position } = offer;
  const { payload } = offer.details.content;

  const offerName = payload.nomeOferta || payload.name;
  const positionTextInfo = activity.priority ? `Posição: ${position}\nPrioridade: ${activity.priority}` : 'Posição';

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
      return (<CardResumo payload={payload} />);

    } else if(name.includes(SPACES_OBJECT.telaCentralAvisos.mBox)) {
      return (<CardCentralAvisos payload={payload} />);

    } else if(isCardToast) {
      return (<CardToast payload={payload} />);

    } else {
      return (<CardGeneric payload={payload} />);
    }
  };

  return (
    <>
      <CardTitles>
        <p title={audienceDetails.name}><strong>Audiência: </strong>{audienceDetails.name}</p>
        <p title={offerName}><strong>Oferta: </strong>{offerName}</p>
      </CardTitles>
      <CardContent>
        <span title={positionTextInfo}>{position}</span>
        {setSpaceTemplate()}
      </CardContent>
    </>
  );
}

Card.propTypes = {
  offer: PropTypes.object,
  activity: PropTypes.object,
}.isRequired;
