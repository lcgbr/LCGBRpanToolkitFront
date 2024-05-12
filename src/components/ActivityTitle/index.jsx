import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './style';


export default function ActivityTitle(props) {
  const { name, quantity } = props.payload;

  const splitTitleString = (titleString) => {
    const titleSections = {
      mainTitle: titleString,
      audienceSection: null,
      dateSection: null,
      numberOfOffers: `${quantity} ${quantity === 1 ? 'Oferta' : 'Ofertas'}`
    };

    const regex = /\(.*\)/; // Regex para pegar o conteúdo entre parênteses
    const match = titleString.match(regex);

    if (match) {
      titleSections.mainTitle = titleString.replace(match[0], '').trim();
      titleSections.dateSection = match[0].replace(/[()]/g, '').trim();

    } else if (titleString.includes('|')) {
      const [mainTitle, audienceSection, dateSection = null] = titleString.split(' | ');
      titleSections.mainTitle = mainTitle;
      titleSections.audienceSection = audienceSection;
      titleSections.dateSection = dateSection;
    } 

    return titleSections;
  };

  const { mainTitle, audienceSection, dateSection, numberOfOffers } = splitTitleString(name);

  return (
    <Container>
      <h2>{mainTitle}</h2>
      <p>{dateSection}</p>
      <p>{audienceSection}</p>
      <strong>{numberOfOffers}</strong>
    </Container>
  );
}

ActivityTitle.propTypes = {
  payload: PropTypes.object,
}.isRequired;