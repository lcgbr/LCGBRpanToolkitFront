import React from 'react';
import PropTypes from 'prop-types';
import logoLCG from '../../assets/lcgbr-white-logo.webp';
import '../../styles/App.css';

// import SendTokenModal from '../SendTokenModal';
// import logoPan from '../assets/pan-white-logo.png';

export default function Header(props) {
  const {
    selectedSpace,
    setSelectedSpace,
    // getSpaceContent,
    // errorMessage
  } = props;

  // const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <header>
        {/* <div className="logos-container" > */}
        <a href="https://www.limaconsulting.com/pt-br/" target='_blank' rel="noreferrer">
          <img className="logos" src={logoLCG} />
        </a>
        {/* <img className="logos" src={logoPan} /> */}
        {/* </div> */}
        <div className="app-titles-container">
          <h1 className="app-title">LCGBR Toolkit<br/><span className="app-subtitle">QA - Spaces do Adobe Target</span></h1>
        </div>
        <div className='buttons'>
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
            <option value="Modal Toast - Home Cartao">Toast - Home Cartão</option>
            <option value="Modal Toast - Home Conta">Toast - Home Conta</option>
            {/* <option value="Modal Toast - Home Credito">Toast - Home Credito</option>
            <option value="">Web - Desktop1</option>
            <option value="">Web - Desktop2</option>
            <option value="">Web - Desktop3</option>
            <option value="">Web - Mobile1</option>
            <option value="">Web - Mobile2</option>
            <option value="">Web - Mobile3</option> */}

          </select>
          {/* <button 
            className={errorMessage === 'Parece que o token fornecido é inválido ou expirou.' && 'required-token'}
            type="button"
            onClick={() => setIsVisible(true)
            }>
            Informar Token
          </button> */}
        </div>
      </header>

      {/* {isVisible && <SendTokenModal setIsVisible={setIsVisible} getSpaceContent={getSpaceContent}/>} */}
    </>
  );
}

Header.propTypes = {
  selectedSpace: PropTypes.string,
  setSelectedSpace: PropTypes.func,
  getSpaceContent: PropTypes.func
}.isRequired;
