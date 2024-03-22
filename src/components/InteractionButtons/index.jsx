import React, { useState } from 'react';
import PropTypes from 'prop-types';
import JSONicon from '../../assets/json-icon.png';
// import audienceIcon from '../../assets/audience-icon.png';
import deepLinkIcon from '../../assets/deep-link-icon.png';
import externalLinkIcon from '../../assets/external-link-icon.png';
import '../../styles/App.css';


export default function ViewJsonButton(props) {
  const {details, audienceIds, experienceName } = props.offer;
  // const {audienceIds} = props.offer;

  const [isVisible, setIsVisible] = useState(false);
  const [modalContent, setModalContent] = useState({...details, audienceIds, experienceName});

  const deeplink = details.content.payload.acao || details.content.payload.deeplink || details.content.payload.linkExterno;

  // const mensagem = 'Não é possível redirecionar. Deeplinks são destinados a abrir aplicativos em dispositivos móveis e não são navegáveis em um web browser padrão';

  const isExternalOrDeepLink = (link) => {
    const regex = /^(http|https):\/\//;
    return regex.test(link);
  };

  const handleModalContent = (content) => {
    setIsVisible(true);
    setModalContent(content);
  };

  return (
    <>
      <div className='icons-container'>
        <button className="icons" type="button" onClick={() => handleModalContent({...details, audienceIds, experienceName})}>
          <img src={JSONicon} alt="Visualizar JSON" />
        </button>
        {/* <button className="icons" type="button" onClick={() => handleModalContent({experienceName, audienceIds})}>
          <img src={audienceIcon} alt="Visualizar ID da audiência" />
        </button> */}
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        {
          isExternalOrDeepLink(deeplink)
            ? (<a href={deeplink} target="_blank" rel="noreferrer">
              <button className={`icons ${!deeplink && 'disabled-link'}`} type="button" disabled={!deeplink}>
                <img src={externalLinkIcon} alt="Acessar External Link" />
              </button>
            </a>) : (
              <button className="icons disabled-link" type="button" disabled>
                <img src={deepLinkIcon} alt="Deep Link" />
              </button>
            )
        }
      </div>
      {isVisible && (
        <main className="overlay">
          <div className="modal">
            <button className="close" type="button" onClick={() => setIsVisible(false)}>X</button>
            <pre>
              {JSON.stringify(modalContent, null, 2)}
            </pre>
          </div>
        </main>
      )}
    </>
  );
}

ViewJsonButton.propTypes = {
  offer: PropTypes.object,
}.isRequired;
