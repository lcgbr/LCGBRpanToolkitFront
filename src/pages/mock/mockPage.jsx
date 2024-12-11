import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from '../../components/Header';
import Main from '../../components/Main';
import ExportCsvButton from '../../components/FlyingActionButtons/ExportCsvButton';
import ToggleLayoutButton from '../../components/FlyingActionButtons/ToggleLayoutButton';
import { apiMockLima } from '../../utils/apiMockLima';
import { sortApiResponse, unifySpaceData } from '../../utils/activitiesHelperFunctions';
import { shuffleMockData } from '../../utils/shuffleMockData';
import GlobalStyles from '../../styles/GlobalStyles';

const SPACES_ARRAY = [
  { displayName: 'mBox 1', mBox: 'mBox1' },
  { displayName: 'mBox 2', mBox: 'mBox2' }
];

export default function Mock() {
  const mBox = sessionStorage.getItem('mBox') || SPACES_ARRAY[0].mBox;
  const [selectedSpace, setSelectedSpace] = useState(mBox);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentDisplayedSpace, setCurrentDisplayedSpace] = useState([]);
  const [spaceData, setSpaceData] = useState([[],[]]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUnifiedView, setIsUnifiedView] = useState(true); // True = Unificada, False = Modular

  const location = useLocation();
  const currentPath = location.pathname;

  const getSpaceContent = async () => {
    setErrorMessage('');
    setIsLoading(true);

    const data = apiMockLima.map((act) => ({
      ...act,
      name: `${selectedSpace} | ${act.name}`,
    }));

    let response;

    if (currentPath === '/mock/static') {
      response = data;
    } else {
      response = shuffleMockData(data);
    }

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
    getSpaceContent();
    setIsUnifiedView(true);
    // // Função de limpeza ao desmontar, importante ao sair da página de mock
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
