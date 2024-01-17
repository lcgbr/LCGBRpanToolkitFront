import React from 'react';
import PropTypes from 'prop-types';
// import SendTokenModal from './SendTokenModal';
import logoLCG from '../assets/lcgbr-white-logo.webp';
// import logoPan from '../assets/pan-white-logo.png';
import '../styles/App.css';

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
            <option value="dashResumo">Dash Resumo</option>
            <option value="homeResumo">Home Resumo</option>
            <option value="telaCentralAvisos">Central de Avisos</option>
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
