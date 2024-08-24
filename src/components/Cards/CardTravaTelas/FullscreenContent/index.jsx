import React from 'react';
import PropTypes from 'prop-types';
import { Content } from './style';

export default function FullscreenContent(props) {
  const { payload } = props;

  const lighterImageUrl = (payload.imagemFullscreen && payload.imagemFullscreen.split('?')[0]) || null;

  return (
    <Content>
      <img src={lighterImageUrl} alt={payload.textoAcessibilidade} />
    </Content>
  );
}

FullscreenContent.propTypes = {
  payload: PropTypes.object,
}.isRequired;
