import React, { useState } from 'react';
import PropTypes from 'prop-types';
import icons from '../../../assets';

import '../../../styles/App.css';
import { AudienceModal } from './style';


export default function CardButtons(props) {
  const {details, audienceDetails, experienceName } = props.offer;

  const [isVisible, setIsVisible] = useState(false);
  const [modalContent, setModalContent] = useState({...details.content});
  const [modalContentType, setModalContentType] = useState('offer');

  const deeplink = details.content.payload.acao || details.content.payload.deeplink || details.content.payload.linkExterno;

  // const mensagem = 'Não é possível redirecionar. Deeplinks são destinados a abrir aplicativos em dispositivos móveis e não são navegáveis em um web browser padrão';

  const isExternalOrDeepLink = (link) => {
    const regex = /^(http|https):\/\//;
    return regex.test(link);
  };

  const isQA = [2437296, 2143318, 2565598, 2544056, 2567469, 2571312].includes(audienceDetails.id);

  const buttonProps = {
    qa :{
      title: 'QA: Oferta em validação ou testes',
      alt: 'Ícone de um balão Erlenmeyer, um recipiente utilizado em laboratórios químicos',
      src: icons.QA,
    },
    json: {
      title: 'Ver conteúdo do JSON',
      alt: 'Ícone de um sinal de reticências entre chaves. {...}',
      src: icons.JSON,
    },
    audience: {
      title: 'Ver dados de Audiência',
      alt: 'Ícone de um grupo de pessoas',
      src: icons.audience,
    },
    deepLink: {
      title: 'Deep Link',
      alt: 'Ícone com duas telas de smartphones, com uma seta que aponta para direita e sobrepõe ambas as telas',
      src: icons.deepLink,
    },
    externalLink: {
      title: 'Navegar para link externo',
      alt: 'Ícone de uma corrente com dois elos',
      src: icons.externalLink,
    }
  };

  const handleModalContent = (content, type) => {
    setIsVisible(true);
    setModalContentType(type);
    setModalContent(content);

    // window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({
    //   'event': 'button_click',
    //   'buttonInfo': {
    //     'space': details.content.payload.espaco,
    //     'mBox': details.content.payload.mBox,
    //     'buttonType': 'view_json',
    //     'offer': details.content.payload.nomeOferta
    //   }
    // });
  };

  // const handleButtonClick = (type) => {
  //   window.dataLayer = window.dataLayer || [];
  //   window.dataLayer.push({
  //     'event': 'button_click',
  //     'buttonInfo': {
  //       'space': details.content.payload.espaco,
  //       'mBox': details.content.payload.mBox,
  //       'buttonType': type,
  //       'offer': details.content.payload.nomeOferta
  //     }
  //   });
  // };

  return (
    <>
      <div className='icons-container'>
        {isQA && (
          <button
            type="button"
            className="icons disabled-link"
            title={buttonProps.qa.title}
            disabled
          >
            <img src={buttonProps.qa.src} alt={buttonProps.qa.alt}/>
          </button>
        )}
        <button
          type="button"
          className="icons"
          title={buttonProps.json.title}
          onClick={() => handleModalContent({...details.content}, 'offer')}
        >
          <img src={buttonProps.json.src} alt={buttonProps.json.alt}/>
        </button>
        <button
          type="button"
          className="icons"
          title={buttonProps.audience.title}
          onClick={() => handleModalContent({experienceName, audienceDetails, offerId: details.id, ...details.content.payload}, 'audience')}
        >
          <img src={buttonProps.audience.src} alt={buttonProps.audience.alt} />
        </button>
        {
          isExternalOrDeepLink(deeplink)
            ? (
              <a href={deeplink} target="_blank" rel="noreferrer">
                <button
                  type="button"
                  className={`icons ${!deeplink && 'disabled-link'}`}
                  title={buttonProps.externalLink.title}
                  disabled={!deeplink}
                >
                  <img src={buttonProps.externalLink.src} alt={buttonProps.externalLink.alt} />
                </button>
              </a>
            ) : (
              <button
                className="icons disabled-link"
                type="button"
                title={buttonProps.deepLink.title}
                disabled
              >
                <img src={buttonProps.deepLink.src} alt={buttonProps.deepLink.alt} />
              </button>
            )
        }
      </div>
      {isVisible && (
        <main className="overlay">
          <div className="modal">
            <button className="close" type="button" onClick={() => setIsVisible(false)}>X</button>
            {modalContentType === 'offer' ? (
              <pre>
                {JSON.stringify(modalContent, null, 2)}
              </pre>
            ) : (
              <AudienceModal>
                <p>
                  <strong>Audience Id: </strong>
                  <a href={`https://api-qa-spaces-target.onrender.com/audiences/${modalContent.audienceDetails.id}`} target="_blank" rel="noopener noreferrer">
                    {modalContent.audienceDetails.id}
                  </a>
                </p>
                <p><strong>Audience: </strong>{modalContent.audienceDetails.name}</p>
                <p><strong>Experience: </strong>{modalContent.experienceName}</p>
                <hr/>
                <p><strong>Offer Id: </strong>{modalContent.offerId}</p>
                <p><strong>Offer: </strong>{modalContent.nomeOferta || modalContent.name}</p>
                {props.priority && (<p><strong>Priority: </strong>{props.priority}</p>)}
              </AudienceModal>
            )}
            
          </div>
        </main>
      )}
    </>
  );
}

CardButtons.propTypes = {
  offer: PropTypes.object,
  priority: PropTypes.number,
}.isRequired;
