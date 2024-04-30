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

  const separatedTitle = (str) => {
    const regex = /\(.*\)/; // Regex para pegar o conteúdo entre parênteses
    const match = str.match(regex);
    
    if (match) {
      const description = str.replace(match[0], '').trim();
      const datesInfo = match[0].replace(/[()]/g, '').trim();
      return { description, datesInfo };
    } else {
      return { description: str, datesInfo: null };
    }
  };

  return (
    <main className={`main-container ${spaceData.length <= 3 ? 'justify-center' : ''}`}>
      {errorMessage && <p className='token-error'>Ops! Algo deu errado :(<br/>{errorMessage}</p>}
      {isLoading ? <Loading /> : (
        <div className="activity">
          {spaceData.map((activity, index) =>
            <section key={index}>
              <div className="activity-title">
                <h3>{separatedTitle(activity.name).description}</h3>
                <p>{separatedTitle(activity.name).datesInfo}</p>
                <strong>{`${activity.options.length} ${activity.options.length === 1 ? 'Oferta' : 'Ofertas' }`}</strong>
              </div>
              {activity.options.map((offer, idx) => 
                <div className="main-box" key={idx}>
                  <OfferCard offer={offer} priority={activity.priority}/>
                  <InteractionButtons offer={offer} priority={activity.priority}/>
                </div>
              )}
            </section>
          )}
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