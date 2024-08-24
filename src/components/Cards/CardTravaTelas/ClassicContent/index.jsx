import React from 'react';
import PropTypes from 'prop-types';
import { Content } from './style';


export default function ClassicContent(props) {
  const { payload, colors } = props;

  const lighterImageUrl = (payload.imagemURL && payload.imagemURL.split('?')[0]) || null;

  return (
    <Content $colors={colors}>
      <img src={lighterImageUrl} alt={payload.textoAcessibilidade} />
      <section>
        <h1>{payload.textoTitulo}</h1>
        <h2>{payload.textoValor}</h2>
        <p>{payload.textoDescricao}</p>
      </section>
    </Content>
  );
}

ClassicContent.propTypes = {
  payload: PropTypes.object,
  colors: PropTypes.object,
}.isRequired;
