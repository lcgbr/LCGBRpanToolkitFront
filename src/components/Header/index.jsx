import React from 'react';
import PropTypes from 'prop-types';
import { SPACES_ARRAY } from '../../utils/spaces';
import logoLCG from '../../assets/lcgbr-white-logo.webp';
import { HeaderContainer, HeaderTitle, HeaderButton } from './style';


export default function Header(props) {
  const { selectedSpace, setSelectedSpace } = props;

  const handleSpace = (value) => {
    sessionStorage.setItem('mBox', value);
    setSelectedSpace(value);
  };

  return (
    <>
      <HeaderContainer>
        <a href="https://www.limaconsulting.com/pt-br/" target='_blank' rel="noreferrer">
          <img src={logoLCG} />
        </a>
        <HeaderTitle>
          <h1>TOOLKIT LCG
            <br/>
            <span>Target Experience Validator</span>
          </h1>
        </HeaderTitle>
        <HeaderButton>
          <select value={selectedSpace} onChange={(e) => handleSpace(e.target.value)}>
            {SPACES_ARRAY.map((space, index) => (
              <option key={index} value={space.mBox}>{space.displayName}</option>
            ))}
          </select>
        </HeaderButton>
      </HeaderContainer>
    </>
  );
}

Header.propTypes = {
  selectedSpace: PropTypes.string,
  setSelectedSpace: PropTypes.func,
  getSpaceContent: PropTypes.func
}.isRequired;
