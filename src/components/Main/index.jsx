import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../OfferCard';
import InteractionButtons from '../InteractionButtons';
import Loading from '../Loading';

import '../../styles/App.css';

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
    <main className={`main-container ${spaceData.length <= 3 ? 'justify-center' : ''}`}>
      {errorMessage && <p className='token-error'>Ops! Algo deu errado :(<br/>{errorMessage}</p>}
      {isLoading ? <Loading /> : (
        <div className="activity">
          {spaceData.map((activity, index) => {
            const {mainTitle, audienceSection, dateSection } = splitTitleString(activity.name);
            const numberOfOffersText = `${activity.options.length} ${ activity.options.length === 1 ? 'Oferta' : 'Ofertas'}`;
            return (
              <section key={index}>
                <div className="activity-title">
                  <h3>{mainTitle}</h3>
                  <p>{dateSection}</p>
                  {audienceSection && (<p>{audienceSection}</p>)}
                  <strong>{numberOfOffersText}</strong>
                </div>
                {activity.options.map((offer, idx) => 
                  <div className="main-box" key={idx}>
                    <OfferCard offer={offer} priority={activity.priority}/>
                    <InteractionButtons offer={offer} priority={activity.priority}/>
                  </div>
                )}
              </section>
            );
          })}
        </div >
      )}
    </main>
  );
}

Main.propTypes = {
  errorMessage: PropTypes.string,
  isLoading: PropTypes.bool,
  spaceData: PropTypes.array,
}.isRequired;