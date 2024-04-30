import React, { useState } from 'react';
import PropTypes from 'prop-types';
import QAicon from '../../assets/qa-icon.png';
import JSONicon from '../../assets/json-icon.png';
import audienceIcon from '../../assets/audience-icon.png';
import deepLinkIcon from '../../assets/deep-link-icon.png';
import externalLinkIcon from '../../assets/external-link-icon.png';

import '../../styles/App.css';
import { AudienceModal } from './style';

export default function InteractionButtons(props) {
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
          <button title="QA: Oferta em validação ou testes" className="icons disabled-link" type="button" disabled>
            <img src={QAicon} alt="Ícone de um balão Erlenmeyer, um recipiente utilizado em laboratórios químicos"/>
          </button>
        )}
        <button title="Visualizar JSON" className="icons" type="button" onClick={() => handleModalContent({...details.content}, 'offer')}>
          <img src={JSONicon} alt="Ícone de um sinal de reticências entre chaves. {...}"/>
        </button>
        <button title="Audiência" className="icons" type="button" onClick={() => handleModalContent({experienceName, audienceDetails, offerId: details.id, ...details.content.payload}, 'audience')}>
          <img src={audienceIcon} alt="Ícone de um grupo de pessoas" />
        </button>
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        {
          isExternalOrDeepLink(deeplink)
            ? (<a href={deeplink} target="_blank" rel="noreferrer">
              <button className={`icons ${!deeplink && 'disabled-link'}`} type="button" title="Navegar para link externo" disabled={!deeplink}>
                <img src={externalLinkIcon} alt="Ícone de uma corrente com dois elos" />
              </button>
            </a>) : (
              <button className="icons disabled-link" type="button" title="Deeplink" disabled>
                <img src={deepLinkIcon} alt="Ícone com duas telas de smartphones, com uma seta que aponta para direita e sobrepõe ambas as telas" />
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

InteractionButtons.propTypes = {
  offer: PropTypes.object,
  priority: PropTypes.number,
}.isRequired;
