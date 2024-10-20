import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { apiMockLima } from '../../utils/apiMockLima';
import { sortApiResponse, unifySpaceData } from '../../utils/activitiesHelperFunctions';
import Header from '../../components/Header';
import Main from '../../components/Main';
import GlobalStyles from '../../styles/GlobalStyles';
import ExportCsvButton from '../../components/FlyingActionButtons/ExportCsvButton';
import ToggleLayoutButton from '../../components/FlyingActionButtons/ToggleLayoutButton';


export default function Mock() {
  const SPACES_ARRAY = [
    { displayName: 'Espaço Comercial 1', mBox: 'espacoComercial1' },
    { displayName: 'Espaço Comercial 2', mBox: 'espacoComercial2' }
  ];

  const mBox = sessionStorage.getItem('mBox') || SPACES_ARRAY[0].mBox;
  const [selectedSpace, setSelectedSpace] = useState(mBox);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentDisplayedSpace, setCurrentDisplayedSpace] = useState([]);
  const [spaceData, setSpaceData] = useState([[],[]]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUnifiedView, setIsUnifiedView] = useState(true); // True = Unificada, False = Modular

  const getSpaceContent = async () => {
    setErrorMessage('');
    setIsLoading(true);

    const response = selectedSpace === 'espacoComercial1' ? apiMockLima[0] : apiMockLima[1];
    
    if (response.status) {
      setErrorMessage(response.message);
      setCurrentDisplayedSpace([]);
      setSpaceData([[],[]]);
    } else {
      setErrorMessage('');
      sortApiResponse(response);
      const unifiedSpaceData = unifySpaceData(response);
      setCurrentDisplayedSpace(unifiedSpaceData);
      setSpaceData([response, unifiedSpaceData]);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
    
  };

  useEffect(() => {
    toast.error('Página em construção');
    getSpaceContent();
    setIsUnifiedView(true);
    // Função de limpeza ao desmontar
    return () => {
      sessionStorage.clear();
    };
  }, [selectedSpace]);

  return (
    <>
      <GlobalStyles />
      <Header
        selectedSpace={selectedSpace}
        setSelectedSpace={setSelectedSpace}
        SPACES_ARRAY={SPACES_ARRAY}
      />
      <Main
        errorMessage={errorMessage}
        isLoading={isLoading}
        spaceData={currentDisplayedSpace}
      />
      <ExportCsvButton content={spaceData[0] || []} isDisabled={isLoading} mBox={mBox} />
      <ToggleLayoutButton
        isDisabled={isLoading}
        setCurrentDisplayedSpace={setCurrentDisplayedSpace}
        spaceData={spaceData}
        isUnifiedView={isUnifiedView}
        setIsUnifiedView={setIsUnifiedView}
      />
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
}
