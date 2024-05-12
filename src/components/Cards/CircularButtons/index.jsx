import React, { useState } from 'react';
import PropTypes from 'prop-types';
import icons from '../../../assets';
import IconButton from '../IconButton';
import Modal from '../../Modal';

import { IconsContainer, AudienceModal } from './style';


export default function CircularButtons(props) {
  const { details, audienceDetails, experienceName } = props.offer;
  const { content } = details;

  const [isOfferModalVisible, setOfferModalVisible] = useState(false);
  const [isAudienceModalVisible, setAudienceModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({...content});

  const deepLink = content.payload.acao || content.payload.deeplink || content.payload.linkExterno;

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
    if (type === 'offer') setOfferModalVisible(true);
    if (type === 'audience') setAudienceModalVisible(true);
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
      <IconsContainer>
        {isQA && <IconButton buttonProps={buttonProps.qa} isDisabled />}
        <IconButton
          buttonProps={buttonProps.json}
          onClick={() => handleModalContent({...content}, 'offer')}
        />
        <IconButton
          buttonProps={buttonProps.audience}
          onClick={() => handleModalContent({experienceName, audienceDetails, offerId: details.id, ...content.payload}, 'audience')}
        />
        {isExternalOrDeepLink(deepLink) ? 
          (<a href={deepLink} target="_blank" rel="noreferrer"><IconButton buttonProps={buttonProps.externalLink} isDisabled={!deepLink} /></a>) 
          :
          (<IconButton buttonProps={buttonProps.deepLink} isDisabled />)
        }
      </IconsContainer>
      
      { 
        isOfferModalVisible &&
        <Modal setIsVisible={setOfferModalVisible}>
          <pre>{JSON.stringify(modalContent, null, 2)}</pre>
        </Modal>
      }
      {
        isAudienceModalVisible &&
        <Modal setIsVisible={setAudienceModalVisible}>
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
            {!!props.priority && <p><strong>Priority: </strong>{props.priority}</p>}
          </AudienceModal>
        </Modal>
      }
    </>
  );
}

CircularButtons.propTypes = {
  offer: PropTypes.object,
  priority: PropTypes.number,
}.isRequired;
