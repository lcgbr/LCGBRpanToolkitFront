import React from 'react';
import PropTypes from 'prop-types';
import { Container, X, CardButton} from './style';
import ClassicContent from './ClassicContent';
import FullscreenContent from './FullscreenContent';
import WithoutImageContent from './WithoutImageContent';

export default function CardTravaTelas(props) {
  const { payload } = props.payload.offerDetails.content;

  const colors = {
    BRANCO: '#ffffff',
    PRETO: '#0d1317',
    CINZA: '#3a404a',
    CINZA_CLARO: '#6C7689',
    CINZA_ESCURO: '#24282E',
    AZUL: '#07b2fd',
    VERMELHO: '#ff5045',
  };

  const templateColors = {
    backgroundColor: colors[payload.backgroundColor] || colors.BRANCO,
    corTitulo: colors[payload.corTitulo]  || colors.PRETO,
    corValor: colors[payload.corValor]  || colors.AZUL,
    corDescricao: colors[payload.corDescricao] || colors.CINZA,
    temaBotao: colors[payload.temaBotao] || colors.AZUL,
    corTextoBotao: payload.temaBotao === 'AZUL' ? colors.BRANCO : colors.PRETO,
    corBotaoFechar: colors[payload.corBotaoFechar] || colors.BRANCO,
  };

  const getCardTemplate = (imagemFullscreen, imagemURL) => {
    const blankImage = 'https://image.pan.com.vc/lib/fe3b15707564047b7d1475/m/1/c38c87a9-7b87-445e-a8b2-5ff585f0309e.png';

    if (imagemFullscreen) {
      return (<FullscreenContent payload={payload} />);
    } else if (!imagemFullscreen && (!imagemURL || imagemURL === blankImage)) {
      return (<WithoutImageContent payload={payload} colors={templateColors} />);
    } else {
      return (<ClassicContent payload={payload} colors={templateColors}/>);
    }
  };

  return (
    <Container $colors={templateColors}>
      <X $colors={templateColors}>x</X>
      {getCardTemplate(payload.imagemFullscreen, payload.imagemURL)}
      <CardButton $colors={templateColors}>{payload.textoBotao}</CardButton>
    </Container>
  );
}

CardTravaTelas.propTypes = {
  payload: PropTypes.object,
}.isRequired;
