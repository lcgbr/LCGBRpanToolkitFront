import React from 'react';
import PropTypes from 'prop-types';
import logoLCG from '../../assets/lcgbr-white-logo.webp';

import { HeaderContainer, HeaderTitle, HeaderButton } from './style';


export default function Header(props) {
  const { selectedSpace, setSelectedSpace } = props;

  return (
    <>
      <HeaderContainer>
        <a href="https://www.limaconsulting.com/pt-br/" target='_blank' rel="noreferrer">
          <img src={logoLCG} />
        </a>
        <HeaderTitle>
          <h1>LCGBR Toolkit
            <br/>
            <span>QA - Spaces Adobe Target</span>
          </h1>
        </HeaderTitle>
        <HeaderButton>
          <select value={selectedSpace} onChange={(e) => setSelectedSpace(e.target.value)}>
            <option value="dashResumo1">Dash Resumo 1</option>
            <option value="dashResumo2">Dash Resumo 2</option>
            <option value="dashResumo3">Dash Resumo 3</option>
            <option value="telaCentralAvisos">Central de Avisos</option>
            <option value="homeResumo1">Home Resumo 1</option>
            <option value="homeResumo2">Home Resumo 2</option>
            <option value="homeResumo3">Home Resumo 3</option>
            <option value="DashCartão">Dash Cartão</option>
            <option value="DashConta">Dash Conta</option>
            <option value="DashCredito">Dash Crédito</option>
            <option value="Modal Toast - Home Cartao">Modal Toast Cartão</option>
            <option value="modalHomeContaProd">Modal Toast Conta</option>
            {/* <option value="Modal Toast - Home Credito">Toast - Home Credito</option>
            <option value="">Web - Desktop1</option>
            <option value="">Web - Desktop2</option>
            <option value="">Web - Desktop3</option>
            <option value="">Web - Mobile1</option>
            <option value="">Web - Mobile2</option>
            <option value="">Web - Mobile3</option> */}
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
