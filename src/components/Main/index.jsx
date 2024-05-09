import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../Card/OfferCard';
import CardButtons from '../Card/CardButtons';
import Loading from '../Loading';

import {
  Error, 
  MainContainer, 
  ActivityGroup, 
  ActivityContainer, 
  ActivityTitle,
  ActivityContent
} from './style';


export default function Main(props) {

  const {
    errorMessage,
    isLoading,
    spaceData,
  } = props;

  const splitTitleString = (titleString) => {
    const titleSections = {
      mainTitle: titleString,
      audienceSection: null,
      dateSection: null
    };

    const regex = /\(.*\)/; // Regex para pegar o conteúdo entre parênteses
    const match = titleString.match(regex);

    if (match) {
      titleSections.mainTitle = titleString.replace(match[0], '').trim();
      titleSections.dateSection = match[0].replace(/[()]/g, '').trim();

    } else if(titleString.includes('|')) {
      const [mainTitle, audienceSection, dateSection = null] = titleString.split(' | ');
      titleSections.mainTitle = mainTitle;
      titleSections.audienceSection = audienceSection;
      titleSections.dateSection = dateSection;
    } 

    return titleSections;
  };

  return (
    <MainContainer justify={spaceData.length <= 3}>
      {errorMessage && <Error>Ops! Algo deu errado :(<br/>{errorMessage}</Error>}
      {
        isLoading ? (
          <Loading />
        ) : (
          <ActivityGroup>
            {spaceData.map((activity, index) => {
              const {mainTitle, audienceSection, dateSection } = splitTitleString(activity.name);
              const numberOfOffersText = `${activity.options.length} ${ activity.options.length === 1 ? 'Oferta' : 'Ofertas'}`;
              return (
                <ActivityContainer key={index}>
                  <ActivityTitle>
                    <h2>{mainTitle}</h2>
                    <p>{dateSection}</p>
                    <p>{audienceSection}</p>
                    <strong>{numberOfOffersText}</strong>
                  </ActivityTitle>
                  {activity.options.map((offer, idx) => 
                    <ActivityContent key={idx}>
                      <OfferCard offer={offer} priority={activity.priority}/>
                      <CardButtons offer={offer} priority={activity.priority}/>
                    </ActivityContent>
                  )}
                </ActivityContainer>
              );
            })}
          </ActivityGroup >
        )
      }
    </MainContainer>
  );
}

Main.propTypes = {
  errorMessage: PropTypes.string,
  isLoading: PropTypes.bool,
  spaceData: PropTypes.array,
}.isRequired;