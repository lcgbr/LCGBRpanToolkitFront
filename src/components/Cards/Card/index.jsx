import React from 'react';
import PropTypes from 'prop-types';
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

    if(name.includes('dashResumo') || name.includes('homeResumo')) {
      return (<CardResumo payload={payload} />);

    } else if(name.includes('telaCentralAvisos')) {
      return (<CardCentralAvisos payload={payload} />);

    } else if(name.includes('modalHomeContaProd') || name.includes('Modal Toast - Home Cartao')) {
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
