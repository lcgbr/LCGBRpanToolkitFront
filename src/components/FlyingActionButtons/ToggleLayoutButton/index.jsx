import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { ButtonFAB } from './style';
import icons from '../../../assets';

export default function ToggleLayoutButton(props) {
  const { isDisabled, setCurrentDisplayedSpace, spaceData, isUnifiedView, setIsUnifiedView } = props;

  const handleToggleView = () => {
    if(spaceData[0].length === 0) {
      toast.error('Não há dados para visualizar!');
      return;
    }
    setIsUnifiedView(!isUnifiedView);
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
  isUnifiedView: PropTypes.bool,
  setIsUnifiedView: PropTypes.func,
};
