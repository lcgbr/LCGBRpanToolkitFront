import React from 'react';
import PropTypes from 'prop-types';
import { SPACES_OBJECT } from '../../utils/spaces';
import { Container } from './style';


export default function ActivityTitle(props) {
  const { name, quantity, scheduling } = props.payload;

  const isUnifiedView = name.includes('Experiências ativas |') || name.includes('Experiências agendadas | ');
  const numberOfOffers = `${quantity} ${quantity === 1 ? 'Oferta' : 'Ofertas'}`;
  const [mainTitle, ...rest] = name.split(' | ');
  const mBox = SPACES_OBJECT.travaTelas.mBox.toLowerCase();
  const scheduleStatus = scheduling === 'live' ? 'ativas' : 'agendadas';
  let containerWidth = name.toLowerCase().includes(mBox) ? '251px' : '265px';

  if(isUnifiedView) {
    return (
      <Container>
        <h2>{mainTitle.trim()}</h2>
        <p id="unified">{rest.join(' ').trim()}</p>
        <strong>{numberOfOffers}</strong>
      </Container>
    );
  } else {
    return (
      <Container style={{ width: containerWidth, alignSelf: 'flex-end' }}>
        <h2>{`Experiências ${scheduleStatus}`}</h2>
        <p
          id="modular"
          title={name.trim()}
          style={{ minHeight: '26px' }}
        >
          {rest.join(' ').trim()}
        </p>
        <strong>{numberOfOffers}</strong>
      </Container>
    );
  }
}

ActivityTitle.propTypes = {
  payload: PropTypes.object,
}.isRequired;