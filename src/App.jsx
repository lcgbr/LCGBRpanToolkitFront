import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { SPACES_OBJECT } from './utils/spaces';
import { fetchSpaceContent } from '../src/utils/api';
import { unifySpaceData } from './utils/categorizeActivities';
import Header from './components/Header';
import Main from './components/Main';
import GlobalStyles from './styles/GlobalStyles';
import ExportCsvButton from './components/FlyingActionButtons/ExportCsvButton';
import ToggleLayoutButton from './components/FlyingActionButtons/ToggleLayoutButton';


function App() {
  const mBox = sessionStorage.getItem('mBox') || SPACES_OBJECT.dashResumo1.mBox;
  const [selectedSpace, setSelectedSpace] = useState(mBox);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentDisplayedSpace, setCurrentDisplayedSpace] = useState([]);
  const [spaceData, setSpaceData] = useState([[],[]]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUnifiedView, setIsUnifiedView] = useState(true); // True = Unificada, False = Modular

  const sortApiResponse = (response) => {
    response.sort((a, b) => {
      // Primeiro critério: ordenar pelo campo 'scheduling' (string) em ordem alfabética
      if (a.scheduling < b.scheduling) return -1;
      if (a.scheduling > b.scheduling) return 1;
    
      // Segundo critério: ordenar pelo campo 'priority' (número) em ordem decrescente
      if (a.priority > b.priority) return -1;
      if (a.priority < b.priority) return 1;
    
      // Terceiro critério: ordenar pelo campo 'startsAt' (data/hora) em ordem crescente
      const dateA = new Date(a.startsAt);
      const dateB = new Date(b.startsAt);
      return dateA - dateB;
    });
  };

  const getSpaceContent = async () => {
    setErrorMessage('');
    setIsLoading(true);

    const selectedSpaceClean = selectedSpace.replace(/\s/g, '').toLowerCase();
    const response = await fetchSpaceContent(selectedSpaceClean);
    
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
    setIsLoading(false);
    // window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({
    //   'event': 'space_view',
    //   'pageInfo': {
    //     'space': selectedSpaceClean,
    //     'activities': response.length
    //   }
    // });
  };

  useEffect(() => {
    getSpaceContent();
    setIsUnifiedView(true);
  }, [selectedSpace]);

  return (
    <>
      <GlobalStyles />
      <Header
        selectedSpace={selectedSpace}
        setSelectedSpace={setSelectedSpace}
        getSpaceContent={getSpaceContent}
        errorMessage={errorMessage}
      />
      <Main
        errorMessage={errorMessage}
        isLoading={isLoading}
        spaceData={currentDisplayedSpace}
      />
      <ExportCsvButton content={spaceData[0] || []} isDisabled={isLoading} mBox={mBox || 'mBox'} />
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

export default App;
