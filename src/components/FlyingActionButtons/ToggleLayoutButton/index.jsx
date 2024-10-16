import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonFAB } from './style';
import icons from '../../../assets';

export default function ToggleLayoutButton(props) {
  const { isDisabled, setCurrentDisplayedSpace, spaceData } = props;

  // Estado para controlar o ícone e o título
  const [isUnifiedView, setIsUnifiedView] = useState(true); // False = Modular, True = Unificada

  // Função para alternar o estado
  const handleToggleView = () => {
    setIsUnifiedView(!isUnifiedView);
    // toast.success('Layout alterado com sucesso!');
  };

  useEffect(() => {
    setCurrentDisplayedSpace(isUnifiedView ? spaceData[1] : spaceData[0]);
  }, [isUnifiedView]);

  return (
    <>
      <ButtonFAB
        title={isUnifiedView ? 'Alternar para visão modular' : 'Alternar para visão unificada'}
        onClick={handleToggleView}
        disabled={isDisabled}
      >
        <img
          src={isUnifiedView ? icons.darkCubes : icons.darkCube}
          alt={isUnifiedView ? 'Ícone de visão unificada' : 'Ícone de visão modular'}
        />
      </ButtonFAB>
    </>
  );
}

ToggleLayoutButton.propTypes = {
  isDisabled: PropTypes.bool,
  setCurrentDisplayedSpace: PropTypes.func,
  spaceData: PropTypes.array,

};
