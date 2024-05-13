import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';


export default function IconButton(props) {
  const { buttonProps, isDisabled, onClick } = props;

  return (
    <Container
      type="button"
      title={buttonProps.title}
      disabled={isDisabled}
      onClick={onClick}
    >
      <img src={buttonProps.src} alt={buttonProps.alt}/>
    </Container>
  );}

IconButton.propTypes = {
  buttonProps: PropTypes.object,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func
}.isRequired;
