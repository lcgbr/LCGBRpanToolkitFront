import React from 'react';
import PropTypes from 'prop-types';
import { Content } from './style';


export default function WithoutImageContent(props) {
  const { payload, colors } = props;

  return (
    <Content $colors={colors}>
      <section>
        <h1>{payload.textoTitulo}</h1>
        <h2>{payload.textoValor}</h2>
        <p>{payload.textoDescricao}</p>
      </section>
    </Content>
  );
}

WithoutImageContent.propTypes = {
  payload: PropTypes.object,
  colors: PropTypes.object,
}.isRequired;
