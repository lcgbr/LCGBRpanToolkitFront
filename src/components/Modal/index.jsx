import React from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalContainer, CloseButton } from './style';


export default function Modal(props) {
  const { children, setIsVisible } = props;

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton
          type="button"
          onClick={() => setIsVisible(false)}>X</CloseButton>
        {children}
      </ModalContainer>
    </Overlay>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
}.isRequired;
